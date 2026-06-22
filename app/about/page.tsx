"use client";

import { useState } from "react";

const values = [
  {
    title: "Communication & Transparency",
    copy: "We believe in open, honest, and direct dialogue. We keep you informed about compliance gaps, dispute status, and risk assessments, ensuring you are never caught off-guard.",
  },
  {
    title: "Accountability & Integrity",
    copy: "We take full ownership of our advisory services and compliance setups. Every contract drafted and hearing chaired is done with rigorous legal alignment and fairness.",
  },
  {
    title: "Flexibility & Excellence",
    copy: "We tailor our outsourced HR support to fit your exact business size and industry, delivering premium standards of excellence whether on a retainer or an ad-hoc basis.",
  },
  {
    title: "Respect & Integrity",
    copy: "We handle sensitive workplace dynamics and employee disputes with maximum respect for all parties, helping restore harmony while protecting corporate structures.",
  },
];

const credentials = [
  {
    title: "Full Circle Partner",
    desc: "Premium outsourced HR solutions covering admin, contracts, payroll, B-BBEE, and skills development.",
  },
  {
    title: "IR Specialists",
    desc: "Extensive experience representing employers at CCMA referrals, disciplinary hearings, and union negotiations.",
  },
  {
    title: "Grounded & Compliant",
    desc: "Rigorous attention to BCEA, LRA, Employment Equity Act, and SETA guidelines to keep you protected.",
  },
  {
    title: "Tailored to You",
    desc: "Supporting growing South African SMEs and large corporate teams with customized, flexible models.",
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");
  const [openValueIndex, setOpenValueIndex] = useState<number | null>(0);

  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">About Feroza</p>
            <h1 className="text-4xl font-bold tracking-tight text-primary-strong md:text-5xl">
              Your premium, comprehensive partner in HR and Industrial Relations.
            </h1>
            
            {/* Interactive Toggle for Mission / Vision */}
            <div className="mt-8 flex gap-4 border-b border-primary/10 pb-2">
              <button
                onClick={() => setActiveTab("mission")}
                className={`pb-2 text-base font-bold transition-all relative ${
                  activeTab === "mission" ? "text-primary" : "text-foreground/50 hover:text-foreground"
                }`}
              >
                Our Mission
                {activeTab === "mission" && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`pb-2 text-base font-bold transition-all relative ${
                  activeTab === "vision" ? "text-primary" : "text-foreground/50 hover:text-foreground"
                }`}
              >
                Our Vision
                {activeTab === "vision" && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                )}
              </button>
            </div>

            <div className="mt-6 min-h-[140px]">
              {activeTab === "mission" ? (
                <div className="animate-fade-in">
                  <p className="text-lg leading-8 text-foreground/80 font-medium">
                    To partner with employers to manage business risks through expert labour law advice, structured compliance systems, and dispute support.
                  </p>
                  <p className="mt-4 leading-7 text-foreground/70">
                    We provide the full spectrum of HR and IR services in a manner that is fair, ethical, and highly protective for both the employer and employee, establishing a foundation of trust.
                  </p>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <p className="text-lg leading-8 text-foreground/80 font-medium">
                    To become the premier HR & labour compliance consultancy in South Africa.
                  </p>
                  <p className="mt-4 leading-7 text-foreground/70">
                    We are known for making a tangible difference in how organizations are structured, minimizing risk, and positively impacting the day-to-day operations and culture of South African workplaces.
                  </p>
                </div>
              )}
            </div>

            <p className="mt-6 leading-7 text-foreground/75">
              We are the partner business owners turn to when they want to focus on their core operations, without worrying about statutory compliance, CCMA risks, or payroll headaches.
            </p>
          </div>

          {/* Interactive Values Accordion */}
          <div className="rounded-[2rem] bg-surface p-8 shadow-sm ring-1 ring-primary/10 md:p-10">
            <h2 className="text-2xl font-bold text-primary-strong mb-6">Our Core Values</h2>
            <div className="space-y-3">
              {values.map((value, idx) => {
                const isOpen = openValueIndex === idx;
                return (
                  <div
                    key={value.title}
                    className="rounded-2xl bg-white border border-primary/10 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenValueIndex(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center p-5 text-left font-bold text-primary-strong hover:bg-primary/5 transition-colors focus:outline-none"
                    >
                      <span>{value.title}</span>
                      <span className="text-xl leading-none text-primary">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm leading-6 text-foreground/75 animate-fade-in">
                        {value.copy}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="bg-surface/70 py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Credentials & Focus</p>
              <h2 className="mt-4 text-3xl font-bold text-primary-strong md:text-4xl">
                The expertise to protect and propel your business.
              </h2>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                By bridging the gap between rigorous labour law compliance and empathetic HR operations, we help businesses build resilient workforce infrastructures.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map((item) => (
                <article key={item.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-primary/10 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-primary-strong text-base">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/75">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}