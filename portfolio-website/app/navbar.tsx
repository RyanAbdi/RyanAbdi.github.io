"use client";
import React, { useState } from "react";
import {
    HoveredLink,
    Menu,
    MenuItem,
    ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { winter, battleship } from "@/src/Images";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const path = usePathname();

    if (path === "/resume" || path === "/transcript") {
        return null;
    }
    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
                className
            )}
        >
            <Menu setActive={setActive}>
                <a
                    href="/"
                    className="cursor-pointer text-blue-500 hover:opacity-[0.9] text-3xl font-bold"
                    onMouseEnter={() => setActive(null)} // close any open dropdown on hover
                >
                    Home
                </a>
                <MenuItem setActive={setActive} active={active} item="About Me">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/work">Work Expierence</HoveredLink>
                        <HoveredLink href="/education">Education</HoveredLink>
                        <HoveredLink href="/about">About me</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Winter Messages"
                            href="https://algochurn.com"
                            src={winter}
                            description="Real-time messaging app created using React and Firebase"
                        />
                        <ProductItem
                            title="Multiplayer Battleship"
                            href="https://tailwindmasterkit.com"
                            src={battleship}
                            description="Multiplayer Battleship using React and Websockets created for CPS 630"
                        />
                        <ProductItem
                            title="Infinity Obby"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Toronto Kitty Cab"
                            href="https://gomoonbeam.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        <ProductItem
                            title="Art Higher or Lower"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                        <ProductItem
                            title="406 Trades"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                        <ProductItem
                            title="Multiverse Adventure"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                        <ProductItem
                            title="Arcade Ganes in Python"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                        <ProductItem
                            title="Obstacle course simulator"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Links">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="https://www.linkedin.com/in/ryan-abdi/">
                            LinkedIn
                        </HoveredLink>
                        <HoveredLink href="https://github.com/RyanAbdi">
                            Github
                        </HoveredLink>
                        <HoveredLink href="/resume">Resume</HoveredLink>
                        <HoveredLink href="/transcript">Transcript</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
