import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: Real Estate Listing Platform — Joseph Obanovwe",
  description:
    "Frontend architecture, filtering, and SEO optimisation for a real estate property listing platform built with Next.js.",
};

export default function RealEstateCaseStudy() {
  return (
    <article className="prose-engineer">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="tag-amber">Case Study</span>
          <span className="tag">Frontend</span>
          <span className="tag">Next.js</span>
        </div>
        <h1 className="font-display text-display-md text-ink-900 mb-4 not-prose">
          Real Estate Listing Platform
        </h1>
        <p className="text-ink-500 text-lg leading-relaxed not-prose max-w-xl">
          Frontend architecture, property filtering, and SEO optimisation for
          LuxeLivin — a property browsing platform built to professional real estate
          standards.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 not-prose text-sm text-ink-400 font-mono">
          <span>Next.js</span>
          <span>·</span>
          <span>React</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>Tailwind CSS</span>
          <span>·</span>
          <span>Netlify</span>
        </div>
        <div className="mt-4 not-prose">
          <a
            href="https://luxelivin.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-4 inline-flex"
          >
            View Live Site ↗
          </a>
        </div>
      </div>

      <div className="divider mb-10" />

      <h3>Overview</h3>
      <p>
        LuxeLivin is a property listing platform for a real estate brand. The brief
        was to build a professional property browsing experience — clean, fast, and
        easy for potential buyers to navigate listings and view property details.
        The platform needed to feel credible and trustworthy, as users making real
        estate decisions need confidence in the brand.
      </p>

      <h3>The Problem</h3>
      <p>
        Real estate platforms live or die on discoverability. Property listings need
        to be findable through search and filtering, and each listing page needs strong
        SEO metadata so individual properties rank in search results. The design also
        needed to communicate a premium brand while remaining highly functional.
      </p>

      <h3>Architecture</h3>
      <div className="not-prose my-6 grid md:grid-cols-3 gap-3">
        {[
          { layer: "Framework", tech: "Next.js (App Router)", note: "SSG for listings, dynamic routes for properties" },
          { layer: "Styling", tech: "Tailwind CSS", note: "Utility-first, fully responsive" },
          { layer: "Deployment", tech: "Netlify", note: "Static export with CDN delivery" },
        ].map((item) => (
          <div key={item.layer} className="border border-ink-200 rounded p-4 bg-white">
            <p className="font-mono text-xs text-amber uppercase tracking-wide-sm mb-1">{item.layer}</p>
            <p className="font-display text-base text-ink-900 mb-1">{item.tech}</p>
            <p className="text-ink-400 text-xs">{item.note}</p>
          </div>
        ))}
      </div>

      <h3>Frontend Architecture Decisions</h3>
      <p>
        Next.js App Router was chosen for its file-based routing and native support for
        both static and dynamic rendering. Property listing index pages are statically
        generated at build time for maximum performance. Individual property pages use
        dynamic routes with <code>generateStaticParams</code> where the property set is
        known, and fall back to dynamic rendering for user-filtered views.
      </p>
      <p>
        TypeScript was used throughout with strict types for the property data model,
        ensuring that component interfaces were well-defined and filtering logic was
        type-safe across the application.
      </p>

      <h3>Engineering Challenges</h3>
      <ul>
        <li>
          <strong>Filter state management</strong> — The filtering system (property type,
          price range, location, bedrooms) needed to be URL-based so filtered views were
          shareable and bookmarkable. <code>useSearchParams</code> with proper Suspense
          boundaries handled this correctly in the Next.js App Router context.
        </li>
        <li>
          <strong>Image performance</strong> — Property listing images are the heaviest
          assets on any real estate platform. Next.js <code>Image</code> component with
          priority loading for above-the-fold images and lazy loading for listing grids
          kept Core Web Vitals in acceptable ranges.
        </li>
        <li>
          <strong>SEO for individual listings</strong> — Each property needed its own
          <code>generateMetadata</code> output with unique title, description, and OG
          image for social sharing — important for direct property links shared via
          WhatsApp and social media.
        </li>
      </ul>

      <h3>Key Decisions</h3>
      <p>
        Keeping filter state in the URL (via <code>searchParams</code>) rather than
        React state was the right call. It meant the back button worked correctly,
        filtered views could be shared directly, and the filtering UI re-hydrated
        correctly on page load without any extra state management logic.
      </p>
      <p>
        The design prioritised whitespace and photography over dense information. Real
        estate buying decisions are emotional as well as logical — the platform needed
        to feel aspirational while surfacing the practical details efficiently.
      </p>

      <h3>Results</h3>
      <ul>
        <li>Platform deployed on Netlify with fast global CDN delivery</li>
        <li>Filtering system with URL-based state — shareable and bookmarkable</li>
        <li>SEO-optimised listing pages with per-property metadata</li>
        <li>Fully responsive across mobile, tablet, and desktop</li>
        <li>Clean TypeScript architecture ready for backend API integration</li>
      </ul>

      <div className="not-prose mt-10 p-5 bg-amber/5 border border-amber/20 rounded">
        <p className="font-mono text-xs text-amber uppercase tracking-wide-sm mb-2">Key Takeaway</p>
        <p className="text-ink-600 text-sm leading-relaxed">
          URL-based filter state is the correct default for any content discovery UI.
          It costs almost nothing extra to implement but provides shareability,
          bookmarkability, and correct browser history behaviour — all of which matter
          significantly on a platform where users research across sessions.
        </p>
      </div>
    </article>
  );
}
