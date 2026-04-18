import SectionHeader from './SectionHeader';
import userIcon from '../assets/user.png'; 
import packageIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';

const steps = [
  {
    icon: userIcon, 
    title: 'Create Account',
    text: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    icon: packageIcon, 
    title: 'Choose Products',
    text: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    icon: rocketIcon, 
    title: 'Start Creating',
    text: 'Download and start using your premium tools immediately.',
  },
];

export default function StepsSection() {
  return (
    <section id="steps" className="bg-[#f1f1f5] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get Started in 3 Steps"
          description="Start using premium digital tools in minutes, not hours."
          center
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => {
            return (
              <div key={step.title} className="rounded-[22px] bg-white p-7 text-center shadow-[0_16px_32px_rgba(21,20,31,0.05)]">
                {/* Image Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f3ecff]">
                  <img src={step.icon} alt={step.title} className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-extrabold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
