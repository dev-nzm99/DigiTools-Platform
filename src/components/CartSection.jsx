import { FaTrashAlt } from 'react-icons/fa';

function CartSection({ cart, onRemove, onCheckout, totalPrice }) {
  return (
    <section>
      <div className="mx-auto mt-10 max-w-3xl rounded-[24px] border border-[#ececf2] bg-white p-6 shadow-[0_16px_32px_rgba(21,20,31,0.05)]">
        <div className="mb-5 flex items-center justify-between border-b border-[#efeff4] pb-4">
          <div>
            <h3 className="text-2xl font-extrabold">Your Cart</h3>
            <p className="mt-1 text-sm text-slate-500">Total selected products: {cart.length}</p>
          </div>
          <div className="rounded-full bg-[#f4efff] px-4 py-2 text-sm font-semibold text-[#6c2cff]">
            ${totalPrice.toFixed(0)} total
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#d9d9e6] bg-[#fafafe] px-6 py-12 text-center text-slate-500">
            Your cart is empty. Add products from the product section.
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex flex-col gap-4 rounded-2xl bg-[#fafafe] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3ecff] text-[#6c2cff]">
                      {/* <Icon /> */}
                    </div>
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-sm text-slate-500">${item.price} / {item.period}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ffd6dd] px-4 py-2 text-sm font-semibold text-[#ff4f73]"
                  >
                    <FaTrashAlt className="text-xs" /> Remove
                  </button>
                </div>
              );
            })}

            <button
              onClick={onCheckout}
              className="mt-2 w-full rounded-full bg-[#6c2cff] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(108,44,255,0.3)]"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CartSection;
