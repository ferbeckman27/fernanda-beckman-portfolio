import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fernanda Beckman" },
      { name: "description", content: "Entre em contato com Fernanda Beckman para projetos freelance." },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="text-gradient">conversar</span>
          </h1>
          <p className="text-muted-foreground">
            Tem um projeto em mente? Entre em contato e vamos transformar sua
            ideia em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-8">
          <div className="space-y-4 animate-fade-up">
            {[
              { Icon: MapPin, label: "Localização", value: "São Luís, Maranhão" },
              { Icon: Mail, label: "E-mail", value: "fernanda@exemplo.com" },
              { Icon: Phone, label: "WhatsApp", value: "+55 (98) 98104-5788" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="p-5 rounded-2xl bg-card border border-border/60 flex items-center gap-4">
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
            className="p-6 md:p-8 rounded-3xl bg-card border border-border/60 shadow-soft space-y-4 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <div>
              <label className="text-sm font-medium block mb-1.5">Nome</label>
              <input
                required
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">E-mail</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                placeholder="voce@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Mensagem</label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                placeholder="Conte sobre seu projeto..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:scale-[1.02] transition-transform"
            >
              {sent ? "Mensagem enviada! ✨" : (<>Enviar mensagem <Send size={16} /></>)}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
