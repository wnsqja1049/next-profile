"use client";
import React, { useState } from "react";

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
	Link
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<NextUINavbar 
		isBordered
		isMenuOpen={isMenuOpen}
		onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent justify="start">
				{/* 타이틀 */}
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<Link color="foreground" className="cursor-pointer font-bold text-2xl"
						onPress={() => {
							var anchor = document.querySelector(`#id_about_me`)
							anchor!.scrollIntoView({ behavior: 'smooth', block: 'center' })
							setIsMenuOpen(false);
						}}>Junbeom&apos;s Portfolio</Link>
				</NavbarBrand>

				{/* 메뉴 */}
				<div className="hidden md:inline-flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.label}>
							<Link color="foreground" className="cursor-pointer font-bold"
								onPress={() => {
									var anchor = document.querySelector(`#${item.id}`)
									anchor!.scrollIntoView({ behavior: 'smooth', block: 'center' })
									setIsMenuOpen(false);
								}}>
								{item.label}
							</Link>
						</NavbarItem>
					))}
				</div>
			</NavbarContent>

			<NavbarContent justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle className="md:hidden"/>
			</NavbarContent>
			
			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item) => (
						<NavbarMenuItem key={'menu_' + item.label}>
							<Link color="foreground" className="cursor-pointer font-bold"
								onPress={() => {
									var anchor = document.querySelector(`#${item.id}`)
									anchor!.scrollIntoView({ behavior: 'smooth', block: 'center' })
									setIsMenuOpen(false);
								}}>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
