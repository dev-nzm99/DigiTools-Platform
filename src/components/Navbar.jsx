export default function Navbar({ cartCount }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f8f8] shadow-lg w-full">
      <div className="mx-auto flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center gap-2 font-extrabold tracking-tight text-[#6c2cff]">
          <h1 className="text-3xl text-[#9514FA]">DigiTools</h1>
        </div>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a href="#products" className="hover:text-[#6c2cff]">Products</a>
          <a href="#features" className="hover:text-[#6c2cff]">Features</a>
          <a href="#pricing" className="hover:text-[#6c2cff]">Pricing</a>
          <a href="#testimonials" className="hover:text-[#6c2cff]">Testimonials</a>
          <a href="#faq" className="hover:text-[#6c2cff]">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-slate-600 hover:text-[#6c2cff]">
            Login
          </button>

          <button className="relative rounded-full bg-[#6c2cff] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(108,44,255,0.35)]">
            Cart
            <span className="ml-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-[#6c2cff]">
              {cartCount}
            </span>
          </button>

          <button className="rounded-full bg-[#6c2cff] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(108,44,255,0.35)] hover:bg-[#9514FA]">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}