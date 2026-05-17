import "./globals.css";

export const metadata = {
  title: "MyTraitBook",
  description: "Custom personality-based journals and executive book covers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-950">
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a
              href="/"
              className="text-xl font-black tracking-tight"
            >
              MyTraitBook
            </a>

            <nav className="flex items-center gap-6 text-sm font-semibold">
              <a
                href="/"
                className="transition hover:text-cyan-500"
              >
                Home
              </a>

              <a
                href="/pricing"
                className="transition hover:text-cyan-500"
              >
                Pricing
              </a>

              <a
                href="/order"
                className="rounded-full bg-zinc-950 px-5 py-2 text-white transition hover:bg-zinc-800"
              >
                Order Inquiry
              </a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
