export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Discord Community Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find the Silent Members<br />
          <span className="text-[#58a6ff]">Worth Waking Up</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Discord Lurker Identifier analyzes your server activity to surface high-value members who read everything but never post — so you can engage them before they leave.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Identifying Lurkers — $19/mo
        </a>
        <p className="text-xs text-[#484f58] mt-4">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "👁️", title: "Lurker Score", desc: "Ranks members by read-to-post ratio and time-in-server" },
          { icon: "📊", title: "Activity Heatmap", desc: "See when lurkers are most active to time your outreach" },
          { icon: "🎯", title: "Engagement Prompts", desc: "Get suggested DM openers tailored to each lurker's interests" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect unlimited Discord servers",
              "Full lurker scoring & ranking",
              "Activity heatmaps",
              "Engagement prompt generator",
              "Weekly email digest",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my Discord server?",
              a: "You authorize via Discord OAuth and invite our read-only bot. We never post or modify anything in your server."
            },
            {
              q: "What counts as a 'lurker'?",
              a: "Members who have been in your server for 14+ days, have low post counts relative to their tenure, but show consistent presence signals like reaction usage or voice channel joins."
            },
            {
              q: "Is my server data safe?",
              a: "We only store aggregated activity metrics — never message content. Data is encrypted at rest and you can delete it anytime from your dashboard."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58]">
        © {new Date().getFullYear()} Discord Lurker Identifier. All rights reserved.
      </footer>
    </main>
  );
}
