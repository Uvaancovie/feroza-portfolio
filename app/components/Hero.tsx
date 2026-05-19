export default function Hero() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-dark-blue mb-6 leading-tight">
              Professional Portfolio & Lead Generation
            </h2>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Showcase your exceptional work and turn visitors into clients. Our portfolio platform combines stunning design with conversion-optimized forms to generate qualified leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-dark-blue transition-colors font-medium text-center"
              >
                Start Your Portfolio
              </a>
              <a
                href="#portfolio"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-light-blue transition-colors font-medium text-center"
              >
                View Examples
              </a>
            </div>
          </div>
          <div className="bg-light-blue rounded-xl p-12 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-foreground font-semibold">Portfolio Showcase Area</p>
              <p className="text-sm text-foreground/60 mt-2">Add your hero image here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
