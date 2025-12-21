import { useTheme } from "../../../context/ThemeContext";

const Footer = () => {
    const {theme} = useTheme();
    return (
        <section className="mx-auto max-w-md md:max-w-5xl px-9 md:mt-[80px] mb-20">

            <div className="w-full max-w-sm md:max-w-full border dark:bg-five bg-white rounded-2xl p-6 dark:border-tertiary border-six  shadow-xl py-10 md:h-[328px] md:flex md:flex-col md:justify-between">
                <div className="flex md:flex-row flex-col md:justify-between md:flex-row-reverse">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-6">
                                  {theme === "light" ? <img src="/Logo_Light.svg" alt="Logo" className='w-[141px]'/> : <img src="/Logo.svg" alt="Logo" className='w-[141px]'/> }

                    </div>

                    {/* Title */}
                    <h3 className="md:text-2xl font-bold mb-4 leading-snug ">
                        LET’S DISCUSS <br /> YOUR  IDEAS
                    </h3>
                </div>


                <hr className="dark:border-[#252B37] border-six mb-4" />

                <div className="flex md:flex-row flex-col md:justify-between">
                    {/* Links */}
                   <ul className="flex md:flex-row flex-col md:items-center gap-6 font-bold text-sm mb-6 dark:text-[#FDFDFD]">
                    <li className="cursor-pointer hover:text-orange-500 transition-colors">About</li>
                    <li className="cursor-pointer hover:text-orange-500 transition-colors">Service</li>
                    <li className="cursor-pointer hover:text-orange-500 transition-colors">Projects</li>
                    <li className="cursor-pointer hover:text-orange-500 transition-colors">Testimonials</li>
                    <li className="cursor-pointer hover:text-orange-500 transition-colors">FAQ</li>
                    </ul>

                    {/* Social */}
                    <div className="flex gap-3">
                        {["/Fb.svg", "/IG.svg", "/Linkind.svg", "/Tiktok.svg"].map((icon) => (
                            <div
                                key={icon}
                                className="w-8 h-8 rounded-full border dark:border-tertiary border-six flex items-center justify-center text-sm cursor-pointer hover:border-orange-500 hover:text-orange-500 transition"
                            >
                                <img src={icon} alt="img icon" className="transition-all duration-300 brightness-0 dark:brightness-0 dark:invert" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Footer;
