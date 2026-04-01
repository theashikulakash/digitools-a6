const GetStarted = () => {
  const steps = [
    { title: "Create Account", icon: "👤", desc: "Sign up for free and get access to all the tools you need." },
    { title: "Choose Products", icon: "📦", desc: "Browse our catalog and pick the tools that fit your needs." },
    { title: "Start Creating", icon: "🚀", desc: "Download and start using your premium assets and software." },
  ];

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Get Started In 3 Steps</h2>
      <p className="mb-12">Start using premium digital tools in minutes, not hours.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center p-10 rounded-2xl  bg-base-200  shadow-sm hover:shadow-md transition-shadow hover:scale-102">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-50 rounded-full flex items-center justify-center text-2xl md:text-3xl mb-4 relative">
              <span className="absolute -top-1 -right-1 md:top-0 md:right-0 bg-purple-600 theme-text shadow-sm text-[10px] md:text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">0{i+1}</span>
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm md:text-base max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;