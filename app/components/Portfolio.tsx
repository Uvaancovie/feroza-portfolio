export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A breakthrough solution that delivered 40% improvement in efficiency",
      category: "Web Development",
      image: "🚀",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Digital transformation initiative resulting in increased revenue",
      category: "Design & Strategy",
      image: "💼",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Enterprise solution serving 50,000+ active users",
      category: "Application Development",
      image: "🌟",
    },
    {
      id: 4,
      title: "Project Four",
      description: "Innovation project recognized with industry awards",
      category: "Innovation",
      image: "🏆",
    },
    {
      id: 5,
      title: "Project Five",
      description: "Mobile-first platform with seamless user experience",
      category: "Mobile App",
      image: "📱",
    },
    {
      id: 6,
      title: "Project Six",
      description: "Cloud infrastructure handling millions of transactions daily",
      category: "Infrastructure",
      image: "☁️",
    },
  ];

  return (
    <section id="portfolio" className="bg-light-blue py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects that have delivered exceptional results for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow hover:translate-y-[-4px] cursor-pointer"
            >
              <div className="text-5xl mb-4">{project.image}</div>
              <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-dark-blue mb-3">{project.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
