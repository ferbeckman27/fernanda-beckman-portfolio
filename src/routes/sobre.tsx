import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import fernanda from "@/assets/fernanda.png";
import { MapPin, GraduationCap, Code2 } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Fernanda Beckman" },
      { name: "description", content: "Conheça Fernanda Beckman, desenvolvedora freelancer em São Luís, MA." },
    ],
  }),
  component: Sobre,
});

const skills = ["Java", "Python", "JavaScript", "HTML", "CSS", "MySQL", "PostgreSQL"];

function Sobre() {
  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div className="animate-fade-up">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-hero shadow-soft">
              <img src={fernanda} alt="Fernanda Beckman" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <h1 className="text-4xl md:text-5xl font-bold">
              Sobre <span className="text-gradient">mim</span>
            </h1>
            <p className="text-lg leading-relaxed text-foreground/80">
              Olá! Sou Fernanda Beckman, estudante de Sistemas de Informação e
              desenvolvedora freelancer. Minha trajetória na tecnologia é movida
              pela vontade de transformar problemas complexos em soluções
              práticas e inovadoras. Expertise técnica abrangendo linguagens
              como Java, Python e tecnologias front-end (HTML, CSS,
              JavaScript), além de domínio em bancos de dados relacionais como
              MySQL e PostgreSQL.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-card border border-border/60 flex items-start gap-3">
                <MapPin className="text-primary mt-0.5" size={20} />
                <div>
                  <div className="text-xs text-muted-foreground">Localização</div>
                  <div className="font-medium">São Luís, Maranhão</div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-card border border-border/60 flex items-start gap-3">
                <GraduationCap className="text-secondary mt-0.5" size={20} />
                <div>
                  <div className="text-xs text-muted-foreground">Formação</div>
                  <div className="font-medium">Sistemas de Informação</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-muted-foreground">
                <Code2 size={16} /> Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-border/40"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
