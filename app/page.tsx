import Link from "next/link";

const focusAreas = [
  {
    title: "HR strategy that supports growth",
    description:
      "Build clear policies, stronger processes, and practical people systems that help your organisation grow without chaos.",
  },
  {
    title: "Psychology-informed workplace support",
    description:
      "Bring a deeper understanding of behaviour, stress, and relationships into leadership, communication, and team dynamics.",
  },
  {
    title: "Calm solutions for sensitive issues",
    description:
      "Handle conflict, burnout, performance concerns, and culture tension in a way that is compassionate and effective.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(107,78,113,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(138,166,163,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">HR specialist & psychologist</p>
            <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-primary-strong md:text-6xl">
              People strategy that protects performance and wellbeing.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/80 md:text-xl">
              Feroza helps organisations create healthier workplaces through practical HR support, psychologically informed leadership guidance, and compassionate problem-solving.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/services" className="rounded-full bg-primary px-7 py-3.5 text-center font-semibold text-white shadow-sm transition-colors hover:bg-primary-strong">
                Explore services
              </Link>
              <Link href="/about" className="rounded-full border border-primary/20 bg-surface px-7 py-3.5 text-center font-semibold text-primary-strong transition-colors hover:bg-primary/5">
                Learn about Feroza
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] bg-surface p-8 shadow-[0_20px_60px_rgba(76,53,81,0.12)] ring-1 ring-primary/10 md:p-10">
              <div className="rounded-[1.5rem] bg-primary-strong p-8 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-white/65">A balanced approach</p>
                <h2 className="mt-4 text-3xl font-semibold">Strategic. Human. Grounded in psychology.</h2>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  Whether you need HR structure, leadership coaching, or support through a difficult workplace moment, Feroza works with clarity, empathy, and discretion.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  ["Clear HR systems", "Policies, processes, and people practices"],
                  ["Healthier teams", "Wellbeing, engagement, and communication"],
                  ["Confident leaders", "Coaching and conflict navigation"],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl bg-white p-4 ring-1 ring-primary/10">
                    <p className="font-semibold text-primary-strong">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-foreground/70">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-4 md:py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((item) => (
            <article key={item.title} className="rounded-3xl bg-surface p-8 shadow-sm ring-1 ring-primary/10">
              <h3 className="text-xl font-semibold text-primary-strong">{item.title}</h3>
              <p className="mt-3 leading-7 text-foreground/75">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="rounded-[2rem] bg-primary-strong px-8 py-10 text-white md:px-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/65">Why clients choose Feroza</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Support that understands both people and policy.</h2>
            </div>
            <p className="text-base leading-8 text-white/78 md:text-lg">
              From employee wellbeing to leadership development and conflict support, Feroza brings a calm, evidence-aware perspective to sensitive workplace conversations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
