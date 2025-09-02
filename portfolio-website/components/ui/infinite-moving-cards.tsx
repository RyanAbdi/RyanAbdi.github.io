"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        src: string;
        alt?: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Set animation direction and duration via inline style
    let animationDirection = direction === "left" ? "forwards" : "reverse";
    let animationDuration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

    // Duplicate items for seamless infinite scroll
    const allItems = [...items, ...items];

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
            style={{
                // fallback values, can be overridden by CSS
                ["--animation-direction" as any]: animationDirection,
                ["--animation-duration" as any]: animationDuration,
            }}
        >
            <ul
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {allItems.map((item, idx) => (
                    <li
                        className="relative w-[350px] max-w-full shrink-0 md:w-[450px] flex items-center justify-center overflow-hidden bg-transparent"
                        key={item.src + idx}
                    >
                        <img
                            src={item.src}
                            alt={item.alt || `Image ${idx + 1}`}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
