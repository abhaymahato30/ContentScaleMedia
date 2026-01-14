export default function Footer() {
  return (
    <footer className="bg-[#315B46] px-6 py-24 text-[#EFECCE]">
      <div className="mx-auto w-[92vw] max-w-[1100px]">
        
        {/* TOP ROW */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          
          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              EDITIFY MEDIA
            </h2>
            <p className="mt-5 max-w-xs text-base leading-relaxed text-[#EFECCE]/75">
              We help creators and brands build authority and inbound demand
              through professionally edited short-form content.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-[#EFECCE]/90">
              Navigation
            </h3>
            <ul className="space-y-3 text-base text-[#EFECCE]/70">
              {[
                "Home",
                "Our Clients",
                "Testimonials",
                "Portfolio",
                "Our Services",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition-colors duration-200 hover:text-[#EFECCE]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-[#EFECCE]/90">
              Information
            </h3>
            <ul className="space-y-3 text-base text-[#EFECCE]/70">
              {[
                "Results",
                "Comparison",
                "Book a Call",
                "FAQs",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer transition-colors duration-200 hover:text-[#EFECCE]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-16 h-px w-full bg-[#EFECCE]/15" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col items-center gap-3 text-sm text-[#EFECCE]/60 md:flex-row md:justify-between">
          <span className="text-center md:text-left">
            © {new Date().getFullYear()} Editify Media. All rights reserved.
          </span>
          <span className="text-center md:text-right text-[#EFECCE]/50">
            Designed & built with care.
          </span>
        </div>
      </div>
    </footer>
  );
}
