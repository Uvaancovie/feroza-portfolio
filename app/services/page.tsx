const services = [
  {
    title: "HR Strategy and Systems",
    copy: "Create or refine policies, structures, and people processes that help your organisation run more smoothly.",
  },
  {
    title: "Workplace Wellbeing Support",
    copy: "Introduce wellbeing initiatives that reduce burnout, strengthen engagement, and support sustainable performance.",
  },
  {
    title: "Conflict Resolution and Mediation",
    copy: "Navigate difficult conversations with a calm, psychologically informed approach that protects relationships and clarity.",
  },
  {
    title: "Leadership and Team Coaching",
    copy: "Help managers lead with more confidence, emotional intelligence, and people awareness.",
  },
  {
    title: "Culture and Communication Reviews",
    copy: "Identify what is helping or hindering your team culture and improve how people work together.",
  },
  {
    title: "Employee Support Guidance",
    copy: "Offer practical support where staff may be struggling with stress, change, motivation, or interpersonal pressure.",
  },
];

const process = [
  "Listen carefully to the organisation's current challenges and priorities.",
  "Identify the HR, wellbeing, or communication issues that need attention.",
  "Build a tailored plan that is practical, respectful, and psychologically grounded.",
  "Support implementation and adjustments so the solution works in real life.",
];

export default function ServicesPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Services</p>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-primary-strong md:text-5xl">Practical support for people, teams, and workplace culture.</h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            Feroza combines HR knowledge with psychological insight to support organisations that want stronger systems and healthier human relationships at work.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl bg-surface p-8 shadow-sm ring-1 ring-primary/10 transition-transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold text-primary-strong">{service.title}</h2>
              <p className="mt-3 leading-7 text-foreground/75">{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary-strong py-16 text-white md:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/65">How it works</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">A simple, thoughtful working process.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {process.map((step, index) => (
              <div key={step} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <p className="text-sm font-semibold text-white/70">Step {index + 1}</p>
                <p className="mt-2 leading-7 text-white/85">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}