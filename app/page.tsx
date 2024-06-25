import { AboutMe } from "@/components/about-me";
import { Career } from "@/components/career";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { TopButton } from "@/components/top-button";

export default function Home() {

	return (
		<div>
			<div className="flex flex-col items-center gap-20 mb-40">
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
			</div>
			
			<TopButton/>
		</div>
	);
}
