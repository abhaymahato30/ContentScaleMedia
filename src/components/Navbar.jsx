import { useEffect, useState } from "react";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";
import { FiPhone } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const HERO_HEIGHT = 650;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > HERO_HEIGHT);
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
      setOpen(false);
    }
  };

  const openCalendly = () => {
    window.open(
      "https://calendly.com/contentscalemedia/strategycall?back=1&month=2026-01",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const navItemClass = `
    cursor-pointer
    rounded-md
    px-3 py-2
    text-xs sm:text-sm
    font-semibold
    transition-all duration-300 ease-out
    hover:px-4
    ${
      scrolled
        ? "text-[#315B46] hover:bg-[#315B46]/10"
        : "text-[#EFECCE] hover:bg-white/10"
    }
  `;

  return (
    <header className="fixed top-0 left-0 z-50 w-full flex justify-center px-3 sm:px-6 pt-3">
      <nav
        className={`
          w-full max-w-[860px]
          rounded-xl
          backdrop-blur-2xl
          transition-all duration-300 ease-out
          ${
            scrolled
              ? "bg-[#EFECCE]/70 border border-[#315B46]/15 shadow-[0_8px_30px_rgba(49,91,70,0.15)]"
              : "bg-black/30 border border-white/10 shadow-[0_8px_35px_rgba(0,0,0,0.45)]"
          }
        `}
      >
        {/* MAIN ROW */}
        <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3.5 sm:py-8">
          
          {/* LOGO */}
          <img
            src={scrolled ? logoDark : logoLight}
            alt="Logo"
            onClick={() => scrollToSection("hero")}
            className="
              h-11 w-auto
              max-w-[220px] md:max-w-[240px] lg:max-w-[260px]
              cursor-pointer select-none
              transition-transform duration-300 ease-out
              hover:scale-[1.03]
            "
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 ml-4">
            <span className={navItemClass} onClick={() => scrollToSection("hero")}>Home</span>
            <span className={navItemClass} onClick={() => scrollToSection("testimonials")}>Testimonials</span>
            <span className={navItemClass} onClick={() => scrollToSection("portfolio")}>Portfolio</span>
            <span className={navItemClass} onClick={() => scrollToSection("results")}>Results</span>
            <span className={navItemClass} onClick={() => scrollToSection("services")}>Services</span>
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:block ml-auto">
            <button
              onClick={openCalendly}
              className="
                inline-flex items-center gap-2
                whitespace-nowrap
                bg-[#315B46]
                text-[#EFECCE]
                px-2.5 py-3.5
                text-[11px]
                font-bold
                rounded-md
                cursor-pointer
                transition-all duration-300 ease-out
                hover:bg-[#274A39]
                hover:scale-[1.02]
                active:scale-[0.97]
                shadow-[0_8px_25px_rgba(49,91,70,0.4)]
              "
            >
              <FiPhone className="text-sm shrink-0" />
              Book a Strategy Call →
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className={`
              md:hidden ml-auto text-2xl
              cursor-pointer
              transition-transform duration-300 ease-out hover:scale-110
              ${scrolled ? "text-[#315B46]" : "text-[#EFECCE]"}
            `}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div
            className={`
              md:hidden px-4 sm:px-6 pb-4 pt-2
              transition-all duration-300 ease-out
              ${scrolled ? "text-[#315B46]" : "text-[#EFECCE]"}
            `}
          >
            <div className="flex flex-col gap-2">
              <span className={navItemClass} onClick={() => scrollToSection("hero")}>Home</span>
              <span className={navItemClass} onClick={() => scrollToSection("testimonials")}>Testimonials</span>
              <span className={navItemClass} onClick={() => scrollToSection("portfolio")}>Portfolio</span>
              <span className={navItemClass} onClick={() => scrollToSection("results")}>Results</span>
              <span className={navItemClass} onClick={() => scrollToSection("services")}>Services</span>

              {/* MOBILE CTA */}
              <button
                onClick={openCalendly}
                className="
                  mt-4 ml-auto
                  inline-flex items-center gap-2
                  whitespace-nowrap
                  bg-[#315B46]
                  text-[#EFECCE]
                  px-3 py-3.5
                  text-xs
                  font-bold
                  rounded-md
                  cursor-pointer
                  transition-all duration-300 ease-out
                  hover:bg-[#274A39]
                  hover:scale-[1.02]
                  active:scale-[0.97]
                "
              >
                <FiPhone className="text-sm shrink-0" />
                Book a Strategy Call →
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
