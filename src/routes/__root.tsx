import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fernanda Beckman" },
      { name: "description", content: "Portfólio de Fernanda Beckman, desenvolvedora freelancer em São Luís, MA. Java, Python, front-end e bancos de dados." },
      { name: "author", content: "Fernanda Beckman" },
      { property: "og:title", content: "Fernanda Beckman" },
      { property: "og:description", content: "Portfólio de Fernanda Beckman, desenvolvedora freelancer em São Luís, MA. Java, Python, front-end e bancos de dados." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Fernanda Beckman" },
      { name: "twitter:description", content: "Portfólio de Fernanda Beckman, desenvolvedora freelancer em São Luís, MA. Java, Python, front-end e bancos de dados." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/761093c9-8756-4b9b-b4b0-9b6eee8da459/id-preview-5abecd39--6c98c748-4399-4025-8a3b-dafd39fdcb19.lovable.app-1777404154325.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/761093c9-8756-4b9b-b4b0-9b6eee8da459/id-preview-5abecd39--6c98c748-4399-4025-8a3b-dafd39fdcb19.lovable.app-1777404154325.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
