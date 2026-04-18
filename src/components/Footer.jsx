function Footer() {
  return (
    <footer id="footer" className="bg-[#09152f] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-extrabold tracking-tight text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6c2cff] text-sm text-white">
              D
            </div>
            <span className="text-lg">DigiTools</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/90">
            Product
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Tools</li>
            <li>Pricing</li>
            <li>Cart</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/90">
            Company
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>About</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/90">
            Follow Us
          </h3>
          <div className="mt-4 flex gap-3 text-white/80">
            <span className="rounded-full bg-white/10 px-3 py-2 text-xs">
              FB
            </span>
            <span className="rounded-full bg-white/10 px-3 py-2 text-xs">
              TW
            </span>
            <span className="rounded-full bg-white/10 px-3 py-2 text-xs">
              IN
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © 2026 DigiTools. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
