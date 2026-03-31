import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Clock,
  DollarSign,
  Flame,
  Github,
  Layers,
  Linkedin,
  Menu,
  Shield,
  Twitter,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const NAV_LINKS = [
  { label: "Technology", href: "#technology" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Benefits", href: "#benefits" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToContact = () => {
    setMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-pyro-border"
      style={{
        background:
          "linear-gradient(180deg, rgba(11,13,16,0.98) 0%, rgba(16,21,26,0.95) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <img
              src="/assets/generated/pyroshield-logo-transparent.dim_200x200.png"
              alt="PyroShield"
              className="h-9 w-9 object-contain"
            />
            <span
              className="text-xl font-bold tracking-tight text-pyro-text"
              style={{ letterSpacing: "-0.02em" }}
            >
              Pyro<span className="text-pyro-orange">Shield</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className="text-sm text-pyro-muted hover:text-pyro-text transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button
              data-ocid="header.request_demo.button"
              onClick={scrollToContact}
              className="hidden sm:flex bg-pyro-orange hover:bg-pyro-orange-dim text-white font-semibold text-sm rounded-full px-5 py-2 transition-all hover:shadow-glow-sm"
            >
              Request Demo
            </Button>
            <button
              type="button"
              className="lg:hidden text-pyro-muted hover:text-pyro-text transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              data-ocid="nav.menu.toggle"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t border-pyro-border px-4 py-4"
          style={{ background: "rgba(11,13,16,0.98)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm text-pyro-muted hover:text-pyro-text transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            type="button"
            onClick={scrollToContact}
            className="mt-3 w-full bg-pyro-orange hover:bg-pyro-orange-dim text-white font-semibold rounded-full"
          >
            Request Demo
          </Button>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTech = () => {
    document
      .getElementById("technology")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0B0D10 0%, #0E1318 50%, #12161B 100%)",
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,106,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,42,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,42,0.08) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          {/* Left column */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-pyro-orange mb-6">
                <Flame size={12} className="text-pyro-orange" />
                Next-Gen Fire Safety
              </span>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-pyro-text"
                style={{ letterSpacing: "-0.03em", lineHeight: "1.0" }}
              >
                DETECT FIRES
                <br />
                <span className="text-pyro-orange">FASTER.</span>
                <br />
                PROTECT
                <br />
                <span
                  style={{
                    WebkitTextStroke: "1.5px #FF6A2A",
                    color: "transparent",
                  }}
                >
                  SMARTER.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-pyro-muted leading-relaxed max-w-lg">
              PyroShield deploys intelligent drones with thermal imaging and AI
              analytics to identify fire hazards early, reduce response time,
              and keep your team out of harm&rsquo;s way.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                data-ocid="hero.request_demo.primary_button"
                size="lg"
                onClick={scrollToContact}
                className="bg-pyro-orange hover:bg-pyro-orange-dim text-white font-bold px-8 py-3 rounded-full text-base transition-all hover:shadow-glow"
              >
                Request Demo
              </Button>
              <Button
                data-ocid="hero.learn_more.secondary_button"
                size="lg"
                variant="outline"
                onClick={scrollToTech}
                className="border-pyro-border text-pyro-text hover:bg-white/5 font-semibold px-8 py-3 rounded-full text-base"
              >
                See How It Works
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-4 border-t border-pyro-border">
              <div>
                <div className="text-2xl font-bold text-pyro-text">90s</div>
                <div className="text-xs text-pyro-muted uppercase tracking-wide">
                  Detection time
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pyro-text">60%</div>
                <div className="text-xs text-pyro-muted uppercase tracking-wide">
                  Faster response
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pyro-text">500m</div>
                <div className="text-xs text-pyro-muted uppercase tracking-wide">
                  Detection range
                </div>
              </div>
            </div>
          </div>

          {/* Right column: hero image */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "16/10" }}
            >
              <img
                src="/assets/generated/hero-drone-fire.dim_1200x700.jpg"
                alt="PyroShield drone flying over wildfire"
                className="w-full h-full object-cover"
              />
              {/* Vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 40%, rgba(11,13,16,0.85) 100%)",
                }}
              />
              {/* Edge fade left */}
              <div
                className="absolute inset-y-0 left-0 w-1/4"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(11,13,16,1) 0%, transparent 100%)",
                }}
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-4 left-4 rounded-xl px-4 py-3 backdrop-blur-sm"
                style={{
                  background: "rgba(26,33,41,0.9)",
                  border: "1px solid #2A323B",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold text-pyro-text">
                    Live Thermal Monitoring Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="about" className="py-20" style={{ background: "#10151A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-pyro-orange mb-3 block">
              The Problem
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-pyro-text leading-tight mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              Traditional fire safety{" "}
              <span className="text-pyro-orange">fails</span> when it matters
              most
            </h2>
            <p className="text-pyro-muted text-base leading-relaxed">
              Conventional fire detection systems are fixed, reactive, and
              completely ineffective in inaccessible or rapidly-changing
              environments. By the time an alarm sounds, the window for safe
              intervention has often already closed &mdash; leading to
              catastrophic loss of life, property, and economic continuity.
            </p>
          </div>

          {/* Right: stat blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div
              className="rounded-xl p-6 border border-pyro-border text-center"
              style={{ background: "#1A2129" }}
            >
              <div
                className="text-4xl font-extrabold text-pyro-text mb-1"
                style={{ letterSpacing: "-0.03em" }}
              >
                52M<span className="text-pyro-orange">+</span>
              </div>
              <div className="text-xs text-pyro-muted uppercase tracking-wide">
                Acres burned annually
              </div>
            </div>
            <div
              className="rounded-xl p-6 border border-pyro-border text-center"
              style={{ background: "#1A2129" }}
            >
              <div
                className="text-4xl font-extrabold text-pyro-text mb-1"
                style={{ letterSpacing: "-0.03em" }}
              >
                $150B<span className="text-pyro-orange">+</span>
              </div>
              <div className="text-xs text-pyro-muted uppercase tracking-wide">
                Annual fire damages
              </div>
            </div>
            <div
              className="rounded-xl p-6 border border-pyro-border text-center"
              style={{ background: "#1A2129" }}
            >
              <div
                className="text-4xl font-extrabold text-pyro-text mb-1"
                style={{ letterSpacing: "-0.03em" }}
              >
                70<span className="text-pyro-orange">%</span>
              </div>
              <div className="text-xs text-pyro-muted uppercase tracking-wide">
                Fires spread from late detection
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const droneBullets = [
    "Thermal imaging cameras detect heat signatures up to 500m away",
    "Environmental sensors: smoke, CO\u2082, humidity, wind speed",
    "Real-time video and data transmission to command center",
    "Autonomous patrol routes with 45-minute flight time",
  ];

  const aiBullets = [
    "AI-powered fire spread prediction models",
    "Real-time situational awareness dashboard",
    "Automated alerts to fire departments and responders",
    "Historical data analysis for risk mapping",
  ];

  return (
    <section
      id="technology"
      className="py-20"
      style={{ background: "#0B0D10" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-pyro-orange mb-3 block">
            Our Technology
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-pyro-text"
            style={{ letterSpacing: "-0.02em" }}
          >
            Introducing PyroShield{" "}
            <span className="text-pyro-orange">Drone Technology</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Drone card */}
          <div
            className="rounded-2xl border border-pyro-border p-8 hover:border-pyro-orange/40 transition-all duration-300 group"
            style={{ background: "#1A2129" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-pyro-orange/10 flex items-center justify-center">
                <Flame className="text-pyro-orange" size={20} />
              </div>
              <h3 className="text-xl font-bold text-pyro-text">
                Thermal Detection Drone
              </h3>
            </div>
            <ul className="space-y-3">
              {droneBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-pyro-orange mt-0.5 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-pyro-muted text-sm leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI card */}
          <div
            className="rounded-2xl border border-pyro-border p-8 hover:border-pyro-orange/40 transition-all duration-300 group"
            style={{ background: "#1A2129" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-pyro-orange/10 flex items-center justify-center">
                <Layers className="text-pyro-orange" size={20} />
              </div>
              <h3 className="text-xl font-bold text-pyro-text">
                AI Wildfire Analytics
              </h3>
            </div>
            <ul className="space-y-3">
              {aiBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-pyro-orange mt-0.5 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-pyro-muted text-sm leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const MARKETS = [
  {
    title: "Residential Communities",
    description:
      "Protect homes and neighborhoods with 24/7 aerial monitoring and instant alert systems.",
    img: "/assets/generated/market-residential.dim_600x400.jpg",
  },
  {
    title: "Commercial Estates",
    description:
      "Safeguard office parks, warehouses, and retail complexes with intelligent perimeter surveillance.",
    img: "/assets/generated/market-commercial.dim_600x400.jpg",
  },
  {
    title: "Industrial Facilities",
    description:
      "Monitor high-risk environments like oil refineries, chemical plants, and manufacturing zones.",
    img: "/assets/generated/market-industrial.dim_600x400.jpg",
  },
  {
    title: "Critical Infrastructure",
    description:
      "Defend power grids, communication towers, and government facilities from fire threats.",
    img: "/assets/generated/market-infrastructure.dim_600x400.jpg",
  },
];

function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-20"
      style={{ background: "#10151A" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-pyro-orange mb-3 block">
            Target Markets
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-pyro-text"
            style={{ letterSpacing: "-0.02em" }}
          >
            Protection for every{" "}
            <span className="text-pyro-orange">environment</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MARKETS.map((m, idx) => (
            <div
              key={m.title}
              data-ocid={`industries.item.${idx + 1}`}
              className="rounded-2xl overflow-hidden border border-pyro-border hover:border-pyro-orange/50 hover:shadow-glow-sm transition-all duration-300 group"
              style={{ background: "#1A2129" }}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "3/2" }}
              >
                <img
                  src={m.img}
                  alt={m.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(26,33,41,0.95) 100%)",
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-pyro-text mb-2">{m.title}</h3>
                <p className="text-xs text-pyro-muted leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  {
    icon: Clock,
    title: "Rapid Response Time",
    desc: "Detect and alert in under 90 seconds, cutting response time by up to 60%.",
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    desc: "Prevent losses worth millions with early detection; reduce insurance premiums by up to 30%.",
  },
  {
    icon: Shield,
    title: "Enhanced Safety",
    desc: "Keep human responders out of danger until conditions are assessed and safe.",
  },
  {
    icon: Layers,
    title: "Scalable Protection",
    desc: "Deploy one drone or a full fleet \u2014 scales to any property size or risk level.",
  },
];

function BenefitsSection() {
  return (
    <section id="benefits" className="py-20" style={{ background: "#0B0D10" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-pyro-orange mb-3 block">
            Why PyroShield
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-pyro-text"
            style={{ letterSpacing: "-0.02em" }}
          >
            The <span className="text-pyro-orange">advantages</span> that matter
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b, idx) => (
            <div
              key={b.title}
              data-ocid={`benefits.item.${idx + 1}`}
              className="rounded-2xl border border-pyro-border p-6 hover:border-pyro-orange/40 hover:shadow-glow-sm transition-all duration-300 group"
              style={{ background: "#1A2129" }}
            >
              <div className="w-12 h-12 rounded-xl bg-pyro-orange/10 flex items-center justify-center mb-4 group-hover:bg-pyro-orange/20 transition-colors">
                <b.icon className="text-pyro-orange" size={22} />
              </div>
              <h3 className="font-bold text-pyro-text mb-2">{b.title}</h3>
              <p className="text-sm text-pyro-muted leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Thanks! We'll be in touch soon.", {
      description:
        "Our team will review your request and respond within 24 hours.",
    });
    setName("");
    setEmail("");
    setMessage("");
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-20" style={{ background: "#10151A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left CTA */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-pyro-orange mb-3 block">
              Get Started
            </span>
            <h2
              className="text-4xl sm:text-5xl font-extrabold text-pyro-text mb-6"
              style={{ letterSpacing: "-0.03em", lineHeight: "1.1" }}
            >
              Secure Your Future.{" "}
              <span className="text-pyro-orange">Schedule a Demo</span> Today.
            </h2>
            <p className="text-pyro-muted text-base leading-relaxed mb-8 max-w-md">
              See PyroShield in action and discover how intelligent drones can
              transform your fire safety strategy.
            </p>

            <div className="space-y-4">
              {[
                "No-obligation consultation",
                "Tailored solution for your environment",
                "Response within 24 hours",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-pyro-orange flex-shrink-0"
                    size={18}
                  />
                  <span className="text-sm text-pyro-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div
            className="rounded-2xl border border-pyro-border p-8"
            style={{ background: "#1A2129" }}
            data-ocid="contact.modal"
          >
            <h3 className="text-lg font-bold text-pyro-text mb-6">
              Request a Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold text-pyro-muted uppercase tracking-wide mb-1.5"
                >
                  Full Name
                </label>
                <Input
                  id="contact-name"
                  data-ocid="contact.name.input"
                  placeholder="Jane Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-pyro-dark border-pyro-border text-pyro-text placeholder:text-pyro-muted/50 focus:border-pyro-orange focus:ring-pyro-orange rounded-xl"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold text-pyro-muted uppercase tracking-wide mb-1.5"
                >
                  Email Address
                </label>
                <Input
                  id="contact-email"
                  data-ocid="contact.email.input"
                  type="email"
                  placeholder="jane@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-pyro-dark border-pyro-border text-pyro-text placeholder:text-pyro-muted/50 focus:border-pyro-orange focus:ring-pyro-orange rounded-xl"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-pyro-muted uppercase tracking-wide mb-1.5"
                >
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  data-ocid="contact.message.textarea"
                  placeholder="Tell us about your fire safety needs..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="bg-pyro-dark border-pyro-border text-pyro-text placeholder:text-pyro-muted/50 focus:border-pyro-orange focus:ring-pyro-orange rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                data-ocid="contact.submit_button"
                disabled={submitting}
                className="w-full bg-pyro-orange hover:bg-pyro-orange-dim text-white font-bold rounded-full py-3 transition-all hover:shadow-glow"
              >
                {submitting ? "Sending..." : "Request Consultation"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="border-t border-pyro-border py-12"
      style={{ background: "#0B0D10" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Left: brand */}
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-3">
              <img
                src="/assets/generated/pyroshield-logo-transparent.dim_200x200.png"
                alt="PyroShield"
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-bold text-pyro-text">
                Pyro<span className="text-pyro-orange">Shield</span>
              </span>
            </a>
            <p className="text-xs text-pyro-muted leading-relaxed max-w-xs">
              Intelligent drone technology for early fire detection, real-time
              situational awareness, and safer emergency response.
            </p>
          </div>

          {/* Center: nav */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-pyro-orange mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid={`footer.${link.label.toLowerCase()}.link`}
                    className="text-sm text-pyro-muted hover:text-pyro-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: socials */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-pyro-orange mb-4">
              Follow Us
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                data-ocid="footer.twitter.link"
                className="w-9 h-9 rounded-full border border-pyro-border flex items-center justify-center text-pyro-muted hover:text-pyro-orange hover:border-pyro-orange transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://linkedin.com"
                data-ocid="footer.linkedin.link"
                className="w-9 h-9 rounded-full border border-pyro-border flex items-center justify-center text-pyro-muted hover:text-pyro-orange hover:border-pyro-orange transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://github.com"
                data-ocid="footer.github.link"
                className="w-9 h-9 rounded-full border border-pyro-border flex items-center justify-center text-pyro-muted hover:text-pyro-orange hover:border-pyro-orange transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-pyro-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-pyro-muted">
            &copy; {year} PyroShield. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-xs text-pyro-muted hover:text-pyro-text transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-xs text-pyro-muted hover:text-pyro-text transition-colors"
            >
              Terms of Service
            </a>
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-pyro-muted hover:text-pyro-text transition-colors"
            >
              Built with &#10084;&#65039; using caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#0B0D10" }}>
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "#1A2129",
            border: "1px solid #2A323B",
            color: "#F2F5F7",
          },
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <IndustriesSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
