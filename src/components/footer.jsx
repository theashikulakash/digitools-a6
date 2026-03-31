const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">DigiTools</h2>
          <p className="text-gray-400 text-sm">Premium digital tools for modern professionals.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Product</h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Tools</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Social Links</h4>
          <div className="flex gap-4">
             <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
             <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
             <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
        © 2026 DigiTools. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;