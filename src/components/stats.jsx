const Stats = () => {
  const statItems = [
    { label: "Active Users", value: "50K+" },
    { label: "Premium Tools", value: "200+" },
    { label: "Rating", value: "4.9" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-[#800080] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:divide-x divide-purple-400">
        {statItems.map((stat, idx) => (
          <div key={idx} className="text-white space-y-1">
            <h2 className="text-4xl md:text-5xl theme-text font-bold">{stat.value}</h2>
            <p className="theme-text text-sm md:text-base opacity-80 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;