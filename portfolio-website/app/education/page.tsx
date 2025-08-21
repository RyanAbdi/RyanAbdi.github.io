import Link from "next/link";

export default function education() {
    return (
        <div className="w-screen h-screen pt-40 px-20">
            <h1 className="text-white text-center">Education</h1>
            <section className="mt-5">
                <h2 className="mb-5 text-white">
                    Enrolled in Computer Science at Toronto Metropolitan
                    University (Formerly Ryerson University)
                </h2>

                <p>
                    I am currently pursuing a{" "}
                    <strong>Bachelor of Science in Computer Science</strong> at
                    <strong>Toronto Metropolitan University (TMU)</strong>. I
                    have maintained a<strong>cumulative GPA of 4.0</strong> and
                    earned <strong>Dean's List</strong> recognition every year,
                    reflecting both my academic excellence and dedication to the
                    field.
                </p>

                <ul className="text-white mt-5">
                    <li>
                        <strong>Programming & Software Engineering:</strong>{" "}
                        Computer Science I & II (CPS 109, CPS 209), Data
                        Structures (CPS 305), Software Engineering (CPS 406),
                        Comparative Programming Languages (CPS 506), Web Systems
                        Development (CPS 530), Web Applications (CPS 630)
                    </li>
                    <li>
                        <strong>Systems & Architecture:</strong> Computer
                        Organization I & II (CPS 213, CPS 310), Operating
                        Systems I (CPS 590), Computer Networks I (CPS 706)
                    </li>
                    <li>
                        <strong>Security:</strong> Introduction to
                        Cyber-Security (CPS 571), Computer Security (CPS 633)
                    </li>
                    <li>
                        <strong>Theory & Algorithms:</strong> Discrete
                        Structures (CPS 420), Algorithms (CPS 616), Artificial
                        Intelligence I (CPS 721)
                    </li>
                    <li>
                        <strong>Professional Foundations:</strong> Social
                        Issues, Ethics and Professionalism (CPS 412)
                    </li>
                </ul>

                <p className="mt-5">
                    My coursework has been complemented by hands-on co-op
                    experience, allowing me to apply classroom knowledge
                    directly to real-world software development challenges.
                </p>
            </section>
            <section className="mt-10 flex gap-10">
                <Link href="/transcript" className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2 bg-gray-900 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                        View My Transcript
                    </div>
                </Link>

                <Link
                    href="https://www.torontomu.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-[3px] relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2 bg-gray-900 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                        School Website
                    </div>
                </Link>
            </section>
        </div>
    );
}
