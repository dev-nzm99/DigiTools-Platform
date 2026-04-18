const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
];

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-[#6132ff] to-[#c020ff] py-8 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h2 className="text-3xl font-extrabold sm:text-4xl">{stat.value}</h2>
            <p className="mt-2 text-sm text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

