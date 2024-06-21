import { AboutMe } from "@/components/about-me";
import { Career } from "@/components/career";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";

export default function Home() {

	return (
		<div className="flex flex-col items-center gap-20">

			<section id="id_about_me" className="flex flex-col items-center gap-5">
				<div className="text-5xl font-blackHanSans">ABOUT ME</div>
				<AboutMe/>
			</section>

			<section id="id_career" className="flex flex-col items-center gap-5">
				<div className="text-5xl font-blackHanSans">CAREER</div>
				<Career/>
			</section>

			<section id="id_skills" className="flex flex-col items-center gap-5">
				<div className="text-5xl font-blackHanSans">SKILLS</div>
				<Skills/>
			</section>

			<section id="id_projects" className="flex flex-col items-center gap-5">
				<div className="text-5xl font-blackHanSans">PROJECTS</div>
				<Projects/>
			</section>

			
					
			<div>HTML & CSS & JAVASCRIPT</div>
					<ul>
						<li>CRUD 기능을 구현할 수 있습니다.</li>
						<li>es6 문법에 익숙합니다.</li>
					</ul>
					<div>FLUTTER & DART</div>
					<ul>
						<li>CRUD 기능을 구현할 수 있습니다.</li>
						<li>각종 라이브러리를 활용할 수 있습니다.</li>
					</ul>
					<div>REACT & REACT JS</div>
					<ul>
						<li>CRUD 기능을 구현할 수 있습니다.</li>
						<li>함수형, 클래스형 컴포넌트 문법에 익숙합니다.</li>
						<li>Next.js를</li>
					</ul>
		</div>
	);
}
