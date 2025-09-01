import Link from "next/link";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function CPS406() {
    return (
        <div className="pt-40 px-20">
            <h1 className="text-white text-center mb-8">406 Trades</h1>
            <div className="flex flex-row h-full gap-8">
                <div className="flex-1 bg-transparent">
                    <section className="mt-5">
                        <h2 className="text-white">
                            Technologies used: MongoDB, Flask, HTML, CSS,
                            Python, Alpaca API
                        </h2>
                        <br />
                        <p>
                            406-Trades is a professional and responsive stock
                            market simulator developed as a final project for
                            CPS406: Introduction to Software Engineering. Built
                            with Python, Flask, and MongoDB, and leveraging the
                            Alpaca API for real-time market data, the platform
                            allows users to experience paper trading in a
                            realistic environment. Users can create accounts,
                            view real-time stock information, manage portfolios,
                            and execute simulated trades, all through an
                            intuitive web interface. The project features robust
                            CRUD operations, secure authentication, and a clean,
                            user-friendly design. 406-Trades aims to bridge the
                            gap between Wall Street knowledge and everyday
                            investors by providing a safe space to learn and
                            practice trading strategies without financial risk.
                        </p>
                        <div className="mt-10 flex gap-10">
                            <Link
                                href="https://github.com/406-Trades/406-Trades"
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
                        src="406Logo.png"
                        alt="406 Trades Logo"
                        className="rounded-lg shadow-lg max-h-96 object-contain"
                    />
                </div>
            </div>
            <div className="rounded-md flex flex-col antialiased items-center justify-center relative">
                <InfiniteMovingCards
                    items={items}
                    direction="right"
                    speed="normal"
                />
            </div>
        </div>
    );
}

const items = [
    { src: "/406Trades/Account.jpg", alt: "Account Page" },
    { src: "/406Trades/Admin.jpg", alt: "Admin Page" },
    { src: "/406Trades/Home.jpg", alt: "Home Page" },
    { src: "/406Trades/login.jpg", alt: "Login Page" },
    // { src: "/406Trades/Market.jpg", alt: "Market Page" },
    {
        src: "/406Trades/Updated_Class_Diagram.png",
        alt: "Updated Class Diagram",
    },
];
