export default function Footer() {
  return (
    <footer className="relative bg-black px-6 py-20 text-white">
      <div className="mx-auto w-[92vw] max-w-[1000px]">
        
        {/* TOP ROW */}
        <div className="grid grid-cols-1 gap-14 text-center md:grid-cols-3 md:text-left">
          
          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              EDITIFY MEDIA
            </h2>
            <p className="mx-auto mt-4 max-w-xs text-base leading-relaxed text-white/70 md:mx-0">
              We help creators and brands grow faster with professionally edited
              videos.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-white/80">
              Links
            </h3>
            <ul className="space-y-3 text-base text-white/70">
              <li className="hover:text-white transition">Home</li>
              <li className="hover:text-white transition">Our Clients</li>
              <li className="hover:text-white transition">Testimonial</li>
              <li className="hover:text-white transition">Portfolio</li>
              <li className="hover:text-white transition">Our Services</li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-white/80">
              Information
            </h3>
            <ul className="space-y-3 text-base text-white/70">
              <li className="hover:text-white transition">Results</li>
              <li className="hover:text-white transition">Comparison</li>
              <li className="hover:text-white transition">Book a call</li>
              <li className="hover:text-white transition">FAQs</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col items-center gap-3 text-base text-white/60 md:flex-row md:justify-between md:text-left">
          <span className="text-center md:text-left">
            © {new Date().getFullYear()} Editify Media. All rights reserved.
          </span>
          <span className="text-center text-white/50 md:text-right">
            Designed & built with care.
          </span>
        </div>
      </div>
    </footer>
  );
}
