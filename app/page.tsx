"use client";

import { useState } from "react";
import Link from "next/link";

const focusAreas = [
  {
    title: "HR Outsourcing & Admin",
    description: "Flawless payroll management, legally sound employment contracts, tailormade HR policies, employee handbooks, and seamless statutory compliance.",
  },
  {
    title: "Industrial & Labour Relations",
    description: "Expert guidance for disciplinary hearings, CCMA/SETA referrals, retrenchment procedures, strike management, and union negotiations.",
  },
  {
    title: "Skills Development & Equity",
    description: "Workplace Skills Plans (WSP), Annual Training Reports (ATR), SETA accreditation, and managing learnership programmes.",
  },
  {
    title: "B-BBEE Consulting",
    description: "End-to-end scorecard verification, gap analysis, and strategic implementation to optimize your rating and compliance.",
  },
  {
    title: "Talent Acquisition",
    description: "Psychologically-informed recruitment processes, rigorous background screening, interviewing, and structured onboarding.",
  },
  {
    title: "Wellness & Change Management",
    description: "Employee Assistance Programmes (EAPs), mental health awareness, and restructuring support during transitions.",
  },
];

const checklistItems = [
  { id: "contracts", label: "Signed employment contracts in place for 100% of active staff" },
  { id: "code", label: "A legally compliant Disciplinary Code & Procedure distributed to all employees" },
  { id: "benefits", label: "Proper statutory registrations and returns (UIF, PAYE, SDL, COIDA)" },
  { id: "grievance", label: "Clear, documented processes for managing grievances and dispute resolution" },
  { id: "skills", label: "Annual submissions for B-BBEE scorecards and Skills Development (WSP/ATR)" },
];

export default function Home() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [calculated, setCalculated] = useState(false);

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setCalculated(false);
  };

  const score = checkedItems.length;

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(107,78,113,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(138,166,163,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Full Circle HR Partner</p>
            <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-primary-strong md:text-6xl">
              Complete HR solutions for South African businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/80 md:text-xl">
              From compliance and payroll to dispute resolution. We manage your workforce compliance so you can focus on growing your business.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/services" className="rounded-full bg-primary px-7 py-3.5 text-center font-semibold text-white shadow-sm transition-all hover:bg-primary-strong hover:scale-[1.02]">
                View Our Services
              </Link>
              <Link href="/about" className="rounded-full border border-primary/20 bg-surface px-7 py-3.5 text-center font-semibold text-primary-strong transition-all hover:bg-primary/5 hover:scale-[1.02]">
                About Feroza
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] bg-surface p-8 shadow-[0_20px_60px_rgba(76,53,81,0.12)] ring-1 ring-primary/10 md:p-10">
              <div className="rounded-[1.5rem] bg-primary-strong p-8 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-white/65">Absolute Compliance</p>
                <h2 className="mt-4 text-3xl font-semibold">We act as your shield.</h2>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  Navigating South African labour law is complex and risky. An unfavourable CCMA award or a Department of Labour fine can devastate a business. We ensure you remain compliant and protected.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  ["Mitigate Risk", "Avoid CCMA awards and Dept of Labour penalties"],
                  ["Save Time", "We handle the complex HR administration"],
                  ["Expert Guidance", "Professional representation and compliance strategies"],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl bg-white p-4 ring-1 ring-primary/10">
                    <p className="font-semibold text-primary-strong text-xs sm:text-sm">{title}</p>
                    <p className="mt-1 text-xs text-foreground/70 leading-relaxed">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CCMA Risk Checklist */}
      <section className="bg-surface/50 border-y border-primary/10 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Interactive Tool</span>
            <h2 className="text-3xl font-bold text-primary-strong mt-2">CCMA Compliance Risk Checker</h2>
            <p className="mt-3 text-foreground/75">
              Take 30 seconds to evaluate your current business exposure under South African labour law.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm ring-1 ring-primary/10">
            <p className="font-semibold text-primary-strong mb-6 text-lg">Check all statements that are true for your business:</p>
            <div className="space-y-4">
              {checklistItems.map((item) => (
                <label
                  key={item.id}
                  className={`flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                    checkedItems.includes(item.id)
                      ? "border-primary/40 bg-primary/5"
                      : "border-primary/10 hover:bg-primary/5 hover:border-primary/20"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checkedItems.includes(item.id)}
                    onChange={() => toggleCheck(item.id)}
                    className="mt-1 h-5 w-5 rounded border-primary/25 text-primary focus:ring-primary/20 accent-primary"
                  />
                  <span className="text-foreground/80 font-medium select-none text-sm md:text-base">{item.label}</span>
                </label>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-primary/10 flex flex-col items-center">
              {!calculated ? (
                <button
                  onClick={() => setCalculated(true)}
                  className="rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-sm transition-all hover:bg-primary-strong"
                >
                  Calculate Risk Level
                </button>
              ) : (
                <div className="w-full text-center">
                  <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Your Assessment Results</p>
                  
                  {score === 5 && (
                    <div className="mt-4 p-6 rounded-2xl bg-green-50 border border-green-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-green-200 text-green-800 text-xs font-bold uppercase tracking-wider mb-2">Low Risk</span>
                      <h4 className="text-lg font-bold text-green-900">Good Job! Your compliance systems are solid.</h4>
                      <p className="text-sm text-green-800/90 mt-2 max-w-xl mx-auto">
                        Your basic compliance foundations are in place. We can help you optimize payroll efficiency, maximize B-BBEE scorecard strategies, and implement premium talent management plans to propel growth further.
                      </p>
                    </div>
                  )}

                  {score >= 3 && score <= 4 && (
                    <div className="mt-4 p-6 rounded-2xl bg-yellow-50 border border-yellow-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-200 text-yellow-800 text-xs font-bold uppercase tracking-wider mb-2">Medium Risk</span>
                      <h4 className="text-lg font-bold text-yellow-900">You have foundations, but critical vulnerabilities remain.</h4>
                      <p className="text-sm text-yellow-800/90 mt-2 max-w-xl mx-auto">
                        While some areas of your business are covered, any single missing component (such as missing contracts or un-aligned disciplinary codes) can expose you to heavy CCMA payouts. Let Feroza do a detailed compliance gap audit.
                      </p>
                    </div>
                  )}

                  {score <= 2 && (
                    <div className="mt-4 p-6 rounded-2xl bg-red-50 border border-red-200">
                      <span className="inline-block px-3 py-1 rounded-full bg-red-200 text-red-800 text-xs font-bold uppercase tracking-wider mb-2">High Risk</span>
                      <h4 className="text-lg font-bold text-red-900">Immediate Risk. Your business is highly vulnerable.</h4>
                      <p className="text-sm text-red-800/90 mt-2 max-w-xl mx-auto">
                        Your organization is significantly exposed to heavy CCMA dispute payouts, labour union grievances, and Department of Labour audits. Feroza can quickly implement structured policies and dispute systems to safeguard your business.
                      </p>
                    </div>
                  )}

                  <Link href="/contact" className="mt-6 inline-block rounded-full bg-primary-strong text-white px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]">
                    Book Compliance Consultation
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-strong md:text-4xl">Our Core Services</h2>
          <p className="mt-4 text-lg text-foreground/75 max-w-2xl mx-auto">
            Whether you need a complete outsourced HR department or specialist support for your in-house team, we provide reliable advice to keep you productive.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((item) => (
            <article key={item.title} className="rounded-3xl bg-surface p-8 shadow-sm ring-1 ring-primary/10 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary-strong">{item.title}</h3>
              <p className="mt-3 leading-7 text-foreground/75">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:pb-24">
        <div className="rounded-[2rem] bg-primary-strong px-8 py-10 text-white md:px-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/65">Why clients choose Feroza</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">You focus on growing your business; we’ll handle your people.</h2>
            </div>
            <p className="text-base leading-8 text-white/78 md:text-lg">
              Every business is fueled by its people, but managing human resources requires time, specialized knowledge, and constant attention to changing labour laws. We provide affordable, flexible HR outsourcing solutions designed to support your organization.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
