'use client';

import { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "../User Context/UserContext";
import PlanCard from "./planCard";

const MyPlan = () => {
    const context = useContext(UserContext);
    const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');
    const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>('duration');

    if (!context) return null;

    const { myPlan, saved } = context;

    const activeList = activeTab === 'plan' ? myPlan : saved;

    const sortedList = [...activeList].sort((a, b) => {
        if (sortBy === 'duration') return b.duration - a.duration;
        if (sortBy === 'rating') return b.rating - a.rating;
        return b.caloriesBurned - a.caloriesBurned;
    });

    const totalExercises = activeList.length;
    const totalMinutes = activeList.reduce((acc, curr) => acc + curr.duration, 0);
    const totalCalories = activeList.reduce((acc, curr) => acc + curr.caloriesBurned, 0);

    return (
        <main className="min-h-screen bg-[#0a0b0d] px-5 py-9 text-white">

            <div className=" container mx-auto">

                <div className="mb-6">
                    <h1 className="text-[26px] font-extrabold uppercase tracking-[-0.5px]">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-[13px] text-[#9a9ca4]">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="mb-[30px] w-full rounded-2xl border border-white/[0.06] bg-[#121317] px-5 py-[30px]">
                    <div className="grid grid-cols-1 md:grid-cols-3">



                        <div className="px-1 md:border-r md:border-white/[0.06] md:pr-7">
                            <p className="mb-1 text-[12px] text-[#9a9ca4]">
                                Exercises
                            </p>

                            <p className="text-[38px] font-extrabold leading-none text-[#baff00]">
                                {totalExercises}
                            </p>
                        </div>

                        <div className="mt-6 px-1 md:mt-0 md:px-7 md:border-r md:border-white/[0.06]">
                            <p className="mb-1 text-[12px] text-[#9a9ca4]">
                                Minutes
                            </p>

                            <p className="text-[38px] font-extrabold leading-none">
                                {totalMinutes}
                            </p>
                        </div>

                        <div className="mt-6 px-1 md:mt-0 md:pl-7">
                            <p className="mb-1 text-[12px] text-[#9a9ca4]">
                                Calories
                            </p>

                            <p className="text-[38px] font-extrabold leading-none">
                                {totalCalories}
                            </p>
                        </div>

                    </div>
                </div>

                <div className="mb-[22px] flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                    <div className="flex h-[38px] w-fit items-center rounded-full border border-white/[0.06] bg-[#121317] p-[3px]">

                        <button onClick={() => setActiveTab('plan')} className={`h-[30px] rounded-full px-4 text-[12px] font-medium transition ${activeTab === 'plan' ? 'bg-[#baff00] font-semibold text-[#0a0b0d] shadow-[0_0_20px_-4px_rgba(186,255,0,0.5)]' : 'text-[#9a9ca4] hover:text-white'}`}>
                            Today&apos;s Plan
                        </button>

                        <button onClick={() => setActiveTab('saved')} className={`h-[30px] min-w-[100px] rounded-full px-4 text-[12px] font-medium transition ${activeTab === 'saved' ? 'bg-[#baff00] font-semibold text-[#0a0b0d] shadow-[0_0_20px_-4px_rgba(186,255,0,0.5)]' : 'text-[#9a9ca4] hover:text-white'}`}>
                            Saved
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[12px] text-[#9a9ca4]">
                            Sort By
                        </span>

                        <div className="dropdown dropdown-end">
                            <button tabIndex={0} className="flex h-[34px] items-center gap-2 rounded-full border border-white/[0.08] bg-[#121317] px-3 text-[12px] text-white transition hover:border-white/[0.16]">
                                {sortBy === 'duration' ? 'Duration' : sortBy === 'calories' ? 'Calories' : 'Rating'}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#121317] border border-white/[0.08] rounded-box w-32 mt-2 z-[1]">
                                <li><button onClick={() => setSortBy('duration')} className="text-white hover:text-[#baff00] text-[12px]">Duration</button></li>
                                <li><button onClick={() => setSortBy('calories')} className="text-white hover:text-[#baff00] text-[12px]">Calories</button></li>
                                <li><button onClick={() => setSortBy('rating')} className="text-white hover:text-[#baff00] text-[12px]">Rating</button></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {sortedList.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {sortedList.map((exercise) => (
                            <PlanCard
                                key={exercise.id}
                                post={exercise}
                                onRemove={() => {
                                    if (activeTab === 'plan') {
                                        context.setMyPlan(prev => prev.filter(p => p.id !== exercise.id));
                                    } else {
                                        context.setSaved(prev => prev.filter(p => p.id !== exercise.id));
                                    }
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-[282px] w-full items-center justify-center rounded-2xl border border-dashed border-white/[0.08] bg-[#0a0b0d]">
                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-[20px] font-extrabold uppercase tracking-[-0.2px]">
                                NOTHING HERE YET
                            </h2>
                            <p className="mt-1.5 text-[12px] text-[#9a9ca4]">
                                Browse the library and add a lift to get today moving.
                            </p>
                            <Link href="/">
                                <button className="mt-5 h-[36px] rounded-full bg-[#baff00] px-6 text-[12px] font-bold text-[#0a0b0d] shadow-[0_0_24px_-2px_rgba(186,255,0,0.35)] transition duration-200 hover:scale-[1.02] hover:bg-[#c9ff33]">
                                    Go to workouts
                                </button>
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </main>
    );
};

export default MyPlan;