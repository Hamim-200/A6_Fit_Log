import { Suspense } from "react";
import { iData } from "../type";
import Loading from "./loading";
import LibCard from "./libCard";

const Library = async () => {
    const data = await fetch("https://api.api-store.workers.dev/api/fitlog");
    const posts: iData[] = await data.json();

    return (
        <div id="library" className="min-h-screen bg-[#0a0b0d]">

            <div className="mx-auto max-w-7xl px-6 pb-2 pt-10">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#baff00]">
                    Twelve Lifts
                </p>

                <h1 className="font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
                    The Library
                </h1>

                <p className="font-[family-name:var(--font-inter)] mt-2 text-[13px] text-[#9a9ca4]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <Suspense fallback={<Loading />}>
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <LibCard key={post.id} {...post} />
                    ))}
                </div>
            </Suspense>
        </div>
    );
};

export default Library;