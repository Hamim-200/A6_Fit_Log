import Image from "next/image";
import { iData } from "../type";
import Link from "next/link";

const LibCard = (post: iData) => {
    return (
        <Link href={`/component/TheLibrary/${post.id}`}>
            <div className=" container mx-auto overflow-hidden rounded-2xl border border-white/[0.06] bg-[#121317] transition-colors duration-200 hover:border-white/[0.1]">

                <div className="relative h-[290px] w-full">
                    <Image
                        src={post.image}
                        alt={post.name}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 532px"
                    />
                </div>

                <div className="px-8 py-8">

                    <div className="mb-5 flex flex-wrap gap-2.5">
                        {post.muscleGroups.slice(0, 2).map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#baff00] px-[14px] py-[6px] font-[family-name:var(--font-inter)] text-[14px] font-bold uppercase leading-none tracking-[0.5px] text-[#0a0b0d]">
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <h2 className="font-[family-name:var(--font-oswald)] text-[27px] font-bold uppercase leading-[1.1] tracking-[0.2px] text-white">
                        {post.name}
                    </h2>

                    <p className="mt-2 font-[family-name:var(--font-inter)] text-[16px] font-normal leading-6 text-[#9a9ca4]">
                        {post.equipment}
                    </p>

                    <div className="my-5 h-px w-full bg-white/[0.06]" />

                    <div className="flex items-center gap-6">

                        <div className="flex items-center gap-2">
                            <span className="text-[19px] text-[#9a9ca4]">
                                ◷
                            </span>

                            <span className="font-[family-name:var(--font-inter)] text-[15px] text-[#9a9ca4]">
                                {post.duration} min
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-[18px] text-[#9a9ca4]">
                                ♥
                            </span>

                            <span className="font-[family-name:var(--font-inter)] text-[15px] text-[#9a9ca4]">
                                {post.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-[19px] text-[#9a9ca4]">
                                ☆
                            </span>

                            <span
                                className="font-[family-name:var(--font-inter)] text-[15px] text-[#9a9ca4]">
                                {post.rating}
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default LibCard;