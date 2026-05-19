import ContactForm from "../components/Contact";

export default function ContactPage() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Contact</p>
          <h1 className="text-4xl font-bold tracking-tight text-primary-strong md:text-5xl">Talk to Feroza about your team or workplace challenge.</h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            If you need HR guidance, support with conflict, or a psychologically informed perspective on what is happening in your organisation, send a message and start the conversation.
          </p>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}