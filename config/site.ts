export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "김준범 | 웹 개발자 포트폴리오",
	description: "",
	navItems: [
		{
			label: "About Me",
			id: "id_about_me",
		},
		{
			label: "Career",
			id: "id_career",
		},
		{
			label: "Skills",
			id: "id_skills",
		},
		{
			label: "Projects",
			id: "id_projects",
		},
	],
	navMenuItems: [
		{
			label: "About Me",
			href: "/about-me",
		},
		{
			label: "Career",
			href: "/career",
		},
		{
			label: "Archive",
			href: "/archive",
		},
		{
			label: "Skill",
			href: "/skill",
		},
		{
			label: "Project",
			href: "/project",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev",
	},
};
