import Link from "next/link";
export default function winter() {
    return (
        <div className="pt-40 px-20">
            <h1 className="text-white text-center mb-8">Winter Messages</h1>
            <div className="flex flex-row h-full gap-8">
                <div className="flex-1 bg-transparent">
                    <section className="mt-5">
                        <h2 className="text-white">
                            Technologies used: REACT, Firebase, HTML, CSS,
                            JavaScript, SQL
                        </h2>
                        <br />
                        <p>
                            This project is a real-time chat application built
                            using React and Firebase Firestore. It showcases my
                            ability to create interactive and dynamic web
                            applications with a focus on real-time data
                            synchronization. The application allows users to
                            engage in conversations, with each message update
                            being instantly reflected across all connected
                            clients. Utilizing Firebase's powerful backend
                            services, the app handles user authentication and
                            real-time database updates seamlessly. The project
                            demonstrates my proficiency in using modern web
                            development tools and frameworks to create a
                            responsive and user-friendly chat interface.
                        </p>
                        <div className="mt-10 flex gap-10">
                            <Link
                                href="https://github.com/RyanAbdi/Winter-Messages"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-[3px] relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-8 py-2 bg-gray-900 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                                    View GitHub Repository
                                </div>
                            </Link>
                            <Link
                                href="https://winter-messages.firebaseapp.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-[3px] relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-8 py-2 bg-gray-900 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                                    Vist Project Website
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>
                <div className="flex justify-center bg-transparent">
                    <img
                        src="/Winter-Messages1.jpg"
                        alt="Winter Messages Screenshot"
                        className="rounded-lg shadow-lg max-h-96 object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
