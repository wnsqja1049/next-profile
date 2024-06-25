"use client";

import { Image } from "@nextui-org/react";

export const AboutMe = () => {

	return (
		<div>
			<div className='flex flex-col md:flex-row items-center gap-10'>
				<Image width={250} height={250} radius="full" src={`/images/profile/profile_capture_0.png`}/>
				<div className="flex flex-col items-center md:items-start gap-1 font-nanumGothicR">

					<div className="hidden md:block">
						<span className='text-2xl font-bold'>김 준 범</span>
						<span className="inline mx-2">웹 개발자(FE)</span>
					</div> 
					<p className='md:hidden text-2xl font-bold'>김 준 범</p>
					<p className="md:hidden">웹 개발자(FE)</p>
					<p>만드는 것을 좋아하는 웹 개발자.</p>
					<p>소통하고 협력하는 프론트엔드 개발자.</p>
					<p className='text-xl font-bold mt-3'>Contact</p>
					<p className="text-md">wnsqja1049@gmail.com</p>
				</div>
			</div>
		</div>
	);
};
