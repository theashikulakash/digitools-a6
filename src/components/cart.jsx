import React from 'react';

const Cart = ({ cart, onRemove, onCheckout, activeTab, setActiveTab }) => {

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
    <div className="mt-10">

        <div className='flex flex-col items-center mx-auto px-6 md:px-20 text-center max-w-4xl'>
          <h2 className="text-3xl md:text-4xl font-bold theme-text-black mb-2">Shopping Cart</h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
            Review your selected tools and assets before proceeding to checkout.
          </p>
        </div>
      <div className="flex justify-center gap-4 mb-8">
        
        <button
          onClick={() => setActiveTab('products')}
          className={`btn btn-sm md:btn-md rounded-3xl ${activeTab === 'products' ? 'btn-primary theme-text' : 'btn-outline btn-primary hover:'}`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab('cart')}
          className={`btn btn-sm md:btn-md rounded-3xl ${activeTab === 'cart' ? 'btn-primary theme-text' : 'btn-outline btn-primary hover:theme-text'}`}
        >
          Cart ({cart.length})
        </button>
      </div>

      <div className="max-w-4xl mx-auto py-10 px-4 md:px-6 bg-white rounded-3xl border border-dashed border-purple-200 p-6 md:p-10 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Shopping Cart</h2>
        
        <div className="space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center justify-between bg-gray-50/50 p-4 rounded-2xl transition-all hover:shadow-sm border border-transparent hover:border-purple-100"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center shadow-sm text-2xl border border-gray-100">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">{item.name}</h4>
                    <p className="text-purple-600 text-xs md:text-sm font-semibold">${item.price}</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => onRemove(item.id)}
                  className="text-red-400 hover:text-red-500 font-medium text-xs md:text-sm transition px-3 py-2 hover:bg-red-50 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div className="py-20 text-center bg-gray-50/30 rounded-3xl border border-dashed border-gray-200">
              <div className="text-5xl mb-4 opacity-30">🛒</div>
              <h3 className="text-xl font-bold text-gray-800">Your cart is empty</h3>
              <p className="text-gray-500 mt-2">Looks like you haven't added anything yet.</p>
              <button 
                onClick={() => setActiveTab('products')}
                className="mt-6 text-purple-600 font-bold hover:underline"
              >
                Browse Products
              </button>
            </div>
          )}
        </div>


        <div className="mt-10 pt-8 border-t border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <span className="text-gray-500 font-medium">Subtotal</span>
            <span className="text-3xl font-extrabold text-gray-900">${total}</span>
          </div>
          
          <button onClick={onCheckout}
            disabled={cart.length === 0}
            className={`w-full bg-gradient-to-r from-[#4F39F6] to-[#800080] theme-text py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition shadow-xl shadow-purple-100 ${cart.length === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div >
  );
};

export default Cart;