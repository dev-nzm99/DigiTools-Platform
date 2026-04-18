import heroImage from "../assets/banner.png";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mx-auto h-screen grid max-w-6xl gap-10 px-4 pb-10 pt-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-14">
      <div>
        <p className="mb-4 text-sm font-bold uppercase text-[#6c2cff]">
          New: AI-Powered Tools Available
        </p>
        <h1 className="max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Supercharge Your
          <br />
          Digital Workflow
        </h1>
        <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-[#6c2cff] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(108,44,255,0.35)]"
          >
            Explore Products
            <FaArrowRight className="text-xs" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center rounded-full border border-[#d8d8de] bg-white px-5 py-3 text-sm font-semibold text-slate-700"
          >
            Watch Demo
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[370px] overflow-hidden rounded-[26px] bg-white p-3 shadow-[0_20px_50px_rgba(21,20,31,0.09)]">
        <img
          src={heroImage}
          alt="Digital tools interface"
          className="h-[360px] w-full rounded-[22px] object-cover"
        />
      </div>
    </section>
  );
}

