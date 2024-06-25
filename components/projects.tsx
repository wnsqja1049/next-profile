"use client";

import React, { useState } from "react";
import { Image, Chip } from "@nextui-org/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AnchorLink } from "@/components/anchorLink";

export const Projects = () => {

	const [currentIndex, setCurrentIndex] = useState(0);

	function handleChange(index: number) {
		setCurrentIndex(index);
	}


	const portfolioImages = [
		{
			label: "Image 1",
			alt: "image1",
			url: "/images/projects/portfolio_0.png",
		}, {
			label: "Image 2",
			alt: "image2",
			url: "/images/projects/portfolio_1.png",
		}, {
			label: "Image 3",
			alt: "image3",
			url: "/images/projects/portfolio_2.png",
		}
	];
	const garenImages = [
		{
			label: "Image 1",
			alt: "image1",
			url: "/images/projects/lol_api_capture_0.png",
		}, {
			label: "Image 2",
			alt: "image2",
			url: "/images/projects/lol_api_capture_1.png",
		}, {
			label: "Image 3",
			alt: "image3",
			url: "/images/projects/lol_api_capture_2.png",
		}, {
			label: "Image 4",
			alt: "image4",
			url: "/images/projects/lol_api_capture_3.png",
		}, {
			label: "Image 5",
			alt: "image5",
			url: "/images/projects/lol_api_capture_4.png",
		},
	];

	var projectContainerStyle = "md:w-[700px] mx-auto border-2 rounded-xl p-4";
	var projectLayoutStyle = "flex flex-col md:flex-row gap-5";
	var carouselContainerStyle = "flex flex-col justify-center rounded-md";
	var carouselStyle = "md:w-[350px] bg-black border-2";

	var projectTitleStyle = "font-black text-3xl font-doHyeon";
	var projectDescContainerStyle = "md:w-[350px] flex flex-col gap-2";
	var projectDescStyle = "flex flex-col gap-2 font-nanumGothicR";
	var projectChipContainerStyle = "flex flex-wrap gap-1";

	return (
		<div className="flex flex-col gap-4">
			{/* Portfolio */}
			<div className={projectContainerStyle}>
				<div className={projectLayoutStyle}>
					<div className={carouselContainerStyle}>
						<Carousel
							className={carouselStyle}
							showArrows={true}
							showStatus={false}
							autoPlay={true}
							infiniteLoop={true}
							showThumbs={false}
							onChange={handleChange}>
							{portfolioImages.map(image => (
								<div key={image.alt}>
									<Image src={image.url} radius="none" alt={image.alt} />
								</div>
							))}
						</Carousel>
					</div>

					<div className={projectDescContainerStyle}>
						<div className={projectTitleStyle}>포트폴리오</div>
						<div className={projectDescStyle}>
							<p>포트폴리오 용도로 제작한 웹사이트입니다.</p>
							<p>다크모드를 지원하며 반응형으로 제작하였습니다. </p>
							<p>React 기반에 Next UI와 Tailwind CSS를 활용하였고, Vercel로 배포하였습니다.</p>
						</div>

						<div className={projectChipContainerStyle}>
							<Chip>React</Chip>
							<Chip>Typescript</Chip>
							<Chip>Next UI</Chip>
							<Chip>Tailwind CSS</Chip>
							<Chip>Vercel</Chip>
						</div>

						<div className="text-xl font-bold">URL</div>
						<AnchorLink label="Portfolio" href="https://next-profile-git-main-kimjunbeoms-projects.vercel.app" />
					</div>
				</div>
			</div>
			{/* GAREN.GG */}
			<div className={projectContainerStyle}>
				<div className={projectLayoutStyle}>
					<div className={carouselContainerStyle}>
						<Carousel
							className={carouselStyle}
							showArrows={true}
							showStatus={false}
							autoPlay={true}
							infiniteLoop={true}
							showThumbs={false}
							onChange={handleChange}>
							{garenImages.map(image => (
								<div key={image.alt}>
									<Image src={image.url} radius="none" alt={image.alt} />
								</div>
							))}
						</Carousel>
					</div>

					<div className={projectDescContainerStyle}>
						<div className={projectTitleStyle}>GAREN.GG</div>
						<div className={projectDescStyle}>
							<p><span className="font-bold">Riot API를 이용한 League of Legends 게임의 전적검색 사이트</span>입니다.</p>
							<p>평소 즐기던 게임의 전적검색 사이트 <AnchorLink label="deeplol.gg" href="https://www.deeplol.gg/" />를 참고하여 게임정보를 어떻게 제공해 주는지 분석하고,
								게임사에서 제공하는 데이터와 이미지, API를 활용하여 정보를 시각화 하는 과정이 재미있는 경험이 되었습니다.
							</p>
							<p>최근 게임 전적, 유저 검색 기능과 아이템, 챔피언, 스킬등의 데이터를 제공합니다.</p>
							PERSONAL API KEY를 발급받아 사용하였으며 시간당 Request 횟수가 제한되어 있습니다.
							React 기반에 Next UI와 Tailwind CSS를 활용하였고, Vercel로 배포하였습니다.
						</div>

						<div className={projectChipContainerStyle}>
							<Chip>React</Chip>
							<Chip>Typescript</Chip>
							<Chip>Next UI</Chip>
							<Chip>Tailwind CSS</Chip>
							<Chip>Vercel</Chip>
						</div>

						<div className="text-xl font-bold">URL</div>
						<AnchorLink label="GAREN.GG" href="https://lol-api-git-main-kimjunbeoms-projects.vercel.app" />
					</div>
				</div>
			</div>
		</div>
	);
};
