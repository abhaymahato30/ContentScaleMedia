import { useEffect, useState } from "react";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const HERO_HEIGHT = 650;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > HERO_HEIGHT);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4">
          {/* LOGO (UNCHANGED SIZE) */}
          <img
            src={scrolled ? logoDark : logoLight}
            alt="Logo"
            className="
              h-11
              w-auto
              max-w-[220px] md:max-w-[240px] lg:max-w-[260px]
              cursor-pointer
              select-none
              transition-transform duration-300 ease-out
              hover:scale-[1.03]
            "
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 ml-4">
            <span className={navItemClass}>Home</span>
            <span className={navItemClass}>Our Clients</span>
            <span className={navItemClass}>Testimonial</span>
            <span className={navItemClass}>Our Services</span>
            <span className={navItemClass}>Portfolio</span>
          </div>

          {/* CTA */}
          <div className="hidden md:block ml-auto">
            <button
              className="
                rounded-md
                bg-[#315B46]
                px-4 sm:px-5 py-2.5 sm:py-3
                text-xs sm:text-sm
                font-bold
                text-[#EFECCE]
                shadow-md
                transition-all duration-300 ease-out
                hover:bg-[#274A39]
                hover:scale-[1.04]
                hover:shadow-[0_0_20px_rgba(49,91,70,0.45)]
              "
            >
              Book a Call
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className={`
              md:hidden ml-auto text-2xl
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
              <span className={navItemClass}>Home</span>
              <span className={navItemClass}>Our Clients</span>
              <span className={navItemClass}>Testimonial</span>
              <span className={navItemClass}>Our Services</span>
              <span className={navItemClass}>Portfolio</span>

              <button
                className="
                  mt-3 ml-auto
                  rounded-md
                  bg-[#315B46]
                  px-4 py-2.5
                  text-sm font-bold
                  text-[#EFECCE]
                  transition-all duration-300 ease-out
                  hover:bg-[#274A39]
                  hover:scale-[1.04]
                "
              >
                Book a Call
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
