import Link from "next/link";
export default function art() {
    return (
        <div className="pt-40 px-20">
            <h1 className="text-white text-center mb-8">Art Higher or Lower</h1>
            <div className="flex flex-row h-full gap-8">
                <div className="flex-1 bg-transparent">
                    <section className="mt-5">
                        <h2 className="text-white">
                            Technologies used: PostgreSQL, Express, REACT,
                            Node.js, HTML, CSS, JavaScript
                        </h2>
                        <br />
                        <p>
                            I developed an interactive "Higher or Lower" game
                            that challenges players to guess which of two famous
                            paintings is more valuable. Built with the PERN
                            stack (PostgreSQL, Express.js, React.js, Node.js),
                            the game presents users with two artworks and asks
                            them to decide if the painting on the left is worth
                            more or less than the one on the right. Players make
                            their choice by clicking the corresponding button,
                            and their streak continues as long as they guess
                            correctly. This project is still a work in
                            progress. I plan to add user accounts and a
                            leaderboard system to track high scores and
                            encourage friendly competition among players.
                        </p>
                        <div className="mt-10 flex gap-10">
                            <Link
                                href="https://github.com/RyanAbdi/PERN-Higher-or-Lower"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-[3px] relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-8 py-2 bg-gray-900 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                                    View GitHub Repository
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>
                <div className="flex justify-center bg-transparent">
                    <img
                        src="Art.png"
                        alt="Art Higher or Lower Screenshot"
                        className="rounded-lg shadow-lg max-h-96 object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
