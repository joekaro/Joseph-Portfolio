import Link from "next/link";

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ink-50">
      {/* Top bar */}
      <header className="border-b border-ink-200 bg-ink-50/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm text-ink-500 hover:text-ink-900 transition-colors flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M13 7H1M7 13L1 7L7 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to portfolio
          </Link>
          <Link href="/" className="font-mono text-sm font-medium text-ink-900">
            JO<span className="text-amber">.</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 md:px-10 py-16">{children}</main>

      <footer className="border-t border-ink-200 mt-16 py-8">
        <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="/#work"
            className="font-mono text-xs text-ink-400 hover:text-ink-900 transition-colors"
          >
            ← View all projects
          </Link>
          <Link
            href="/#contact"
            className="btn-primary text-xs py-2 px-4"
          >
            Work with me
          </Link>
        </div>
      </footer>
    </div>
  );
}
