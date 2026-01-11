import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // 🔥 Enhanced hover pill (bigger + smoother)
  const navItemClass =
    `
    cursor-pointer
    rounded-md
    px-3 py-1
    leading-none
    transition-all duration-300 ease-out
    hover:bg-white/10
    hover:px-3 hover:py-4
    
    `;

  return (
    <header className="sticky top-0 z-50 flex justify-center pt-4">
      <nav
        className="
          w-[92vw] max-w-[800px]
          rounded-xl
          border border-white/40
          bg-black/60
          backdrop-blur-2xl
          shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_12px_50px_rgba(0,0,0,0.65)]
          transition-all duration-300 ease-out
        "
      >
        {/* MAIN ROW */}
        <div className="flex items-center gap-4 px-5 py-5">
          
          {/* LOGO */}
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto cursor-pointer select-none transition-transform duration-300 ease-out hover:scale-[1.02]"
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-2 text-sm font-bold text-white">
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
                cursor-pointer
                rounded-md
                bg-gradient-to-r from-indigo-500 to-purple-600
                px-5 py-4
                text-sm font-extrabold text-white
                shadow-lg
                transition-all duration-300 ease-out
                hover:bg-white hover:text-black hover:from-white hover:to-white
                hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]
              "
            >
              Book a Call
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden ml-auto cursor-pointer text-white text-2xl font-bold leading-none transition-transform duration-300 ease-out hover:scale-110"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden px-5 pb-5 pt-2 text-sm font-bold text-white transition-all duration-300 ease-out">
            <div className="flex flex-col gap-2">
              <span className={navItemClass}>Home</span>
              <span className={navItemClass}>Our Clients</span>
              <span className={navItemClass}>Testimonial</span>
              <span className={navItemClass}>Our Services</span>
              <span className={navItemClass}>Portfolio</span>

              <button
                className="
                  mt-0 ml-auto w-fit
                  cursor-pointer
                  rounded-md
                  bg-gradient-to-r from-indigo-500 to-purple-600
                  px-5 py-4
                  text-sm font-extrabold text-white
                  transition-all duration-300 ease-out
                  hover:bg-white hover:text-black hover:from-white hover:to-white
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
