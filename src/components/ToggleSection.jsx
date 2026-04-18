import SectionHeader from './SectionHeader';

export default function ToggleSection({ activeView, setActiveView }) {
  return (
    <div className="text-center">
      <SectionHeader
        title="Premium Digital Tools"
        description="Find smart digital products with practical features, clear pricing, and smooth cart management."
        center
      />
      <div className="mt-6 inline-flex rounded-full border border-[#dfdfea] bg-white p-1.5 shadow-sm">
        <button
          onClick={() => setActiveView('products')}
          className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
            activeView === 'products' ? 'bg-[#6c2cff] text-white' : 'text-slate-600'
          }`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveView('cart')}
          className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
            activeView === 'cart' ? 'bg-[#6c2cff] text-white' : 'text-slate-600'
          }`}
        >
          Cart
        </button>
      </div>
    </div>
  );
}

