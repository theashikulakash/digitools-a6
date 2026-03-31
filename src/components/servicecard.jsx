const ServiceCard = () => {
  const tools = [
    { name: "AI Writing Pro", price: "29", tag: "Hot Sale", desc: "Generate high-quality content, blogs, and marketing copy in seconds." },
    { name: "Design Templates Pack", price: "49", tag: "Popular", desc: "1000+ premium assets for professional designers and marketing studios." },
    { name: "Premium Ebook Assets", price: "19", tag: "10%", desc: "Ready-to-use professional layout for publishing novels and digital books." },
    
  ];

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Premium Digital Tools</h2>
        <p>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
        <div className="inline-flex bg-purple-100 p-1 rounded-full">
          <button className="bg-purple-600 theme-text px-6 py-2 rounded-full text-sm">Products</button>
          <button className="px-6 py-2 text-sm text-purple-600">Carts</button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {tools.map((tool, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition relative">
            <span className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">{tool.tag}</span>
            <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">✨</div>
            <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{tool.desc}</p>
            <p className="text-2xl font-bold text-purple-600 mb-6">${tool.price}<span className="text-xs text-gray-400">/One Time</span></p>
            <button className="w-full py-3 bg-gradient-to-r from-[#4F39F6] to-[#800080] theme-text rounded-lg hover:bg-purple-700">Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;