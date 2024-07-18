"use client";

import { SkillItem } from "./skill-item";

export const Skills = () => {

	return (
		<>
			{/* md:w-[650px] mx-auto */}
			<div className=" flex flex-col gap-2 border-1">
				<div>
					<div className="text-xl font-bold font-doHyeon">BASIC</div>
					<div className="flex flex-wrap gap-2">
						<SkillItem name={"html"} imageWidth={100} boxSize={1}/>
						<SkillItem name={"javascript"} imageWidth={80} boxSize={1}/>
						<SkillItem name={"css"} imageWidth={100} boxSize={1}/>
						<SkillItem name={"typescript"} imageWidth={80} boxSize={1}/>
						<SkillItem name={"dart"} imageWidth={80} boxSize={1}/>
					</div>
				</div>
				
				<div>
					<div className="text-xl font-bold font-doHyeon">FRONTEND</div>
					<div className="flex flex-wrap gap-2">
						<SkillItem name={"jquery"} imageWidth={100} boxSize={1}/>
						<SkillItem name={"react"} imageWidth={100} boxSize={1}/>
						<SkillItem name={"redux"} imageWidth={80} boxSize={1}/>
						<SkillItem name={"tailwindcss"} imageWidth={100} boxSize={1}/>
						<SkillItem name={"nextjs"} imageWidth={100} boxSize={1}/>
						<SkillItem name={"flutter"} imageWidth={100} boxSize={1}/>
					</div>
				</div>

				<div>
					<div className="text-xl font-bold font-doHyeon">TOOLS</div>
					<div className="flex flex-wrap gap-2">
						<SkillItem name={"notion"} imageWidth={90} boxSize={1}/>
						<SkillItem name={"figma"} imageWidth={100} boxSize={1}/>
						<SkillItem name={"confluence"} imageWidth={100} boxSize={1}/>
						<SkillItem name={"swagger"} imageWidth={100} boxSize={1}/>
						<SkillItem name={"postman"} imageWidth={100} boxSize={1}/>
					</div>
				</div>
				

				<div className="flex flex-wrap gap-2">
					<div>
						<div className="text-xl font-bold font-doHyeon">VCS</div>
						<div className="flex flex-wrap gap-2">
							<SkillItem name={"github"} imageWidth={100} boxSize={1}/>
							<SkillItem name={"tortoiseSVN"} imageWidth={100} boxSize={1}/>
						</div>
					</div>

					<div>
						<div className="text-xl font-bold font-doHyeon">DEPLOYMENT</div>
						<SkillItem name={"vercel"} imageWidth={100} boxSize={1}/>
					</div>
				</div>
			</div>
		</>
	);
};