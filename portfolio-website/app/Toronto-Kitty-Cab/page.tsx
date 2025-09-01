import Link from "next/link";
export default function TorontoKittyCab() {
    return (
        <div className="pt-40 px-20">
            <h1 className="text-white text-center mb-8">Toronto Kitty Cab</h1>
            <div className="flex flex-row h-full gap-8">
                <div className="flex-1 bg-transparent">
                    <section className="mt-5">
                        <h2 className="text-white">
                            Technologies used: JavaScript, Oracle SQL, HTML,
                            CSS, UNIX, Express, Node.js
                        </h2>
                        <br />
                        <p>
                            Collaborating with two other students, I developed a
                            comprehensive database management system using
                            JavaScript and Oracle SQL as part of our final
                            project for CPS510: Database Systems I. The platform
                            allows users to create, populate, query, and drop
                            tables, as well as view and update all data within a
                            user-friendly interface. Advanced users can also
                            execute their own custom SQL queries directly
                            through the system. My primary focus was on backend
                            development and designing the robust edit
                            functionality, enabling seamless and intuitive data
                            updates. This project strengthened my skills in
                            database design, backend logic, and building
                            interactive web applications that make complex
                            operations accessible to users.
                        </p>
                        <div className="mt-10 flex gap-10">
                            <Link
                                href="https://github.com/RyanAbdi/CPS510"
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
                        src="/TCC2.png"
                        alt="Toronto Kitty Cab Screenshot"
                        className="rounded-lg shadow-lg max-h-96 object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
