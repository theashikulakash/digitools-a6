const Pricing = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-2">Choose the plan that's right for you</p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
        
        
        <div className="p-8 border rounded-2xl border-gray-100 order-2 md:order-1 hover:scale-102">
          <h3 className="text-lg font-bold text-gray-900">Starter</h3>
          <p className="text-3xl font-bold my-4 text-gray-900">$0<span className="text-sm text-gray-400 font-normal">/Month</span></p>
          <ul className="space-y-3 mb-8 text-gray-600 text-sm">
            <li>✅ Access to 10 products</li>
            <li>✅ Basic Templates</li>
            <li>✅ Community Support</li>
          </ul>
          <button className="w-full py-3 bg-gradient-to-r from-[#4F39F6] to-[#800080] theme-text rounded-lg font-semibold hover:opacity-90 transition cursor-pointer">Get Started Free</button>
        </div>
 

        <div className="p-8 bg-purple-600 text-white rounded-2xl shadow-xl md:transform  z-10 order-1 md:order-2 hover:scale-102">
          <span className="bg-yellow-400 text-black text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Most Popular</span>
          <h3 className="text-lg font-bold mt-4">Pro</h3>
          <p className="text-4xl font-bold my-4">$29<span className="text-sm font-normal opacity-80">/Month</span></p>
          <ul className="space-y-3 mb-8 text-sm opacity-90">
            <li>✅ Unlimited product access</li>
            <li>✅ Premium Templates</li>
            <li>✅ Priority Support</li>
            <li>✅ License included</li>
            <li>✅ Unlimited projects</li>
            <li>✅ Cloud sync</li>
            <li>✅ Advanced analytics</li>
          </ul>
          <button className="w-full py-3 bg-white text-purple-700 font-bold rounded-lg shadow-lg hover:bg-gray-50 transition cursor-pointer">Start Pro Trial</button>
        </div>

  
        <div className="p-8 border rounded-2xl border-gray-100 order-3 hover:scale-102">
          <h3 className="text-lg font-bold text-gray-900">Enterprise</h3>
          <p className="text-3xl font-bold my-4 text-gray-900">$99<span className="text-sm text-gray-400 font-normal">/Month</span></p>
          <ul className="space-y-3 mb-8 text-gray-600 text-sm">
            <li>✅ Everything in Pro</li>
            <li>✅ Team Collaboration</li>
            <li>✅ Custom integrations</li>
            <li>✅ Dedicated support</li>
            <li>✅ SLA guarantee</li>
          </ul>
          <button className="w-full bg-gradient-to-r from-[#4F39F6] to-[#800080] py-3 theme-text rounded-lg font-semibold hover:opacity-90 transition cursor-pointer">Contact Sales</button>
        </div>
      </div>
      <div className="mt-24 text-center ">
        <h2 className="text-4xl font-bold mb-2">Ready to Transform Your Workflow?</h2>
        <p>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
        <div className="flex flex-wrap gap-4 mt-5 justify-center mt-8 mb-5">
            <button className="btn btn-primary rounded-3xl">Explore Products</button>
            <button className="btn btn-primary rounded-3xl">View Pricing</button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
};

export default Pricing;