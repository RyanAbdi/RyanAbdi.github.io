"use client";
import React, { useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { text } from "stream/consumers";

export default function Home() {
    const name = [
        {
            text: "Hello",
        },
        {
            text: "I'm",
        },
        {
            text: "Ryan",
        },
        {
            text: "Abdi",
        },
    ];
    const welcome = [
        {
            text: "Welcome",
        },
        {
            text: "To",
        },
        {
            text: "My",
        },
        {
            text: "Website!",
        },
    ];
    const words = ["Software Developer", "Programmer", "Full Stack Wizard"];

    const [showFlipWords, setShowFlipWords] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFlipWords(true);
        }, 3200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <BackgroundBeamsWithCollision className="bg-gray-900">
                <div className="grid grid-cols-2 gap-4 items-center w-full justify-center">
                    <h2 className="text-2xl z-20 md:text-4xl lg:text-7xl font-bold text-center font-sans">
                        <div className="mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                            <div className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 w-[35rem]">
                                <h1>
                                    <TypewriterEffectSmooth words={name} />
                                </h1>
                                <div className="text-4xl mx-auto font-bold text-blue-500">
                                    <h2 className="flex items-center">
                                        {showFlipWords ? (
                                            <>
                                                <span className="inline-block w-[20ch] text-left">
                                                    <FlipWords
                                                        words={words}
                                                        duration={1000}
                                                    />
                                                </span>
                                            </>
                                        ) : (
                                            <span className="invisible inline-block">
                                                Invisible Text
                                            </span>
                                        )}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </h2>
                    <div className="flex justify-center">
                        <BackgroundGradient className=" rounded-full bg-white dark:bg-zinc-900">
                            <Image
                                src="/RyanAbdi.github.io/HarbourPicture.jpg"
                                alt="A Picture of me!"
                                width={611}
                                height={611}
                                className="object-contain rounded-full w-[40rem]"
                            />
                        </BackgroundGradient>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
}
