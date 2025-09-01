import Link from "next/link";

export default function battleship() {
    return (
        <div className="pt-40 px-20">
            <h1 className="text-white text-center mb-8">
                Multiplayer Battleship!
            </h1>
            <div className="flex flex-row h-full gap-8">
                <div className="flex-1 bg-transparent">
                    <section>
                        <h2 className="text-white">
                            Technologies used: REACT, HTML, CSS, JavaScript,
                            WebSockets
                        </h2>
                        <br />
                        <p>
                            This project was done for my Web Development 2
                            course (CPS 630) and it was an interesting challenge
                            as it was my first time using web sockets. The goal
                            was to create a real-time multiplayer Battleship
                            game, allowing two players to compete against each
                            other over the web. Some of the main challenges
                            included ensuring secure communication between
                            clients and the server, preventing cheating by
                            validating all moves server-side and rejecting any
                            suspicious or invalid requests. Implementing the
                            ship placement logic was also tricky, as it required
                            careful handling of user input to ensure ships did
                            not overlap or extend beyond the boundaries of the
                            game board. Additionally, I learned how to manage
                            real-time updates and synchronize game state between
                            players, which deepened my understanding of
                            asynchronous programming and event-driven
                            architectures. Overall, this project helped me
                            develop practical skills in web sockets, server-side
                            validation, and building interactive, secure web
                            applications.
                        </p>
                        <br />
                        <p>
                            To further enhance the user experience, I
                            incorporated sound effects and animations throughout
                            the game. These additions made gameplay more
                            immersive and engaging, providing audio feedback for
                            actions like scoring hits or misses. Animations were
                            used to visually highlight important events, such as
                            successful attacks or ship sinks, making the game
                            feel more dynamic and interactive. These features
                            not only improved the overall enjoyment for players
                            but also allowed me to explore front-end techniques
                            for creating responsive and visually appealing web
                            applications.
                        </p>
                        <div className="mt-10 flex gap-10">
                            <Link
                                href="https://github.com/RyanAbdi/CPS630-Lab1"
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
                        src="/Battleship.jpg"
                        alt="Battleship Screenshot"
                        className="rounded-lg shadow-lg max-h-96 object-contain"
                    />
                </div>
            </div>

            {/* Video Demo Section */}
            <section className="mt-16 mb-10">
                <h2 className="text-white text-2xl font-bold mb-4 text-center">
                    Video Demo
                </h2>
                <div className="flex justify-center">
                    <video
                        controls
                        className="rounded-lg shadow-lg max-w-2xl w-full"
                    >
                        <source src="/BattleShip.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </div>
    );
}
