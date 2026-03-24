import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: Paystack Integration & Marketplace Backend — Joseph Obanovwe",
  description:
    "Technical breakdown of building a marketplace backend with Paystack payments, vendor payouts, and commission management using Laravel.",
};

export default function PaymentCaseStudy() {
  return (
    <article className="prose-engineer">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="tag-amber">Case Study</span>
          <span className="tag">Backend</span>
          <span className="tag">Payments</span>
        </div>
        <h1 className="font-display text-display-md text-ink-900 mb-4 not-prose">
          Paystack Integration & Marketplace Backend
        </h1>
        <p className="text-ink-500 text-lg leading-relaxed not-prose max-w-xl">
          Designing a marketplace backend with vendor registration, commission
          management, and Paystack payment flows — including split payments and
          vendor payout automation.
        </p>
        <div className="flex flex-wrap gap-4 mt-6 not-prose text-sm text-ink-400 font-mono">
          <span>Laravel</span>
          <span>·</span>
          <span>MySQL</span>
          <span>·</span>
          <span>Paystack API</span>
          <span>·</span>
          <span>REST API</span>
          <span>·</span>
          <span>Next.js (frontend)</span>
        </div>
      </div>

      <div className="divider mb-10" />

      <h3>Overview</h3>
      <p>
        This project was a digital marketplace platform connecting vendors with customers.
        The backend was responsible for handling all product listings, order processing,
        commission deductions, and vendor payouts through Paystack. The frontend was
        a separate Next.js application consuming the Laravel REST API.
      </p>

      <h3>The Problem</h3>
      <p>
        Marketplace payment flows are more complex than standard ecommerce: money from a
        customer needs to be split between the platform (commission) and the vendor
        (payout), and vendors need to receive funds reliably after order fulfilment.
        Paystack&apos;s Nigerian payment infrastructure needed to be the backbone of this.
      </p>

      <h3>Architecture</h3>
      <div className="not-prose my-6 grid md:grid-cols-3 gap-3">
        {[
          { layer: "API Layer", tech: "Laravel REST API", note: "Resource controllers, API tokens, rate limiting" },
          { layer: "Payments", tech: "Paystack", note: "Transactions, split codes, transfers API" },
          { layer: "Frontend", tech: "Next.js 15", note: "Separate client consuming the Laravel API" },
        ].map((item) => (
          <div key={item.layer} className="border border-ink-200 rounded p-4 bg-white">
            <p className="font-mono text-xs text-amber uppercase tracking-wide-sm mb-1">{item.layer}</p>
            <p className="font-display text-base text-ink-900 mb-1">{item.tech}</p>
            <p className="text-ink-400 text-xs">{item.note}</p>
          </div>
        ))}
      </div>

      <h3>Payment Flow Design</h3>
      <p>
        The payment flow follows a clear sequence: customer initiates checkout → Paystack
        transaction is initialised with a split code → webhook confirms payment → platform
        records the transaction and triggers the vendor payout queue.
      </p>
      <p>
        Paystack&apos;s <code>subaccounts</code> API was used to register each vendor as a
        subaccount. A <code>split_code</code> is generated per transaction based on the
        commission percentage configured for that vendor&apos;s tier, allowing Paystack to
        handle the fund split at the infrastructure level rather than doing manual transfers.
      </p>

      <h3>Engineering Challenges</h3>
      <ul>
        <li>
          <strong>Webhook reliability</strong> — Paystack webhooks can arrive out of
          order or be retried. All webhook handlers were made idempotent using a
          <code>paystack_reference</code> unique constraint on the transactions table,
          preventing duplicate processing.
        </li>
        <li>
          <strong>Commission calculation</strong> — Different vendor tiers had different
          commission rates. A flexible <code>commission_rules</code> table allowed
          per-vendor and per-category overrides without code changes.
        </li>
        <li>
          <strong>Payout scheduling</strong> — Vendors needed payouts to be triggered
          automatically after a configurable holding period (to allow for returns).
          Laravel queues and scheduled jobs handled this reliably.
        </li>
        <li>
          <strong>CORS for decoupled frontend</strong> — The Next.js frontend and Laravel
          API are on different origins. CORS was configured at the middleware level with
          strict origin allowlisting per environment.
        </li>
      </ul>

      <h3>Key Decisions</h3>
      <p>
        Using Paystack subaccounts for fund splitting was more reliable than doing manual
        transfers after the fact — if a transfer failed, funds were already correctly
        allocated at transaction time. This simplified reconciliation significantly.
      </p>
      <p>
        Separating the frontend entirely from the backend allowed independent deployments
        and made the API reusable for future mobile app development. API versioning
        (<code>/api/v1/</code>) was built in from the start.
      </p>

      <h3>Results</h3>
      <ul>
        <li>Full marketplace payment pipeline operating end-to-end</li>
        <li>Vendor payout automation with configurable holding periods</li>
        <li>Commission management supporting multiple vendor tiers</li>
        <li>Idempotent webhook handlers with zero duplicate transaction incidents</li>
        <li>Decoupled API ready for future mobile client consumption</li>
      </ul>

      <div className="not-prose mt-10 p-5 bg-amber/5 border border-amber/20 rounded">
        <p className="font-mono text-xs text-amber uppercase tracking-wide-sm mb-2">Key Takeaway</p>
        <p className="text-ink-600 text-sm leading-relaxed">
          Payment integrations must be designed for failure from the start. Idempotent
          webhook handlers, database-level uniqueness constraints, and leveraging the
          payment provider&apos;s native split infrastructure are what make money movement
          reliable in production.
        </p>
      </div>
    </article>
  );
}
