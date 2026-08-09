"use client";

import { useState, FormEvent } from "react";

type Entry = { name: string; email: string; phone: string };

export default function JoinMovement() {
  // In-memory only, per the assignment brief — no backend, no real storage.
  const [entries, setEntries] = useState<Entry[]>([]);
  const [form, setForm] = useState<Entry>({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    setEntries((prev) => [...prev, form]);
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <footer id="join" className="bg-ink px-6 pb-16 pt-24 text-paper md:px-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper/40">
          © 2026 Kamoki Record. All rights reserved.
        </p>
        <nav className="mt-6 flex items-center justify-center gap-6 font-mono text-xs uppercase tracking-wider text-paper/50">
          <span>The Archive</span>
          <span className="text-warn">Field Reports</span>
          <a href="#join" className="hover:text-paper">
            Take Action
          </a>
        </nav>

        <p className="mt-14 font-mono text-xs uppercase tracking-[0.2em] text-warn">
          This is where it changes
        </p>
        <h2 className="mt-4 font-display text-4xl italic text-balance md:text-5xl">
          Join the Movement
        </h2>
        <p className="mx-auto mt-5 max-w-md text-paper/80">
          Kamoki isn&apos;t the last town this will happen to. Add your name
          if you want to be counted — for early warning networks, for
          floodplain accountability, for the families rebuilding right now.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-lg border border-warn/40 bg-paper/5 px-6 py-8">
            <p className="font-display text-2xl italic">Thank you.</p>
            <p className="mt-2 text-sm text-paper/70">
              You&apos;re counted. {entries.length}{" "}
              {entries.length === 1 ? "person has" : "people have"} joined in
              this session.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 font-mono text-xs uppercase tracking-wider text-warn underline underline-offset-4"
            >
              Add another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-4 text-left"
          >
            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-paper/60">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-md border border-paper/20 bg-transparent px-4 py-3 text-paper placeholder:text-paper/30 focus:border-warn"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-paper/60">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-md border border-paper/20 bg-transparent px-4 py-3 text-paper placeholder:text-paper/30 focus:border-warn"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="font-mono text-xs uppercase tracking-wider text-paper/60">
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 w-full rounded-md border border-paper/20 bg-transparent px-4 py-3 text-paper placeholder:text-paper/30 focus:border-warn"
                placeholder="03xx-xxxxxxx"
              />
            </div>
            <button
              type="submit"
              className="mt-3 rounded-md bg-warn px-6 py-3 font-mono text-sm uppercase tracking-wider text-ink transition-opacity hover:opacity-90"
            >
              Join the Movement
            </button>
            <p className="text-center text-xs text-paper/40">
              Simulated for this project — nothing is stored or sent anywhere.
            </p>
          </form>
        )}
      </div>

      <p className="mx-auto mt-16 max-w-2xl text-center font-mono text-[10px] uppercase tracking-wider text-paper/25">
        Sources: Pakistan Economic Survey 2025–26 · Pakistan Bureau of
        Statistics · UN OCHA · Pakistan Meteorological Department · Express
        Tribune, July 2026
      </p>
    </footer>
  );
}
