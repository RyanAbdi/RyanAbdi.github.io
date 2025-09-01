import Link from "next/link";
export default function winter() {
    return (
        <div className="pt-40 px-20">
            <h1 className="text-white text-center mb-8">Infinity Obby</h1>
            <div className="flex flex-row h-full gap-8">
                <div className="flex-1 bg-transparent">
                    <section className="mt-5">
                        <p>
                            This ongoing project, built with the Roblox engine,
                            features an infinitely generating obstacle course in
                            the popular "obby" genre. Players progress through
                            unique, randomly generated stages, and after a set
                            number of levels, a special "Star Island" appears
                            where they can collect stars—the game’s currency.
                            The game supports multiplayer races, allowing users
                            to compete against each other on fresh courses, or
                            race against a bot if no other players are
                            available. To ensure fair and competitive
                            matchmaking, the Elo rating system is used. This
                            project combines procedural generation, engaging
                            multiplayer experiences, and dynamic progression to
                            create a fun and replayable game environment.
                            <br/><br/>
                            This game is still in progress and has not been released yet
                        </p>
                    </section>
                </div>
                <div className="flex justify-center bg-transparent">
                    <img
                        src="/InfinityObby.jpg"
                        alt="Infinity Obby Screenshot"
                        className="rounded-lg shadow-lg max-h-96 object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
