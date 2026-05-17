export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My Trait Book
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Turn every team member into the main character of their own story.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-300">
            Premium, personality-based book covers and A5 journals created for
            company teams, leadership retreats, onboarding, recognition gifts,
            and unforgettable employee moments.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/pricing"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              View Pricing
            </a>

            <a
              href="/order"
              className="rounded-full border border-zinc-600 px-6 py-3 font-semibold transition hover:bg-white hover:text-zinc-950"
            >
              Request an Order
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-700 bg-zinc-950 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              The Gift
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              What makes them powerful
            </h2>

            <p className="mt-4 leading-relaxed text-zinc-300">
              Each book celebrates the employee’s natural strengths,
              motivational pattern, professional identity, and contribution.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-700 bg-zinc-950 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              The Tax
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              The tension behind the talent
            </h2>

            <p className="mt-4 leading-relaxed text-zinc-300">
              The back-cover story captures the pressure and growth edge behind
              each person’s strongest gifts.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-700 bg-zinc-950 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              The Keepsake
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              A journal worth keeping
            </h2>

            <p className="mt-4 leading-relaxed text-zinc-300">
              Available as custom wraparound covers only or assembled with an
              A5 journal ready to gift.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}