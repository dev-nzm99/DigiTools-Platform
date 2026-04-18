import { FaCheckCircle } from 'react-icons/fa';

function ProductCard({ product, onAddToCart, isAdded }) {
  const Icon = product.icon;

  return (
    <article className="rounded-[22px] border border-[#ececf2] bg-white p-5 shadow-[0_16px_32px_rgba(21,20,31,0.05)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3ecff] text-xl text-[#6c2cff]">
          {/* <Icon /> */}
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${product.badgeClass}`}>
          {product.tagType}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-extrabold">{product.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{product.description}</p>

      <div className="mt-4 flex items-end gap-2">
        <span className="text-3xl font-extrabold">${product.price}</span>
        <span className="pb-1 text-sm text-slate-500">/{product.period}</span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <FaCheckCircle className="mt-0.5 text-xs text-[#6c2cff]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onAddToCart(product)}
        className={`mt-5 w-full rounded-full px-4 py-3 text-sm font-semibold text-white transition ${
          isAdded ? 'bg-[#8d66ff]' : 'bg-[#6c2cff] hover:bg-[#5b23ec]'
        }`}
      >
        {isAdded ? 'Added to cart' : 'Buy Now'}
      </button>
    </article>
  );
}

export default ProductCard;
