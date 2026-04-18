export default function SectionHeader({ title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <h2 className="text-3xl font-extrabold text-slate-900">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p> : null}
    </div>
  );
}

