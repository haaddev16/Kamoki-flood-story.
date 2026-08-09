import Header from "./components/Header";
import WaterGauge from "./components/WaterGauge";
import JoinMovement from "./components/JoinMovement";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <WaterGauge />

      {/* HERO */}
      <section
        className="relative flex min-h-[90vh] flex-col justify-end overflow-hidden px-6 pb-16 pt-24 text-paper md:px-16 lg:pl-32"
        style={{
          background:
            "linear-gradient(180deg, #2E3A46 0%, #1F2731 55%, #1B1F23 100%)",
        }}
      >
        <div className="absolute left-6 top-24 h-[calc(100%-9rem)] w-[3px] bg-warn md:left-16 lg:left-32" />
        <p className="pl-12 font-mono text-xs uppercase tracking-[0.25em] text-warn md:pl-20 lg:pl-40">
          Field Report 001
        </p>
        <h1 className="mt-4 max-w-3xl pl-12 font-display text-5xl italic leading-[1.08] text-balance md:pl-20 md:text-7xl lg:pl-40">
          I watched Kamoki go underwater
        </h1>
        <p className="mt-6 max-w-xl pl-12 text-lg text-paper/70 md:pl-20 md:text-xl lg:pl-40">
          Record monsoon rain. A district submerged. No rickshaws, no bikes
          — just a train, and water up to people&apos;s knees. This is what
          I saw, and the story behind it.
        </p>
        <div className="mt-12 flex items-center gap-3 pl-12 text-paper/40 md:pl-20 lg:pl-40">
          <div className="h-px w-12 bg-paper/30" />
          <span className="font-mono text-xs uppercase tracking-wider">
            Scroll — the water keeps rising
          </span>
        </div>
      </section>

      {/* PERSONAL STORY */}
      <section className="bg-paper px-6 py-24 md:px-16 lg:pl-32">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-flood">
            What I Saw
          </p>
          <div className="mt-6 space-y-6 font-body text-lg leading-relaxed text-ink/90 md:text-xl">
            <p>
              I&apos;d gone to Gujranwala for a short vacation. Getting back
              to Lahore should have been simple — it always is. This time it
              wasn&apos;t.
            </p>
            <p>
              The rain hadn&apos;t stopped for what felt like days. When I
              tried to leave, the roads near Kamoki were flooded up to
              people&apos;s knees. No rickshaws were running. No bikes were
              moving anywhere — the water had made the roads impossible. The
              only way through was the train.
            </p>
            <blockquote className="relative rounded-md border-l-2 border-warn bg-ink/[0.03] py-6 pl-8 pr-6 font-display text-2xl italic leading-snug text-sky md:text-3xl">
              <span
                className="absolute -top-2 right-4 font-display text-6xl text-warn/25"
                aria-hidden="true"
              >
                &rdquo;
              </span>
              Poor people&apos;s houses were destroying. It really felt bad.
              <footer className="mt-3 font-mono text-xs not-italic uppercase tracking-wider text-ink/50">
                — from the train, Kamoki
              </footer>
            </blockquote>
            <p>
              From the train window, I could see it — homes that people had
              spent years building, half-swallowed by water that had nowhere
              left to go. These weren&apos;t abstract numbers to me. They
              were roofs, walls, doorframes — someone&apos;s whole life,
              standing in water.
            </p>
            <p>
              I didn&apos;t know it then, but what I&apos;d driven through
              was already making headlines. This wasn&apos;t a one-off storm
              — it was part of a pattern that&apos;s repeated, and worsened,
              almost every monsoon for the last few years.
            </p>
          </div>
        </div>
      </section>

      {/* DATA */}
      <section className="bg-ink px-6 py-24 text-paper md:px-16 lg:pl-32">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-warn">
            Verified Data
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl italic text-balance text-warn md:text-4xl">
            The Scale of Ruin
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { stat: "250mm", label: "Rain in 24 hours, Gujranwala — a regional record", src: "PMD, Jul 2026" },
              { stat: "5+", label: "Dead in Gujranwala & Gujrat, incl. 2 children", src: "Express Tribune, Jul 2026" },
              { stat: "14", label: "Age of the boy who drowned in a flooded underpass in Kamoke", src: "Express Tribune, Jul 2026" },
              { stat: "10 ft", label: "Depth of floodwater in that same underpass", src: "Express Tribune, Jul 2026" },
              { stat: "4M+", label: "People displaced nationwide, 2025 monsoon floods", src: "Economic Survey 2025–26" },
              { stat: "Rs822bn", label: "Total economic loss from the 2025 floods", src: "Economic Survey 2025–26" },
              { stat: "229,763", label: "Homes damaged or destroyed nationwide, 2025", src: "Economic Survey 2025–26" },
              { stat: "Top 10", label: "Pakistan's global climate-vulnerability ranking", src: "Global Climate Risk Index" },
            ].map((d) => (
              <div
                key={d.stat}
                className="rounded-md border border-paper/15 px-5 py-6 transition-colors hover:border-warn/50"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-paper/45">
                  {d.label}
                </p>
                <p className="mt-3 font-mono text-3xl font-semibold text-warn md:text-4xl">
                  {d.stat}
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-paper/30">
                  {d.src}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="px-6 py-24 md:px-16 lg:pl-32">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-flood">
            Why this keeps happening
          </p>
          <h2 className="mt-4 font-display text-3xl italic text-balance md:text-4xl">
            It isn&apos;t bad luck. It&apos;s a pattern.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/85">
            <p>
              Pakistan sits among the ten countries most vulnerable to climate
              change on Earth, and it shows in the rainfall itself — the 2025
              monsoon dropped 23% more rain than normal nationwide, and the
              July 2026 storm that flooded Kamoki broke a regional rainfall
              record on its own.
            </p>
            <p>
              But rain alone doesn&apos;t drown a town. In Gujranwala,
              drainage upgrades that WASA had promised before the monsoon
              season weren&apos;t finished when the rain came. Underpasses
              built without adequate outflow become, in minutes, ten feet of
              standing water. Homes built along natural water paths have
              nowhere to redirect a flood that used to pass through empty
              land.
            </p>
            <p>
              This has happened in some form every year since 2022. The
              scale changes. The outcome doesn&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-flood/10 px-6 py-24 md:px-16 lg:pl-32">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-flood">
            What Could Actually Change This
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl italic text-balance text-sky md:text-4xl">
            Not a five-year plan. Four things that are buildable now.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                who: "Government",
                tag: "bg-sky/10 text-sky",
                title: "Local early-warning alerts",
                body: "PMD flood forecasts already exist — they rarely reach the low-lying neighborhood that needs them an hour before the water does. A simple SMS/WhatsApp alert system tied to river and rainfall thresholds, pushed to registered residents in flood-prone wards, closes that gap.",
              },
              {
                who: "Government",
                tag: "bg-sky/10 text-sky",
                title: "Drainage work finished before monsoon, not after",
                body: "WASA's Gujranwala upgrades were incomplete when this monsoon hit — a scheduling failure, not a funding one. Binding monsoon-readiness deadlines for underpass and drainage projects would prevent this specific, avoidable failure mode.",
              },
              {
                who: "Government",
                tag: "bg-sky/10 text-sky",
                title: "Enforced floodplain zoning",
                body: "Construction on natural nullahs and floodwater paths keeps happening because enforcement is inconsistent. Mapping flood-prone zones publicly and enforcing existing restrictions removes one of the most preventable causes of urban flooding.",
              },
              {
                who: "Community",
                tag: "bg-warn/15 text-warn",
                title: "A transparent, fast local relief fund",
                body: "Large-scale government relief takes time to mobilize. A small, transparent community fund — visible contributions, visible payouts — can get cash or supplies to a displaced family within 48 hours, not weeks.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-md border border-line bg-paper px-6 py-6"
              >
                <span
                  className={`inline-block rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${s.tag}`}
                >
                  {s.who}
                </span>
                <h3 className="mt-3 font-display text-xl text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-ink/75">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JoinMovement />
    </main>
  );
}
