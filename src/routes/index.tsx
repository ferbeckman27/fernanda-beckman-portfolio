import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import fernanda from "@/assets/fernanda.png";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fernanda Beckman — Desenvolvedora Freelancer" },
      { name: "description", content: "Portfólio de Fernanda Beckman, desenvolvedora em São Luís, MA." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 pt-12 md:pt-20 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
            <Sparkles size={14} className="text-primary" />
            Disponível para projetos freelance
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Olá, sou <span className="text-gradient">Fernanda</span>.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Desenvolvedora freelancer e estudante de Sistemas de Informação em
            São Luís, Maranhão. Transformo ideias em soluções digitais.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/projetos"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft transition-transform hover:scale-105"
            >
              Ver projetos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contato"
              className="px-6 py-3 rounded-full border border-border bg-card font-medium hover:bg-accent transition-colors"
            >
              Fale comigo
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-blob" />
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-hero shadow-soft overflow-hidden border-4 border-card animate-float">
            <img
              src={fernanda}
              alt="Fernanda Beckman"
              className="w-full h-full object-cover object-top scale-110"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Back-end", desc: "Java, Python, APIs robustas" },
            { title: "Front-end", desc: "HTML, CSS, JavaScript" },
            { title: "Banco de dados", desc: "MySQL, PostgreSQL" },
          ].map((s, i) => (
            <div
              key={s.title}
              className="p-6 rounded-2xl bg-card border border-border/60 shadow-soft hover:-translate-y-1 transition-transform animate-fade-up"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
