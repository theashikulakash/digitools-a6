const Footer = () => {
  return (
    <footer className="bg-slate-900 theme-text pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 text-left">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold theme-text">DigiTools</h2>
          <p className=" theme-text text-sm max-w-xs">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest  theme-text">Product</h4>
          <ul className=" space-y-2 text-sm">
            <li className="hover:text-white theme-text cursor-pointer transition">Features</li>
            <li className="hover:text-white theme-text cursor-pointer transition">Pricing</li>
            <li className="hover:text-white theme-text cursor-pointer transition">Templates</li>
            <li className="hover:text-white theme-text cursor-pointer transition">Integrations</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest  theme-text">Company</h4>
          <ul className=" theme-text space-y-2 text-sm">
            <li className="hover:text-white theme-text cursor-pointer transition">About</li>
            <li className="hover:text-white theme-text cursor-pointer transition">Blog</li>
            <li className="hover:text-white theme-text cursor-pointer transition">Careers</li>
            <li className="hover:text-white theme-text cursor-pointer transition">Press</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest  theme-text">Resources</h4>
          <ul className=" theme-text space-y-2 text-sm">
            <li className="hover:text-white theme-text cursor-pointer transition">Documentation</li>
            <li className="hover:text-white theme-text cursor-pointer transition">Help Center</li>
            <li className="hover:text-white theme-text cursor-pointer transition">Community</li>
            <li className="hover:text-white theme-text cursor-pointer transition">Contacts</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-widest  theme-text">Social Links</h4>
          <div className="flex gap-4">
             <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-500 transition cursor-pointer"><a href="https://www.instagram.com/programminghero/" target="blank"><i class="fa-brands  fa-instagram"></i></a></div> 
             <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"><a href="https://www.facebook.com/programmingHero/" target="blank"><i class="fa-brands fa-facebook-f"></i></a></div>
             <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition cursor-pointer"><a href="https://x.com/ProgrammingHero" target="blank"><i class="fa-brands fa-twitter"></i></a></div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center theme-text text-xs">
        © 2026 DigiTools. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;