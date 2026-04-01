import React from 'react';

const ServiceCard = ({ products, onAddToCart, activeTab, setActiveTab, cartCount }) => {

  const getBadgeStyle = (type) => {
    switch (type?.toLowerCase()) {
      case 'best seller': return 'bg-orange-100 text-orange-600';
      case 'popular': return 'bg-purple-100 text-purple-600';
      case 'new': return 'bg-green-100 text-green-600';
      default: return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <div className='my-10'>
      <div className='flex flex-col items-center mx-auto px-6 md:px-20 text-center max-w-4xl'>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Premium Digital Tools</h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
        <div className='border border-2 border-blue-600 rounded-full mb-10 p-1 w-fit'>
          <div className='flex justify-center gap-4'>
            <button
              onClick={() => setActiveTab('products')}
              className={`btn btn-sm md:btn-md rounded-full px-6 ${activeTab === 'products' ? 'btn-primary theme-text' : 'btn-outline border-none btn-primary'}`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`btn btn-sm md:btn-md rounded-3xl hover:btn-error ${activeTab === 'cart' ? 'btn-primary theme-text' : 'btn-outline border-none btn-primary hover:text-white'}`}
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 "> {products.map((product) => (
        <div key={product.id} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col hover:scale-102">

          <span className={`absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getBadgeStyle(product.tag)}`}>
            {product.tag}
          </span>


          <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-6 shadow-inner">
            {product.icon}
          </div>

          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 grow">
            {product.description}
          </p>

          <div className="mb-6">
            <span className="text-xl md:text-2xl font-bold text-gray-900">৳ {product.price}</span>
            <span className="text-gray-400 text-xs md:text-sm">/{product.period}</span>
          </div>


          <ul className="space-y-2 md:space-y-3 mb-8">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-xs md:text-sm text-gray-600">
                <span className="text-green-500 font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <button
            onClick={() => onAddToCart(product)}
            className="w-full py-3 md:py-4 bg-gradient-to-r cursor-pointer from-indigo-600 to-purple-600 theme-text rounded-2xl font-bold hover:opacity-90 transition shadow-lg shadow-purple-100 text-sm md:text-base"
          >
            Buy Now
          </button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ServiceCard;