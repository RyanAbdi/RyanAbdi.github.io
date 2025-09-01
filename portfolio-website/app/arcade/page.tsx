import Link from "next/link";
export default function arcade() {
    return (
        <div className="pt-40 px-20">
            <h1 className="text-white text-center mb-8">
                Arcade Games In Python
            </h1>
            <div className="flex flex-row h-full gap-8">
                <div className="flex-1 bg-transparent">
                    <section className="mt-5">
                        <h2 className="text-white">
                            Technologies used: Python
                        </h2>
                        <br />
                        <p>
                            I created a collection of arcade games in Python as
                            my Grade 10 capstone project for computer science,
                            marking my first personal programming experience.
                            The project features classic games including Pong,
                            Guess the Number, and Rock Paper Scissors against a
                            computer opponent. Pong and Rock Paper Scissors are
                            played through interactive menus, while Guess the
                            Number is played in the console, with plans to add
                            menu support in the future. Throughout development,
                            I focused on building simple, engaging gameplay and
                            learning core programming concepts such as loops,
                            conditionals, and user input. This project helped me
                            develop foundational coding skills and sparked my
                            passion for creating interactive applications.
                        </p>
                        <div className="mt-10 flex gap-10">
                            <Link
                                href="https://github.com/RyanAbdi/ArcadePython"
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
                        src="Pong.jpg"
                        alt="Pong Screenshot"
                        className="rounded-lg shadow-lg max-h-96 object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
