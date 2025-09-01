import Link from "next/link";
export default function multiverse() {
    return (
        <div className="pt-40 px-20">
            <h1 className="text-white text-center mb-8">
                Multiverse Adventure
            </h1>
            <div className="flex flex-row h-full gap-8">
                <div className="flex-1 bg-transparent">
                    <section className="mt-5">
                        <p>
                            Multiverse Adventure is a Roblox simulator/tycoon
                            game where players progress through a series of
                            unique worlds, collecting resources, upgrading
                            abilities, and unlocking new areas as they advance.
                            Built entirely in Lua, the game features a variety
                            of interactive mechanics and challenges designed to
                            keep players engaged. My contributions included
                            designing and modeling 3D assets, as well as
                            scripting core gameplay systems such as world
                            progression, resource management, and player
                            upgrades. We implemented a robust client-server
                            architecture to handle game logic and data storage
                            on Roblox servers, ensuring smooth, secure, and fair
                            gameplay for everyone. This approach also allows
                            users with lower-end computers to enjoy the full
                            experience without performance issues. Multiverse
                            Adventure emphasizes creativity, exploration, and
                            progression, offering an accessible and rewarding
                            experience for all types of players.
                        </p>
                        <div className="mt-10 flex gap-10">
                            <Link
                                href="https://www.roblox.com/games/5947811305"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-[3px] relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-8 py-2 bg-gray-900 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                                    View Game Page
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>
                <div className="flex justify-center bg-transparent">
                    <img
                        src="/Multiverse.png"
                        alt="Multiverse adventure Screenshot"
                        className="rounded-lg shadow-lg max-h-96 object-contain"
                    />
                </div>
            </div>
            
        </div>
    );
}
