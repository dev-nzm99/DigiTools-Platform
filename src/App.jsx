import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ToggleSection from './components/ToggleSection';
import ProductsSection from './components/ProductsSection';
import CartSection from './components/CartSection';
import StepsSection from './components/StepsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  const [activeView, setActiveView] = useState('products');
  const [cart, setCart] = useState([]);

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart]
  );

  const cartIds = useMemo(() => cart.map((item) => item.id), [cart]);

  const handleAddToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);

    if (exists) {
      toast.info(`${product.name} is already in your cart`);
      setActiveView('cart');
      return;
    }

    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart`);
  };

  const handleRemoveFromCart = (id) => {
    const removedItem = cart.find((item) => item.id === id);
    setCart((prev) => prev.filter((item) => item.id !== id));

    if (removedItem) {
      toast.error(`${removedItem.name} removed from cart`);
    }
  };

  const handleCheckout = () => {
    if (!cart.length) {
      toast.warning('Your cart is empty');
      return;
    }

    setCart([]);
    toast.success('Proceed to checkout completed');
    setActiveView('products');
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-slate-900">
      <Navbar cartCount={cart.length} />
      <Hero />
      <StatsSection />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ToggleSection activeView={activeView} setActiveView={setActiveView} />

        <div className="mt-10">
          {activeView === 'products' ? (
            <ProductsSection
              products={products}
              onAddToCart={handleAddToCart}
              cartIds={cartIds}
            />
          ) : (
            <CartSection
              cart={cart}
              onRemove={handleRemoveFromCart}
              onCheckout={handleCheckout}
              totalPrice={totalPrice}
            />
          )}
        </div>
      </main>

      <StepsSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;
