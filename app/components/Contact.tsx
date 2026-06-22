"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    supportNeed: "HR Outsourcing & Admin",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        organization: "",
        supportNeed: "HR Outsourcing & Admin",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Get in touch</p>
          <h2 className="text-4xl font-bold tracking-tight text-primary-strong md:text-5xl">Start the conversation</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-foreground/80">
            If your team needs clearer HR systems, calmer leadership support, or a psychologically informed approach to workplace challenges, this is the right place to begin.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-surface p-8 shadow-sm ring-1 ring-primary/10 md:p-10">
          {submitted && (
            <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 font-medium text-green-900">
              Thank you for reaching out! We'll contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="mb-2 block font-semibold text-foreground">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-primary/15 bg-white px-4 py-3 outline-none transition placeholder:text-foreground/35 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block font-semibold text-foreground">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-primary/15 bg-white px-4 py-3 outline-none transition placeholder:text-foreground/35 focus:border-primary focus:ring-4 focus:ring-primary/10"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-semibold text-foreground">Organisation</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full rounded-2xl border border-primary/15 bg-white px-4 py-3 outline-none transition placeholder:text-foreground/35 focus:border-primary focus:ring-4 focus:ring-primary/10"
                placeholder="Company, school, practice, or NGO"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-foreground">What kind of support do you need? *</label>
              <select
                name="supportNeed"
                value={formData.supportNeed}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-primary/15 bg-white px-4 py-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                <option value="HR Outsourcing & Admin">HR Outsourcing & Admin</option>
                <option value="Industrial & Labour Relations">Industrial & Labour Relations</option>
                <option value="Skills Development & Equity">Skills Development & Equity</option>
                <option value="B-BBEE Consulting">B-BBEE Consulting</option>
                <option value="Talent Acquisition">Talent Acquisition</option>
                <option value="Wellness & Change Management">Wellness & Change Management</option>
                <option value="Other / Custom Consultation">Other / Custom Consultation</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold text-foreground">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-2xl border border-primary/15 bg-white px-4 py-3 outline-none transition placeholder:text-foreground/35 focus:border-primary focus:ring-4 focus:ring-primary/10"
                placeholder="Tell Feroza what is happening in your team or organisation, and what outcome you would like to achieve."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-primary px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-strong disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>

          <aside className="rounded-3xl bg-primary-strong p-8 text-white shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/65">What to expect</p>
            <h3 className="mt-4 text-2xl font-semibold">A thoughtful, confidential first response</h3>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Feroza works with people-first organisations, leaders, and teams that want practical HR solutions without losing sight of mental wellbeing and human behaviour.
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/80">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold text-white">Best for</p>
                <p className="mt-1">HR guidance, conflict support, workplace wellbeing, coaching, and culture alignment.</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold text-white">Response style</p>
                <p className="mt-1">Warm, professional, and direct. You will hear back with clear next steps.</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold text-white">Privacy</p>
                <p className="mt-1">Sensitive workplace or psychological concerns are handled with care and discretion.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
