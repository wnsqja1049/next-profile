"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

export const MatterCanvas = () => {
	const containerRef = useRef(null);
	const canvasRef = useRef(null);

	const Engine = Matter.Engine;
	const Render = Matter.Render;
	const Runner = Matter.Runner;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Composite = Matter.Composite;
	const Composites = Matter.Composites;
	const Mouse = Matter.Mouse;
	const MouseConstraint = Matter.MouseConstraint;
	const Events = Matter.Events;

	var ceil;
	var floor;
	var leftWall;
	var rightWall;

	var canvasWidth = 500;
	var canvasHeight = 500;

	useEffect(() => {
		
		if(window.innerWidth > 767) {
			canvasWidth = 600;
		} else {
			canvasWidth = window.innerWidth;
		}

		const engine = Engine.create({
			enableSleeping: false,//슬립 적용 시 리사이징할 때 오브젝트 고장남.
		});
		const world = engine.world;

		const render = Render.create({
			element: containerRef.current,
			canvas: canvasRef.current,
			engine: engine,
			options: {
				background: '#444',
				width: canvasWidth,
				height: canvasHeight,
				showSleeping:false,
				wireframes: false,
			}
		});

		// Run the renderer
		Render.run(render);


		var runner = Runner.create();
		Runner.run(runner, engine);


		// Add some bodies
		const htmlBall = Bodies.circle(50, 150, 80, {
			render: {
				sprite: {
					texture: '/images/matter/html.png',
					xScale: 0.563, // 160 : 284
					yScale: 0.563,
				}
			},
		});
		const javascriptBall = Bodies.circle(150, 150, 80, {
			render: {
				sprite: {
					texture: '/images/matter/javascript.png',
					xScale: 0.415, // 160 : 385
					yScale: 0.415,
				}
			},
		});
		const cssBall = Bodies.circle(250, 150, 80, {
			render: {
				sprite: {
					texture: '/images/matter/css.png',
					xScale: 0.563, // 160 : 284
					yScale: 0.563, 
				}
			},
		});


		ceil = Bodies.rectangle(canvasWidth / 2, 0.5, canvasWidth, 1, { 
			isStatic: true,
			render: {
				fillStyle:'blue'
			}
		});
		floor = Bodies.rectangle(canvasWidth / 2, canvasHeight - 0.5, canvasWidth, 1, { 
			isStatic: true,
			render: {
				fillStyle:'blue'
			}
		});
		leftWall = Bodies.rectangle(0.5, canvasHeight / 2, 1, canvasHeight, { 
			isStatic: true,
			render: {
				fillStyle:'blue'
			}
		});
		rightWall = Bodies.rectangle(canvasWidth - 0.5, canvasHeight / 2, 1, canvasHeight, { 
			isStatic: true,
			render: {
				fillStyle:'blue'
			}
		});

		World.add(world, [htmlBall, javascriptBall, cssBall, floor, ceil, leftWall, rightWall]);

		engine.gravity.y = 0.1;

		//마우스 컨트롤 추가
		var mouse = Mouse.create(render.canvas)
		var mouseConstraint = MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false
				}
			}
		});

		World.add(world, mouseConstraint);
		
		render.mouse = mouse;

		mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
		mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

		// Run the engine
		Engine.run(engine);

		// Adjust canvas size on window resize
		const handleResize = () => {
			
			Render.stop(render);
			World.remove(world, [floor, ceil, leftWall, rightWall]);
		
			if(window.innerWidth > 767) {
				canvasWidth = 600;
			} else {
				canvasWidth = window.innerWidth;
			}


			ceil = Bodies.rectangle(canvasWidth / 2, -50, canvasWidth, 100, { 
				isStatic: true,
				render: {
					fillStyle:'blue'
				}
			});
			floor = Bodies.rectangle(canvasWidth / 2, canvasHeight + 50, canvasWidth, 100, { 
				isStatic: true,
				render: {
					fillStyle:'blue'
				}
			});
			leftWall = Bodies.rectangle(-50, canvasHeight / 2, 100, canvasHeight, { 
				isStatic: true,
				render: {
					fillStyle:'blue'
				}
			});
			rightWall = Bodies.rectangle(canvasWidth + 50, canvasHeight / 2, 100, canvasHeight, { 
				isStatic: true,
				render: {
					fillStyle:'blue'
				}
			});

			World.add(world, [floor, ceil, leftWall, rightWall]);

			Render.run(render);

			console.log(canvasWidth)
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<div ref={containerRef} style={{
				border:'solid red 1px',
			}}>
				<canvas ref={canvasRef} style={{
				border:'solid red 1px',
				width: '100%',
				height:{canvasHeight},
			}}/>
			</div>
			<div>{window.innerWidth}</div>
			<div>{canvasWidth}</div>
			<div>{canvasHeight}</div>
		</>
	);
};