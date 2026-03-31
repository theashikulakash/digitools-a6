const Stats = () => {
  const statItems = [
    { label: "Active Users", value: "50K+" },
    { label: "Premium Tools", value: "200+" },
    { label: "Rating", value: "4.9" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-[#800080] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-x-0 md:divide-x divide-purple-400">
        {statItems.map((stat, idx) => (
          <div key={idx} className="text-white">
            <h2 className="text-4xl theme-text font-bold">{stat.value}</h2>
            <p className="theme-text mt-2 opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;