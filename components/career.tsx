"use client";

import { 
	Image, Chip, Divider, Link
} from "@nextui-org/react";

import { AnchorLink } from "@/components/anchorLink";

export const Career = () => {

	return (
		<div className="flex flex-col gap-10">
			<div>
				<div className='text-2xl font-bold mb-2 font-doHyeon'>쇼비즈니스 <span className='text-base font-nanumGothicR'>DEC 2020 ~ MAR 2022</span></div>

				<div className="flex flex-col gap-4">

					{/* 쇼프라이즈 */}
					<div className="mx-auto flex   border-2 rounded-2xl p-5   flex-col md:flex-row">

						<div className="mr-5 flex flex-col justify-center items-center">
							<Image className="px-5 py-2" width={250} src={`/images/logo/showprize.png`} />
						</div>

						<div className="w-[400px] flex flex-col gap-2 md:border-l-4 md:pl-5 border-dotted">
							<div className="font-black text-3xl font-doHyeon">ShowPrize</div>

							<div className="font-nanumGothicR">
								<div className="break-keep">누구나 참여가능한 E-Sports 서비스입니다.</div>
								<div className="break-keep">현재 서비스 종료되었습니다.</div>
								<AnchorLink label="관련 기사 링크" href="https://news.mt.co.kr/mtview.php?no=2021112918384065894"/>
							</div>

							<div>
								<p>1. 서비스 페이지 개발 (A to Z)</p>
								<ul className="list-disc ml-7 font-nanumGothicR">
									<li>PC 및 모바일 프론트엔드 개발 및 유지보수 전담</li>
								</ul>
							</div>

							<div>
								<p>2. 관리자 페이지 개발 (A to Z)</p>
								<ul className="list-disc ml-7 font-nanumGothicR">
									<li>프론트엔드 전담</li>
								</ul>
							</div>

							<div className="flex flex-wrap gap-1">
								<Chip>Javascript</Chip>
								<Chip>CSS</Chip>
							</div>
						</div>
					</div>

					{/* 쇼비즈니스 */}
					<div className="mx-auto flex   border-2 rounded-2xl p-5   flex-col md:flex-row">
						
						<div className="mr-5 flex flex-col justify-center items-center">
							<Image className="bg-white px-5 py-7" width={250} src={`/images/logo/showbusiness.png`} />
						</div>
						
						<div className="w-[400px] flex flex-col gap-2 md:border-l-4 md:pl-5 border-dotted">
							<div className="font-black text-3xl font-doHyeon">ShowBusiness</div>

							<div className="font-nanumGothicR">
								<div className="break-keep">ShowPrize 서비스의 회사 홈페이지입니다.</div>
								<div className="break-keep">현재 서비스 종료되었습니다.</div>
								<AnchorLink label="관련 기사 링크" href="https://www.psnews.co.kr/news/articleView.html?idxno=2001231"/>
							</div>

							<div>
								<p>1. 서비스 페이지 개발 (A to Z)</p>
								<ul className="list-disc ml-7 font-nanumGothicR">
									<li>PC 및 모바일 프론트엔드 개발 및 유지보수 전담</li>
								</ul>
							</div>

							<div className="flex flex-wrap gap-1">
								<Chip>Javascript</Chip>
								<Chip>CSS</Chip>
							</div>
						</div>
					</div>


					{/* 누구나집 */}
					<div className="mx-auto flex   border-2 rounded-2xl p-5   flex-col md:flex-row">

						<div className="mr-5 flex flex-col justify-center items-center">
							<Image className="bg-white px-10 py-5" width={250} src={`/images/logo/nugunazip.png`} />
						</div>

						<div className="w-[400px] flex flex-col gap-2 md:border-l-4 md:pl-5 border-dotted">
							<div className="font-black text-3xl font-doHyeon">누구나집</div>

							<div className="font-nanumGothicR">
								<div className="break-keep">누구나 집값의 10%만 있으면 아파트에 거주할 수 있는 서비스입니다.</div>
								<div className="break-keep">현재 서비스 종료되었습니다.</div>
								<AnchorLink label="관련 블로그 링크" href="https://m.blog.naver.com/developerhk/222255332655"/>
							</div>

							<div>
								<p>1. 서비스 페이지 리뉴얼 (A to Z)</p>
							</div>

							<ul className="list-disc ml-7 font-nanumGothicR">
								<li>PC 및 모바일 프론트엔드 리뉴얼 및 유지보수 전담</li>
							</ul>
							<div className="flex flex-wrap gap-1">
								<Chip>Javascript</Chip>
								<Chip>CSS</Chip>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div className='text-2xl font-bold mb-2 font-doHyeon'>코스모스81 <span className='text-base font-nanumGothicR'>APR 2022 ~ JAN 2024</span></div>

				<div className="flex flex-col gap-4">

					{/* COSMOS81 */}
					<div className="mx-auto flex   border-2 rounded-2xl p-5   flex-col md:flex-row">

						<div className="mr-5 flex flex-col justify-center items-center mb-5 md:mb-0">
							<Image className="bg-black p-5" width={250} src={`/images/logo/cosmos81.png`} />
						</div>

						<div className="w-[400px] flex flex-col gap-2 md:border-l-4 md:pl-5 border-dotted">
							<div className="font-black text-3xl font-doHyeon">COSMOS81</div>

							<div className="font-nanumGothicR">
								<div className="break-keep">81개의 우주를 다루는 메타버스 플랫폼입니다.</div>
								<div className="break-keep">개발을 완료하였으나 시장 변화로 인해 서비스 오픈이 연기되었습니다.</div>
							</div>

							<p>1.서비스 페이지 개발 (A to Z)</p>
							<ul className="list-disc ml-7 font-nanumGothicR">
								<li>PC 및 모바일 프론트엔드 개발 전담</li>
								<li>백엔드 개발 참여</li>
							</ul>

							<p>2.관리자 페이지 개발 (A to Z)</p>
							<ul className="list-disc ml-7 font-nanumGothicR">
								<li>프론트엔드 전담</li>
								<li>백엔드 개발 참여</li>
							</ul>

							<ul className="list-disc ml-7 font-nanumGothicR">
								<li>로그인 기능</li>
								<li>이미지를 포함한 게시판 CRUD 기능 구현(Amazon-S3)</li>
								<li>확대, 축소, 이동, 정보 표시 기능을 포함한 지도</li>
							</ul>
							<div className="flex flex-wrap gap-1">
								<Chip>React</Chip>
							</div>
						</div>
					</div>

					{/* NEO81 */}
					<div className="mx-auto flex   border-2 rounded-2xl p-5   flex-col md:flex-row">

						<div className="mr-5 flex flex-col justify-center items-center">
							<Image className="p-5" width={250} src={`/images/logo/neo81.png`} />
						</div>

						<div className="w-[400px] flex flex-col gap-2 md:border-l-4 md:pl-5 border-dotted">
							<div className="font-black text-3xl font-doHyeon">NEO81</div>

							<div className="font-nanumGothicR">
								<div className="break-keep">북미 웹소설 및 AI 생성 이미지 공유 커뮤니티 서비스입니다.</div>
								<div className="break-keep">현재 임시 오픈 상태입니다.</div>
								<AnchorLink label="NEO81" href="https://neo81.com/"/>
							</div>

							<p>1.서비스 페이지 개발 (A to Z)</p>
							<ul className="list-disc ml-7 font-nanumGothicR">
								<li>프론트엔드 전담</li>
								<li>크로스 플랫폼 & 크로스 브라우징 개발</li>
							</ul>

							<p>2.관리자 페이지 개발 (A to Z)</p>
							<ul className="list-disc ml-7 font-nanumGothicR">
								<li>프론트엔드 전담</li>
							</ul>

							<ul className="list-disc ml-7 font-nanumGothicR">
								<li>로그인 기능</li>
								<li>프레임워크의 기능적 한계를 경험하였고, WebView 방식으로 Javascript 웹을 출력하여 문제를 해결하였습니다.</li>
								<li>소셜미디어 공유, SNS 연동, 이미지와 동영상을 포함한 게시판 기능</li>
								<li>서비스페이지 프론트엔드 전담</li>
								<li>관리자페이지 프론트엔드 전담</li>
							</ul>
							<div className="flex flex-wrap gap-1">
								<Chip>Flutter</Chip>
								<Chip>React</Chip>
								<Chip>Javascript</Chip>
								<Chip>CSS</Chip>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};
