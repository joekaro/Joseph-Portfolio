export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-200 py-6 md:py-8 bg-ink-50">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-center md:text-left">
        <p className="font-mono text-xs text-ink-400">
          © {year} Joseph Obanovwe. All rights reserved.
        </p>
        <div className="flex items-center gap-5 md:gap-6">
          <a href="https://github.com/joekaro" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-ink-400 hover:text-ink-900 transition-colors">
            GitHub
          </a>
          <a href="mailto:obanovwejoseph@gmail.com" className="font-mono text-xs text-ink-400 hover:text-ink-900 transition-colors">
            Email
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-ink-400 hover:text-ink-900 transition-colors">
            LinkedIn
          </a>
        </div>
        <p className="font-mono text-xs text-ink-300">Built with Next.js · Deployed on Vercel</p>
      </div>
    </footer>
  );
}
