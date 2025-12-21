import { useEffect, useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import Button from "../../ui/Button";
import ThemeToggle from "../../ui/Toggle/ThemeToggle";

const Header = () => {
  const { theme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const IconSrc = showMenu
    ? theme === "light"
      ? "/X-close-light.svg"
      : "/X-close.svg"
    : theme === "light"
      ? "/menu-01-light.svg"
      : "/menu-01.svg";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`
    sticky top-0 z-50 transition-all duration-300
    ${isScrolled
            ? "bg-white/80 dark:bg-black/70 backdrop-blur-md shadow-sm"
            : "bg-white dark:bg-black"
          }
  `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">

          {/* LOGO */}
          <img
            src={theme === "light" ? "/Logo_Light.svg" : "/Logo.svg"}
            alt="Logo"
            className="w-36"
          />

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            {["About", "Service", "Project", "Testimonials", "FAQ"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium hover:text-orange-500 transition"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* DESKTOP ACTION */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="primary" size="md" className="rounded-full px-8">
              Let's Talk
            </Button>
          </div>

          {/* MOBILE ACTION */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="icon" onClick={() => setShowMenu(!showMenu)}>
              <img src={IconSrc} alt="Menu Icon" />
            </Button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {showMenu && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-6 space-y-6">

            <ul className="flex flex-col gap-4 font-semibold">
              {["About", "Service", "Project", "Testimonials", "FAQ"].map(
                (item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-orange-500 transition"
                    onClick={() => setShowMenu(false)}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>

            <Button
              variant="primary"
              size="md"
              className="w-full rounded-full"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
