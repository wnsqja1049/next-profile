"use client";

import { 
	Tooltip, Image, 
} from "@nextui-org/react";

export const SkillItem = ({name, imageWidth, boxSize}: {name: string, imageWidth: number, boxSize: number }) => {

	if(boxSize === 1) {
		return (
			<Tooltip content={name}>
				<div className={`w-[120px] h-[120px] flex flex-row justify-center items-center border-2 rounded-lg bg-white`}>
					<Image isZoomed className="p-3" width={imageWidth} radius="none" src={`/images/skills/${name}.png`} />
				</div>
			</Tooltip>
		);
	} else {
		return (
			<Tooltip content={name}>
				<div className={`w-[240px] h-[120px] flex flex-row justify-center items-center border-2 rounded-lg bg-white`}>
					<Image isZoomed className="p-4" width={imageWidth} radius="none" src={`/images/skills/${name}.png`} />
				</div>
			</Tooltip>
		);
	}
};