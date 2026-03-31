const GetStarted = () => {
  const steps = [
    { title: "Create Account", icon: "👤", desc: "Sign up for free and get access to all the tools you need." },
    { title: "Choose Products", icon: "📦", desc: "Browse our catalog and pick the tools that fit your needs." },
    { title: "Start Creating", icon: "🚀", desc: "Download and start using your premium assets and software." },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">Get Started In 3 Steps</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center text-3xl mb-4 relative">
              <span className="absolute top-0 right-0 bg-purple-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">0{i+1}</span>
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-500 max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;