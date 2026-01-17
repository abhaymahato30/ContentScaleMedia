import logoLight from "../assets/logo-light.png";

export default function Footer() {
  // 🔹 Smooth scroll helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  // 🔹 Calendly CTA
  const openCalendly = () => {
    window.open(
      "https://calendly.com/contentscalemedia/strategycall?back=1&month=2026-01",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="bg-[#315B46] px-6 py-24 text-[#EFECCE]">
      <div className="mx-auto w-[92vw] max-w-[1100px]">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 text-center md:text-left">

          {/* BRAND (LOGO ONLY) */}
          <div className="mx-auto md:mx-0">
            <img
              src={logoLight}
              alt="ContentHouseMedia logo"
              className="mx-auto md:mx-0 h-12 w-auto"
            />
            <p className="mt-5 max-w-xs mx-auto md:mx-0 text-base leading-relaxed text-[#EFECCE]/75">
              We help creators and brands build authority and inbound demand
              through professionally edited short-form content.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-[#EFECCE]/90">
              Navigation
            </h3>
            <ul className="space-y-3 text-base text-[#EFECCE]/70 flex flex-col items-center md:items-start">
              <li onClick={() => scrollToSection("hero")} className="cursor-pointer hover:text-[#EFECCE]">
                Home
              </li>
              <li onClick={() => scrollToSection("testimonials")} className="cursor-pointer hover:text-[#EFECCE]">
                Testimonials
              </li>
              <li onClick={() => scrollToSection("portfolio")} className="cursor-pointer hover:text-[#EFECCE]">
                Portfolio
              </li>
              <li onClick={() => scrollToSection("services")} className="cursor-pointer hover:text-[#EFECCE]">
                Our Services
              </li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-[#EFECCE]/90">
              Information
            </h3>
            <ul className="space-y-3 text-base text-[#EFECCE]/70 flex flex-col items-center md:items-start">
              <li onClick={() => scrollToSection("results")} className="cursor-pointer hover:text-[#EFECCE]">
                Results
              </li>
              <li onClick={() => scrollToSection("comparison")} className="cursor-pointer hover:text-[#EFECCE]">
                Comparison
              </li>
              <li onClick={openCalendly} className="cursor-pointer font-semibold hover:text-[#EFECCE]">
                Book a Call
              </li>
              <li onClick={() => scrollToSection("faq")} className="cursor-pointer hover:text-[#EFECCE]">
                FAQs
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-16 h-px w-full bg-[#EFECCE]/15" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col items-center gap-3 text-sm text-[#EFECCE]/60 md:flex-row md:justify-between">
          <span className="text-center md:text-left">
            © {new Date().getFullYear()} ContentScaleMedia. All rights reserved.
          </span>
          <span className="text-center md:text-right text-[#EFECCE]/50">
            Designed & built with care.
          </span>
        </div>

      </div>
    </footer>
  );
}
