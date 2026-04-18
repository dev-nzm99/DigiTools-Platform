import { FaStar } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$0',
    note: 'Perfect for getting started',
    features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
    featured: false,
  },
  {
    name: 'Pro',
    price: '$29',
    badge: 'Most Popular',
    note: 'Best for professionals',
    features: ['Access to all premium tools', 'Unlimited templates', 'Priority support','Unlimited projects'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    note: 'For teams and businesses',
    features: ['Everything in Pro', 'Team collaboration', 'Custom integrations','Dedicated support','SLA guarantee'],
    featured: false,
  },
];

function PricingSection() {
  return (
    <>
      <section id="pricing" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Simple Transparent Pricing"
            description="Choose a pricing style that fits your budget and digital workflow."
            center
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[24px] border p-6 shadow-[0_16px_32px_rgba(21,20,31,0.05)] ${
                  plan.featured
                    ? 'border-transparent bg-gradient-to-b from-[#7333ff] to-[#b61eff] text-white'
                    : 'border-[#ececf2] bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-extrabold">{plan.name}</h3>
                  {plan.badge ? (
                    <span className="rounded-full bg-[#ffd95d] px-3 py-1 text-xs font-bold text-[#2b2165]">{plan.badge}</span>
                  ) : null}
                </div>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className={`pb-1 text-sm ${plan.featured ? 'text-white/80' : 'text-slate-500'}`}>/month</span>
                </div>
                <p className={`mt-4 text-sm leading-6 ${plan.featured ? 'text-white/85' : 'text-slate-500'}`}>{plan.note}</p>

                <ul className={`mt-6 space-y-3 text-sm ${plan.featured ? 'text-white' : 'text-slate-600'}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <FaStar className={`mt-0.5 text-xs ${plan.featured ? 'text-[#ffd95d]' : 'text-[#6c2cff]'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-6 w-full rounded-full px-4 py-3 text-sm font-semibold ${
                    plan.featured ? 'bg-white text-[#6c2cff]' : 'bg-[#6c2cff] text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#6132ff] to-[#c020ff] px-4 py-16 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold">Ready to Transform Your Workflow?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/85">
            Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#products" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#6c2cff]">
              Explore Products
            </a>
            <a href="#pricing" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingSection;
