import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import fernanda from "@/assets/fernanda.png";
import arenaCedro from "@/assets/projects/arena-cedro.png";
import velocity from "@/assets/projects/velocity.png";
import fizz from "@/assets/projects/fizz.png";
import becksCafe from "@/assets/projects/becks-cafe.jpg";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  GraduationCap,
  Code2,
  Mail,
  Phone,
  Send,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fernanda Beckman — Desenvolvedora Freelancer" },
      {
        name: "description",
        content:
          "Portfólio de Fernanda Beckman, desenvolvedora freelancer em São Luís, MA. Java, Python, Front-end e Banco de Dados.",
      },
    ],
  }),
  component: Index,
});

const skills = ["Java", "Python", "JavaScript", "HTML", "CSS", "MySQL", "PostgreSQL"];

const projects = [
  {
    title: "Beck's Cafe",
    desc: "Site para cafeteria com cardápio, ambiente acolhedor e identidade visual aconchegante.",
    tags: ["React", "Tailwind", "Branding"],
    url: "https://becks-cafe.lovable.app",
    image: becksCafe,
  },
  {
    title: "Fizz & Flavor Hub",
    desc: "Site animado para refrigerantes saborizados com home, sobre a marca, preços e carrinho.",
    tags: ["React", "Tailwind", "E-commerce"],
    url: "https://pop-flavor-spark.lovable.app",
    image: fizz,
  },
  {
    title: "Velocity",
    desc: "Landing page moderna para concessionária de carros esportivos, com animações e visual sofisticado.",
    tags: ["React", "Tailwind", "Animações"],
    url: "https://purple-drive-showcase.lovable.app",
    image: velocity,
  },
  {
    title: "Arena Cedro",
    desc: "Sistema web para a Arena Cedro com agendamento de campos de futebol society e gestão de horários.",
    tags: ["HTML", "CSS", "JavaScript"],
    url: "https://arena-cedro.lovable.app",
    image: arenaCedro,
  },
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      {/* INÍCIO */}
      <section id="inicio" className="scroll-mt-20 max-w-6xl mx-auto px-6 pt-12 md:pt-20 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
            <Sparkles size={14} className="text-primary" />
            Disponível para projetos freelance
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Olá, sou <span className="text-gradient">Fernanda</span>.
          </h1>
          <p className="text-lg text-foreground/75 max-w-md leading-relaxed">
            Desenvolvedora freelancer e estudante de Sistemas de Informação em
            São Luís, Maranhão. Transformo ideias em soluções digitais.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft transition-transform hover:scale-105"
            >
              Ver projetos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="px-6 py-3 rounded-full border border-border bg-card/70 backdrop-blur font-medium hover:bg-accent transition-colors"
            >
              Fale comigo
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-50 animate-blob" />
          <div className="relative w-80 h-[26rem] md:w-96 md:h-[32rem] rounded-[2.5rem] bg-gradient-hero shadow-soft overflow-hidden border-4 border-card animate-float">
            <img src={fernanda} alt="Fernanda Beckman" className="w-full h-full object-contain object-center" />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="scroll-mt-20 max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Sobre <span className="text-gradient">mim</span>
          </h2>
          <p className="text-foreground/70">Quem está por trás dos projetos.</p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <div className="animate-fade-up">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-hero shadow-soft border-4 border-card">
              <img src={fernanda} alt="Fernanda Beckman" className="w-full h-full object-contain object-center" />
            </div>
          </div>

          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <p className="text-lg leading-relaxed text-foreground/80">
              Olá! Sou Fernanda Beckman, estudante de Sistemas de Informação e
              desenvolvedora freelancer. Minha trajetória na tecnologia é movida
              pela vontade de transformar problemas complexos em soluções
              práticas e inovadoras. Expertise técnica abrangendo linguagens
              como Java, Python e tecnologias front-end (HTML, CSS, JavaScript),
              além de domínio em bancos de dados relacionais como MySQL e
              PostgreSQL.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-card/80 backdrop-blur border border-border/60 flex items-start gap-3">
                <MapPin className="text-primary mt-0.5" size={20} />
                <div>
                  <div className="text-xs text-muted-foreground">Localização</div>
                  <div className="font-medium">São Luís, Maranhão</div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-card/80 backdrop-blur border border-border/60 flex items-start gap-3">
                <GraduationCap className="text-secondary mt-0.5" size={20} />
                <div>
                  <div className="text-xs text-muted-foreground">Formação</div>
                  <div className="font-medium">Sistemas de Informação</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-muted-foreground">
                <Code2 size={16} /> Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-1.5 rounded-full bg-card/80 backdrop-blur text-foreground text-sm font-medium border border-border/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="scroll-mt-20 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Meus <span className="text-gradient">projetos</span>
          </h2>
          <p className="text-foreground/70">
            Uma seleção dos trabalhos que demonstram minha expertise técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl bg-card/80 backdrop-blur border border-border/60 shadow-soft overflow-hidden hover:-translate-y-2 transition-all duration-300 animate-fade-up block"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-primary font-medium text-sm">
                  <ExternalLink size={14} /> Acessar projeto
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="scroll-mt-20 max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Vamos <span className="text-gradient">conversar</span>
          </h2>
          <p className="text-foreground/70">
            Tem um projeto em mente? Entre em contato e vamos transformar sua ideia em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-8">
          <div className="space-y-4 animate-fade-up">
            {[
              { Icon: MapPin, label: "Localização", value: "São Luís, Maranhão" },
              { Icon: Mail, label: "E-mail", value: "fernanda@exemplo.com" },
              { Icon: Phone, label: "WhatsApp", value: "+55 (98) 98104-5788" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="p-5 rounded-2xl bg-card/80 backdrop-blur border border-border/60 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="p-6 md:p-8 rounded-3xl bg-card/80 backdrop-blur border border-border/60 shadow-soft space-y-4 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <div>
              <label className="text-sm font-medium block mb-1.5">Nome</label>
              <input required className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition" placeholder="Seu nome" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">E-mail</label>
              <input type="email" required className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition" placeholder="voce@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Mensagem</label>
              <textarea required rows={5} className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none" placeholder="Conte sobre seu projeto..." />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:scale-[1.02] transition-transform">
              {sent ? "Mensagem enviada! ✨" : (<>Enviar mensagem <Send size={16} /></>)}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
