import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Sprout,
  LineChart,
  ShieldCheck,
  Smartphone,
  ScanLine,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Menu,
} from "lucide-react";
import heroImg from "@/assets/hero-ranch.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
        <Leaf className="h-5 w-5" />
      </span>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        SIREGA
      </span>
    </a>
  );
}

function Nav() {
  const links = [
    { href: "#features", label: "Plataforma" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#como", label: "Cómo funciona" },
    { href: "#contacto", label: "Contacto" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Iniciar sesión
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Solicitar demo
          </Button>
          <button className="md:hidden" aria-label="Menú">
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ganado pastando con datos tecnológicos sobrepuestos"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            <Sprout className="h-3.5 w-3.5" /> Agrotecnología • Hecho para el campo
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tu hato ganadero,{" "}
            <span className="bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
              registrado y evaluado
            </span>{" "}
            con inteligencia.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            SIREGA es el Sistema Integral de Registro y Evaluación Ganadera que
            combina trazabilidad, datos productivos y analítica para que tomes
            mejores decisiones desde el potrero.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-[var(--shadow-elegant)]">
              Comenzar gratis <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              Ver cómo funciona
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "+12k", v: "cabezas registradas" },
              { k: "98%", v: "trazabilidad" },
              { k: "24/7", v: "datos en la nube" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-bold text-white sm:text-3xl">{s.k}</dt>
                <dd className="text-xs uppercase tracking-wide text-white/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: ScanLine,
      title: "Registro digital",
      desc: "Identifica cada animal con caravana o RFID y mantén su historial completo siempre a mano.",
    },
    {
      icon: LineChart,
      title: "Evaluación productiva",
      desc: "Indicadores de peso, ganancia diaria, reproducción y sanidad calculados automáticamente.",
    },
    {
      icon: ShieldCheck,
      title: "Trazabilidad oficial",
      desc: "Cumple con normativas sanitarias y exporta reportes listos para entes regulatorios.",
    },
    {
      icon: Smartphone,
      title: "Funciona offline",
      desc: "Carga datos en el campo sin señal. Cuando vuelves a conectarte, todo se sincroniza solo.",
    },
  ];
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Plataforma SIREGA
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Todo lo que tu finca necesita, en un solo lugar.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Diseñado junto a productores y veterinarios para resolver el día a
            día del manejo ganadero.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const points = [
    "Reduce hasta un 30% las pérdidas por mal manejo reproductivo.",
    "Detecta caídas de productividad antes de que afecten tu rentabilidad.",
    "Centraliza información sanitaria, vacunas y tratamientos por animal.",
    "Comparte reportes con tu veterinario o socio en un clic.",
  ];
  return (
    <section id="beneficios" className="bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Beneficios
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Decisiones informadas, hato más rentable.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            SIREGA convierte cada registro en información accionable. Menos
            cuadernos, menos planillas y más tiempo para lo que importa: tu
            producción.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Lote · La Esperanza
                </p>
                <p className="text-2xl font-bold text-foreground">324 cabezas</p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                + 4.2% mensual
              </span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { k: "GMD", v: "0.92 kg" },
                { k: "Preñez", v: "78%", color: "earth" },
                { k: "Sanidad", v: "OK" },
              ].map((m) => (
                <div key={m.k} className="rounded-xl bg-muted p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {m.k}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {m.v}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-end gap-2 h-32">
              {[40, 55, 48, 62, 70, 65, 80, 76, 90, 85, 95, 88].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-t-md bg-[image:var(--gradient-primary)]"
                />
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Ganancia diaria promedio últimos 12 meses
            </p>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-accent p-4 text-accent-foreground shadow-[var(--shadow-elegant)] sm:block">
            <Leaf className="mb-2 h-5 w-5" />
            <p className="text-xs font-medium">Huella ambiental medida</p>
            <p className="text-lg font-bold">- 18% CO₂</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Registra", d: "Da de alta tu hato con identificación individual o por lote." },
    { n: "02", t: "Captura", d: "Pesajes, eventos sanitarios y reproductivos desde la app móvil." },
    { n: "03", t: "Evalúa", d: "Recibe indicadores y alertas para decidir con datos reales." },
  ];
  return (
    <section id="como" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Cómo funciona
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Empieza en 3 pasos simples.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
            >
              <span className="text-5xl font-bold text-primary/20">{s.n}</span>
              <h3 className="mt-4 text-xl font-semibold text-card-foreground">
                {s.t}
              </h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contacto" className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-accent p-10 shadow-[var(--shadow-elegant)] sm:p-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
              Lleva tu ganadería al siguiente nivel.
            </h2>
            <p className="mt-4 text-lg text-accent-foreground/80">
              Agenda una demostración personalizada y descubre cómo SIREGA se
              adapta a tu operación.
            </p>
          </div>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              className="h-12 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 text-accent-foreground placeholder:text-accent-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-glow"
            />
            <Button
              size="lg"
              type="submit"
              className="h-12 bg-primary hover:bg-primary/90"
            >
              Solicitar demo
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 sm:flex-row lg:px-8">
        <Logo />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SIREGA. Tecnología que entiende el campo.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacidad</a>
          <a href="#" className="hover:text-foreground">Términos</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
