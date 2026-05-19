export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 bg-primary-strong text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 text-sm font-bold">
              F
            </span>
            <div>
              <p className="text-lg font-semibold">Feroza</p>
              <p className="text-sm text-white/70">HR Specialist & Psychologist</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/75">
            Practical HR support, psychologically informed leadership guidance, and workplace wellbeing for modern teams.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Pages</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="/" className="transition-colors hover:text-white">Home</a></li>
            <li><a href="/about" className="transition-colors hover:text-white">About</a></li>
            <li><a href="/services" className="transition-colors hover:text-white">Services</a></li>
            <li><a href="/contact" className="transition-colors hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Contact</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              Email: <a href="mailto:hello@feroza.co.za" className="transition-colors hover:text-white">hello@feroza.co.za</a>
            </li>
            <li>Available for HR consulting, workplace wellbeing, and leadership support.</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-sm text-white/60">
        <p>&copy; {currentYear} Feroza. All rights reserved.</p>
      </div>
    </footer>
  );
}
