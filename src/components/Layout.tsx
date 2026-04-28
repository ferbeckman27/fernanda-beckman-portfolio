import { Navbar } from "./Navbar";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-page relative overflow-x-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-rose/40 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-leaf/35 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-0 left-1/4 w-[26rem] h-[26rem] rounded-full bg-rose-soft/70 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
        <div className="absolute top-2/3 right-1/4 w-80 h-80 rounded-full bg-leaf-soft/60 blur-3xl animate-blob" style={{ animationDelay: "9s" }} />
      </div>

      <Navbar />
      <main className="pt-16">{children}</main>
      <WhatsAppButton />
      <footer className="mt-24 py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        © {new Date().getFullYear()} Fernanda Beckman · São Luís, Maranhão
      </footer>
    </div>
  );
}
