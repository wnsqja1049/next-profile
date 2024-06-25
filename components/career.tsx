"use client";

import {
	Image, Chip, Link
} from "@nextui-org/react";

import { AnchorLink } from "@/components/anchorLink";

export const Career = () => {
	var companyNameStyle = "text-2xl font-bold mb-2 font-doHyeon";
	var companyTermStyle = "text-base font-nanumGothicR";

	var projectListContainerStyle = "flex flex-col gap-4";
	var projectContainerStyle = "mx-auto flex border-2 rounded-2xl p-5 flex-col md:flex-row";
	var projectLogoContainerStyle = "mr-5 flex flex-col justify-center items-center";
	var projectDescContainerStyle = "w-[400px] flex flex-col gap-2 md:border-l-4 md:pl-5 border-dotted font-nanumGothicR break-keep";
	var projectTitleStyle = "font-black text-3xl font-doHyeon";
	var projectDetailListStyle = "list-disc ml-7";
	var projectChipContainerStyle = "flex flex-wrap gap-1";

	return (
		<div className="flex flex-col gap-10">

			{/* 코스모스81 */}
			<div>
				<div className={companyNameStyle}>코스모스81 <span className={companyTermStyle}>APR 2022 ~ JAN 2024</span></div>

				<div className={projectListContainerStyle}>

					{/* NEO81 */}
					<div className={projectContainerStyle}>

						<div className={projectLogoContainerStyle}>
							<Image className="p-5" width={250} src={`/images/logo/neo81.png`} />
						</div>

						<div className={projectDescContainerStyle}>
							<div className={projectTitleStyle}>NEO81</div>

							<p>북미 웹소설 + AI이미지 + 커뮤니티 플랫폼입니다.</p>
							<p><span className="font-bold">웹소설/웹툰 플랫폼 &apos;조아라&apos;(코스모스81의 모회사)의 해외시장 진출 및 사업 확장</span>을 위해 개발되었습니다.</p>

							<p>Flutter는 크로스 플랫폼 개발이 가능한 개발환경이었지만, 웹 환경에 대한 기능 지원이 다소 부족하여 개발 과정에서 많은 어려움이 있었습니다. 프레임워크의 한계를 수차례 경험하고 극복해내는 과정으로 한 층 성장할 수 있었습니다.</p>
							<p>(현재 임시 오픈 상태입니다.)</p>
							<AnchorLink label="NEO81" href="https://neo81.com/" />

							<div>
								<p className="font-bold">1. 서비스 페이지 프론트엔드 개발 전담</p>
								<ul className={projectDetailListStyle}>
									<li>Flutter를 이용한 PC, Mobile(Android, iOS) 크로스 플랫폼 개발</li>
									<li>이미지, 동영상, 유튜브를 포함한 html 게시판 기능 개발</li>
									<li>게시글 태그 및 검색 기능 개발</li>
									<li>웹 브라우저 환경에서의 라우팅 이슈 해결</li>
									<li>Webview, Javascript를 이용하여 PC에서 발생하는 동영상 출력 이슈 해결</li>
									<li>이미지 크롭 및 데이터 형식 변환 프로세스 개발</li>
									<li>유저와 커뮤니티의 프로필 및 배경 기능 개발</li>
									<li>DM 및 알림 기능 개발</li>
									<li>소설, 커뮤니티 권한 시스템 개발</li>
									<li>웹소설 뷰어 기능 개발</li>
									<li>커뮤니티 기능 개발</li>
									<li>구글 소셜 로그인 기능 자체 개발</li>
									<li>jwt 토큰 로그인 구현</li>
									<li>회원가입 Email 인증 구현</li>
									<li>그 외 백엔드 영역을 제외한 모든 기능 개발</li>
								</ul>
							</div>

							<div>
								<p className="font-bold">2.관리자 페이지 프론트엔드 개발 전담</p>
								<ul className={projectDetailListStyle}>
									<li>IP 체크, session 로그인 구현</li>
									<li>유저, 커뮤니티, 소설, 게시글 등 모든 관리 기능 개발</li>
								</ul>
							</div>

							<div className={projectChipContainerStyle}>
								<Chip>Flutter</Chip>
								<Chip>React</Chip>
								<Chip>Javascript</Chip>
								<Chip>CSS</Chip>
							</div>
						</div>
					</div>

					{/* COSMOS81 */}
					<div className={projectContainerStyle}>

						<div className={projectLogoContainerStyle}>
							<Image className="bg-black p-5" width={250} src={`/images/logo/cosmos81.png`} />
						</div>

						<div className={projectDescContainerStyle}>
							<div className={projectTitleStyle}>COSMOS81</div>

							<p>서울 배경부터 가상의 판타지 세상까지 81개의 우주를 다루는 메타버스 플랫폼입니다.</p>
							<p>(개발을 완료하였으나 메타버스 시장 변화로 인해 서비스 오픈이 연기되었습니다.)</p>

							<div>
								<p className="font-bold">1. 서비스 페이지 프론트엔드 개발 전담</p>
								<ul className={projectDetailListStyle}>
									<li>PC, 모바일 반응형 웹 개발</li>
									<li>session 로그인 구현</li>
									<li>비밀번호 찾기, 회원가입 이메일 발송</li>
									<li>이미지를 포함한 html 게시판 기능 개발</li>
									<li>프로필 사진 기능 및 크롭 기능 개발</li>
									<li>메신저 기능 개발</li>
									<li>방명록, 친구 기능 개발</li>
									<li>확대, 축소, 이동, 토지 정보 표시 기능을 포함한 지도 자체 개발</li>
									<li>게임 클라이언트 연동</li>
									<li>그 외 프론트엔드 전체 영역 개발</li>
								</ul>
							</div>

							<div>
								<p className="font-bold">2. 관리자 페이지 프론트엔드 개발 전담</p>
								<ul className={projectDetailListStyle}>
									<li>IP 체크, session 로그인 구현</li>
									<li>공지사항 및 메인 이벤트 기능 구현</li>
									<li>유저, 게시글, 토지 등 모든 관리 기능 개발</li>
								</ul>
							</div>

							<div>
								<p className="font-bold">3. 백엔드 개발 지원</p>
								<ul className={projectDetailListStyle}>
									<li>REST API 개발</li>
								</ul>
							</div>
							<div className={projectChipContainerStyle}>
								<Chip>React</Chip>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 쇼비즈니스 */}
			<div>
				<div className={companyNameStyle}>쇼비즈니스 <span className={companyTermStyle}>DEC 2020 ~ MAR 2022</span></div>

				<div className={projectListContainerStyle}>

					{/* 쇼프라이즈 */}
					<div className={projectContainerStyle}>

						<div className={projectLogoContainerStyle}>
							<Image className="px-5 py-2" width={250} src={`/images/logo/showprize.png`} />
						</div>

						<div className={projectDescContainerStyle}>
							<div className={projectTitleStyle}>ShowPrize</div>

							<p>누구나 참여가능한 <span className="font-bold">개방형 E-Sports 서비스</span>입니다.</p>
							<p>유저들은 대회에 참여하고 상금을 획득할 수 있으며, 기업들은 클럽 구단주가 되어, 기업의 광고로 발생한 수익이 대회 상금으로 전환되는 시스템입니다.</p>
							<p>(현재 서비스 종료되었습니다.)</p>
							<AnchorLink label="관련 기사 링크" href="https://news.mt.co.kr/mtview.php?no=2021112918384065894" />

							<div>
								<p className="font-bold">1. 서비스 페이지 프론트엔드 개발 및 유지보수 전담</p>
								<ul className={projectDetailListStyle}>
									<li>PC, 모바일 반응형 웹 개발</li>
									<li>session 로그인 구현</li>
									<li>클럽 기능 구현</li>
									<li>랭킹 시스템 구현</li>
									<li>게임 클라이언트 연동</li>
									<li>대회 오픈 시간 타이머 전광판 구현</li>
									<li>그 외 프론트엔드 전체 영역 개발</li>
								</ul>
							</div>

							<div>
								<p className="font-bold">2. 관리자 페이지 프론트엔드 개발 및 유지보수 전담</p>
								<ul className={projectDetailListStyle}>
									<li>IP 체크, session 로그인 구현</li>
									<li>유저, 클럽, 대회 등 모든 관리 기능 개발</li>
								</ul>
							</div>

							<div className={projectChipContainerStyle}>
								<Chip>Javascript</Chip>
								<Chip>CSS</Chip>
							</div>
						</div>
					</div>

					{/* 쇼비즈니스 */}
					<div className={projectContainerStyle}>

						<div className={projectLogoContainerStyle}>
							<Image className="bg-white px-5 py-7" width={250} src={`/images/logo/showbusiness.png`} />
						</div>

						<div className={projectDescContainerStyle}>
							<div className={projectTitleStyle}>ShowBusiness</div>

							<p>쇼비즈니스 회사 홈페이지입니다.</p>
							<p>(현재 서비스 종료되었습니다.)</p>
							<AnchorLink label="관련 기사 링크" href="https://www.psnews.co.kr/news/articleView.html?idxno=2001231" />

							<div>
								<p className="font-bold">1. 프론트엔드 개발 및 유지보수 전담</p>
								<ul className={projectDetailListStyle}>
									<li>PC, 모바일 반응형 웹 개발</li>
									<li>한국어, 영어 지원</li>
									<li>메일 발송 기능 개발</li>
								</ul>
							</div>

							<div className={projectChipContainerStyle}>
								<Chip>Javascript</Chip>
								<Chip>CSS</Chip>
							</div>
						</div>
					</div>

					{/* 누구나집 */}
					<div className={projectContainerStyle}>

						<div className={projectLogoContainerStyle}>
							<Image className="bg-white px-10 py-5" width={250} src={`/images/logo/nugunazip.png`} />
						</div>

						<div className={projectDescContainerStyle}>
							<div className={projectTitleStyle}>누구나집</div>

							<p>누구나 집값의 10%만 있으면 아파트에 거주할 수 있는 서비스입니다.</p>
							<p>협력 업체의 요청으로 진행한 프로젝트입니다.</p>
							<p>(현재 서비스 종료되었습니다.)</p>
							<AnchorLink label="관련 블로그 링크" href="https://m.blog.naver.com/developerhk/222255332655" />

							<div>
								<p className="font-bold">1. 프론트엔드 리뉴얼 및 유지보수 전담</p>
							</div>

							<ul className={projectDetailListStyle}>
								<li>PC, 모바일 반응형 웹 개발</li>
							</ul>
							<div className={projectChipContainerStyle}>
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
