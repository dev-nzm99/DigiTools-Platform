import ProductCard from './ProductCard';

export default function ProductsSection({ products, onAddToCart, cartIds }) {
  return (
    <section>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            isAdded={cartIds.includes(product.id)}
          />
        ))}
      </div>
    </section>
  );
}

