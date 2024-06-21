"use client";

import { Link } from "@nextui-org/link";
import { AnchorIcon } from "./icons";

export const AnchorLink = ({href, label}: {href: string, label: string}) => {
	return (
		<Link
			className="font-nanumGothicB"
			underline="hover"
			isExternal
			showAnchorIcon
			href={href}
			anchorIcon={<AnchorIcon />}>
			{label}
		</Link>
	);
};
