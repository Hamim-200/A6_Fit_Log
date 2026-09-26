import Image from "next/image";
import logo from "../../app/assets/logo.png";

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/[0.06] bg-[#0a0b0d]">
            <div className="mx-auto flex min-h-[62px] max-w-7xl items-center justify-between px-6">

                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="FITLOG"
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] object-contain opacity-90"
                    />

                    <span className="text-[12px] font-bold tracking-tight text-white">
                        FITLOG
                    </span>
                </div>

                <p className="text-[10px] text-[#6b6d75]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;