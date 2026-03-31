const Pricing = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-2">Choose the plan that's right for you</p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 items-center">
        
        
        <div className="p-8 border rounded-2xl border-gray-100">
          <h3 className="text-lg font-bold">Starter</h3>
          <p className="text-3xl font-bold my-4">$0<span className="text-sm text-gray-400 font-normal">/Month</span></p>
          <ul className="space-y-3 mb-8 text-gray-600 text-sm">
            <li>✅ Access to 10 products</li>
            <li>✅ Basic Templates</li>
            <li>✅ Community Support</li>
          </ul>
          <button className="w-full py-3 bg-gradient-to-r from-[#4F39F6] to-[#800080] border border-purple-600 text-purple-600 rounded-lg">Get Started Free</button>
        </div>
 

        <div className="p-8 bg-purple-600 text-white rounded-2xl shadow-xl transform scale-105 z-10">
          <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">Most Popular</span>
          <h3 className="text-lg font-bold mt-4">Pro</h3>
          <p className="text-4xl font-bold my-4">$29<span className="text-sm font-normal opacity-80">/Month</span></p>
          <ul className="space-y-3 mb-8 text-sm">
            <li>✅ Unlimited product access</li>
            <li>✅ Premium Templates</li>
            <li>✅ Priority Support</li>
            <li>✅ License included</li>
          </ul>
          <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-lg shadow-lg">Start Pro Trial</button>
        </div>

  
        <div className="p-8 border rounded-2xl border-gray-100">
          <h3 className="text-lg font-bold">Enterprise</h3>
          <p className="text-3xl font-bold my-4">$99<span className="text-sm text-gray-400 font-normal">/Month</span></p>
          <ul className="space-y-3 mb-8 text-gray-600 text-sm">
            <li>✅ Everything in Pro</li>
            <li>✅ Team Collaboration</li>
            <li>✅ Custom branding</li>
          </ul>
          <button className="w-full bg-gradient-to-r from-[#4F39F6] to-[#800080] py-3 border border-purple-600 text-purple-600 rounded-lg">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;