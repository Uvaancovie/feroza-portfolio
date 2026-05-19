const values = [
  {
    title: "Compassion with structure",
    copy: "Support people in a way that is kind, clear, and aligned with business needs.",
  },
  {
    title: "Psychology in practice",
    copy: "Use behavioural insight to improve communication, motivation, and decision-making.",
  },
  {
    title: "Trust and discretion",
    copy: "Handle sensitive situations professionally, calmly, and with complete care.",
  },
];

const credentials = [
  "HR specialist with experience supporting teams, leaders, and workplace systems",
  "Psychology-led approach to behaviour, wellbeing, and conflict resolution",
  "Practical support for policies, people processes, coaching, and culture",
  "Focused on small to mid-sized organisations that need thoughtful guidance",
];

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">About Feroza</p>
            <h1 className="text-4xl font-bold tracking-tight text-primary-strong md:text-5xl">A people-first professional with an HR and psychology lens.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/80">
              Feroza works at the intersection of human resources and psychology. That means her support is not only practical and operational, but also deeply aware of how people think, feel, and respond inside an organisation.
            </p>
            <p className="mt-4 max-w-2xl leading-8 text-foreground/75">
              She is the kind of partner organisations turn to when they want better systems, clearer communication, healthier leadership, and a workplace culture that feels more grounded and humane.
            </p>
          </div>

          <div className="rounded-[2rem] bg-surface p-8 shadow-sm ring-1 ring-primary/10 md:p-10">
            <h2 className="text-2xl font-semibold text-primary-strong">What guides her work</h2>
            <div className="mt-6 space-y-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl bg-white p-5 ring-1 ring-primary/10">
                  <p className="font-semibold text-primary-strong">{value.title}</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/72">{value.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface/70 py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Credentials & focus</p>
              <h2 className="mt-4 text-3xl font-bold text-primary-strong md:text-4xl">The blend of business insight and behavioural understanding.</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map((item) => (
                <article key={item} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-primary/10">
                  <p className="leading-7 text-foreground/80">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}