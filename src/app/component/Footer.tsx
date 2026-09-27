import Image from "next/image";
import Link from "next/link";
import logo from "../../app/assets/logo.png";

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/[0.06] bg-[#0a0b0d]">
            <div className="mx-auto max-w-7xl px-6 py-12">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2">
                            <Image
                                src={logo}
                                alt="FITLOG"
                                width={22}
                                height={22}
                                className="h-[22px] w-[22px] object-contain opacity-90"
                            />
                            <span className="text-[14px] font-bold tracking-tight text-white">
                                FITLOG
                            </span>
                        </div>

                        <p className="mt-4 max-w-[240px] text-[12px] leading-[1.7] text-[#9a9ca4]">
                            A dark, no-nonsense gym companion. Pick a lift, lock it into
                            today&apos;s plan, and watch the week&apos;s work add up.
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.1] text-[#9a9ca4] transition-colors duration-200 hover:border-[#baff00] hover:text-[#baff00]"
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
                                </svg>
                            </a>

                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Live site"
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.1] text-[#9a9ca4] transition-colors duration-200 hover:border-[#baff00] hover:text-[#baff00]"
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                            Navigate
                        </h3>
                        <ul className="mt-4 flex flex-col gap-3 text-[12px] text-[#9a9ca4]">
                            <li>
                                <Link href="/" className="transition-colors duration-200 hover:text-[#baff00]">
                                    Workouts
                                </Link>
                            </li>
                            <li>
                                <Link href="/component/my-plan" className="transition-colors duration-200 hover:text-[#baff00]">
                                    My Plan
                                </Link>
                            </li>
                            <li>
                                <Link href="/#library" className="transition-colors duration-200 hover:text-[#baff00]">
                                    The Library
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                            Categories
                        </h3>
                        <ul className="mt-4 flex flex-col gap-3 text-[12px] text-[#9a9ca4]">
                            <li>Chest &amp; Arms</li>
                            <li>Back &amp; Legs</li>
                            <li>Core &amp; Full Body</li>
                            <li>Shoulders</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                            About
                        </h3>
                        <ul className="mt-4 flex flex-col gap-3 text-[12px] text-[#9a9ca4]">
                            <li>12 lifts across every major muscle group</li>
                            <li>Live plan &amp; saved counters</li>
                            <li>Progress saved locally on your device</li>
                        </ul>
                    </div>

                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
                    <p className="text-[10px] text-[#6b6d75]">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>

                    <p className="text-[10px] text-[#6b6d75]">
                       # DO EXERCISE
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;