import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: Building a Full-Stack Ecommerce Platform — Joseph Obanovwe",
  description:
    "A technical breakdown of the Boaccessoriez ecommerce platform: architecture decisions, inventory management, and production deployment.",
};

export default function EcommerceCaseStudy() {
  return (
    <article className="prose-engineer">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="tag-amber">Case Study</span>
          <span className="tag">Ecommerce</span>
          <span className="tag">Full-Stack</span>
        </div>
        <h1 className="font-display text-display-md text-ink-900 mb-4 not-prose">
          Building a Full-Stack Ecommerce Platform
        </h1>
        <p className="text-ink-500 text-lg leading-relaxed not-prose max-w-xl">
          How I designed and shipped the Boaccessoriez platform. a
          production-ready ecommerce store serving real customers, with a
          per-size inventory system and a full admin panel.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 not-prose text-sm text-ink-400 font-mono">
          <span>Laravel 12</span>
          <span>·</span>
          <span>MySQL</span>
          <span>·</span>
          <span>Blade Templates</span>
          <span>·</span>
          <span>Alpine.js</span>
          <span>·</span>
          <span>Tailwind CSS</span>
        </div>
        <div className="mt-4 not-prose">
          <a
            href="http://boaccessoriez.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-4 inline-flex"
          >
            View Live Site ↗
          </a>
        </div>
      </div>

      <div className="divider mb-10" />

      {/* Overview */}
      <h3>Overview</h3>
      <p>
        Boaccessoriez is an online accessories brand that needed a custom ecommerce
        platform, not a Shopify theme, but a purpose-built system they could own and
        extend. The goal was a production deployment that could handle real customer
        traffic with a reliable checkout experience and an admin panel for the business owner.
      </p>

      {/* Problem */}
      <h3>The Problem</h3>
      <p>
        The client needed a system where products could have multiple colours and sizes,
        each with independent stock counts. Off-the-shelf solutions either required expensive
        plugins or didn&apos;t handle the specific variant/stock model the business needed.
        The admin experience also needed to be simple enough for non-technical staff.
      </p>

      {/* Architecture */}
      <h3>Architecture</h3>
      <div className="not-prose my-6 grid md:grid-cols-4 gap-3">
        {[
          { layer: "Frontend", tech: "Blade + Alpine.js + Tailwind CSS", note: "Server-rendered with JS sprinkles" },
          { layer: "Backend", tech: "Laravel 12", note: "MVC, Eloquent ORM, resource controllers" },
          { layer: "Database", tech: "MySQL", note: "Relational schema for products, variants, orders" },
          { layer: "Deployment", tech: "Production server", note: "Optimised for performance and uptime" },
        ].map((item) => (
          <div key={item.layer} className="border border-ink-200 rounded p-4 bg-white">
            <p className="font-mono text-xs text-amber uppercase tracking-wide-sm mb-1">{item.layer}</p>
            <p className="font-display text-base text-ink-900 mb-1">{item.tech}</p>
            <p className="text-ink-400 text-xs">{item.note}</p>
          </div>
        ))}
      </div>

      <p>
        I chose Laravel for its expressive ORM and the ability to handle both the
        storefront and admin panel within a single application. The database schema centres
        on a <code>products</code> table with a <code>product_variants</code> pivot that
        stores colour, size, and stock count per combination, allowing precise inventory
        tracking per SKU.
      </p>

      {/* Engineering Challenges */}
      <h3>Engineering Challenges</h3>
      <ul>
        <li>
          <strong>Per-size inventory enforcement</strong> — The biggest complexity was
          ensuring stock was decremented at the variant level (colour + size) and that
          out-of-stock combinations showed correct UI states without blocking other variants.
        </li>
        <li>
          <strong>Quick-add modal UX</strong> — The modal needed to dynamically update
          available sizes based on selected colour, and quantity based on remaining stock,
          all without page reloads, using Alpine.js reactive state.
        </li>
        <li>
          <strong>Cart state consistency</strong> — Cart sessions needed to validate stock
          at checkout time (not just add-to-cart time), to prevent race conditions where
          two customers could both add the last item.
        </li>
        <li>
          <strong>Admin panel access control</strong> — Staff accounts needed to access
          order management but not product creation. Role-based middleware was implemented
          at the route level with visual badging in the UI.
        </li>
      </ul>

      {/* Solutions */}
      <h3>Solutions & Key Decisions</h3>
      <p>
        For inventory, I modelled variants as first-class database records rather than
        JSON columns, this made queries simpler and allowed reliable stock locking with
        MySQL transactions during checkout. Each <code>product_variant</code> row holds
        a <code>stock_count</code> that is decremented atomically when an order is confirmed.
      </p>
      <p>
        The Quick Add modal was built with Alpine.js <code>x-data</code> scoped to the
        product card component. Colour selection triggers a reactive filter on the sizes
        array, hiding unavailable combinations and showing a visual &quot;out of stock&quot;
        state for sold-out sizes inline.
      </p>
      <p>
        For admin access control, Laravel&apos;s gate and policy system was extended with
        an <code>is_staff</code> flag at the user level, with route middleware enforcing
        permissions. The admin UI displays a clear &quot;Staff&quot; badge for non-admin accounts
        and restricts destructive actions.
      </p>

      {/* Results */}
      <h3>Results</h3>
      <ul>
        <li>Platform deployed to production and serving real customers</li>
        <li>Per-size inventory system tracking stock accurately across all variant combinations</li>
        <li>Admin panel used daily by the business owner and staff for order management</li>
        <li>Mobile-responsive storefront with fast page load times</li>
        <li>Zero inventory oversell incidents since launch due to transactional stock locking</li>
      </ul>

      <div className="not-prose mt-10 p-5 bg-amber/5 border border-amber/20 rounded">
        <p className="font-mono text-xs text-amber uppercase tracking-wide-sm mb-2">Key Takeaway</p>
        <p className="text-ink-600 text-sm leading-relaxed">
          Ecommerce inventory management is fundamentally a concurrency problem. Treating
          stock as a first-class database concern not application state is what makes
          a reliable system. MySQL transactions and atomic decrements solved this correctly.
        </p>
      </div>
    </article>
  );
}
