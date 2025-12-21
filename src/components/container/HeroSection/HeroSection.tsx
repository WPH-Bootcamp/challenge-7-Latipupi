import { useTheme } from "../../../context/ThemeContext";
import Button from "../../ui/Button";

const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row  items-center mt-[61px]  lg:mt-0">

        {/* LEFT CONTENT */}
        <div
          className="
            relative z-10
            lg:w-[653px]
            lg:translate-x-[120px]
            lg:-translate-y-[60px]
            lg:px-0 px-[16px]
          "
        >
          <h1 className="font-bold text-[32px]  lg:text-[52px] sm:text-[32] sm:mt-10">
            Your Tech Partner for{" "}
            <span className="text-[#FF6C37]">Smarter Growth</span>
          </h1>

          <p className="mt-2 text-[20px] max-w-[653px]">
            We deliver tailored IT solutions to help you scale with speed and confidence
          </p>

          <Button
            className="mt-10 rounded-full lg:px-10 w-full lg:w-auto mb-[43px] md:mb-10 "
            variant="primary"
            size="lg"
          >
           Let's Talk
          </Button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex-1">
          {
            theme === "light" ?
            <img
            src="/Image_Hero_Light.svg"
            alt="image-hero"
            className="w-full lg:max-w-[747px] lg:-translate-y-[70px]"
          /> :
            <img
            src="/Image_Hero.svg"
            alt="image-hero"
            className="w-full lg:max-w-[747px] lg:-translate-y-[70px]"
          />
          } 
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
