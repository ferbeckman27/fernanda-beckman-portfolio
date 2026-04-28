import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Fernanda Beckman" },
      { name: "description", content: "Projetos desenvolvidos por Fernanda Beckman." },
    ],
  }),
  component: Projetos,
});

const projects = [
  {
    title: "Sistema de Gestão Acadêmica",
    desc: "Plataforma web para gerenciamento de notas, frequência e disciplinas com painéis para alunos e professores.",
    tags: ["Java", "Spring", "PostgreSQL"],
    accent: "from-rose to-rose-soft",
  },
  {
    title: "API de Análise de Dados",
    desc: "Serviço REST em Python para processamento e visualização de datasets corporativos com gráficos interativos.",
    tags: ["Python", "FastAPI", "MySQL"],
    accent: "from-leaf to-leaf-soft",
  },
  {
    title: "Landing Page Responsiva",
    desc: "Site institucional com design moderno, animações suaves e otimização para mecanismos de busca.",
    tags: ["HTML", "CSS", "JavaScript"],
    accent: "from-rose to-leaf",
  },
  {
    title: "Dashboard Financeiro",
    desc: "Painel web para acompanhamento de receitas e despesas com filtros, exportação e autenticação.",
    tags: ["JavaScript", "Node.js", "PostgreSQL"],
    accent: "from-leaf to-rose",
  },
];

function Projetos() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="text-gradient">projetos</span>
          </h1>
          <p className="text-muted-foreground">
            Uma seleção dos trabalhos que demonstram minha expertise técnica e
            paixão por construir soluções.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative p-6 rounded-3xl bg-card border border-border/60 shadow-soft overflow-hidden hover:-translate-y-2 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${p.accent} opacity-30 blur-2xl group-hover:opacity-60 transition-opacity`} />
              <div className="relative">
                <div className={`w-full h-40 rounded-2xl bg-gradient-to-br ${p.accent} mb-5 flex items-center justify-center text-card font-display text-4xl font-bold opacity-90`}>
                  {p.title.charAt(0)}
                </div>
                <h2 className="font-display text-2xl font-semibold mb-2">{p.title}</h2>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-sm">
                  <button className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline">
                    <ExternalLink size={14} /> Demo
                  </button>
                  <button className="inline-flex items-center gap-1.5 text-secondary font-medium hover:underline">
                    <Github size={14} /> Código
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
