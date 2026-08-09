# Assignment 4 — I Watched Kamoki Go Underwater

**A firsthand flood story from Punjab, backed by verified data — built with Next.js**

Live site: https://kamoki-flood-story.vercel.app
GitHub: https://github.com/haaddev16/Kamoki-flood-story.

---

## 1. The Problem

Pakistan is one of the ten countries most vulnerable to climate change in the
world, and it shows every monsoon season. In July 2026, record-breaking rain
hit Gujranwala and the Kamoki area of Punjab, submerging roads, homes, and
markets — and I was there. On a trip back from Gujranwala to Lahore, I found
the roads near Kamoki flooded up to people's knees. No rickshaws or bikes
could move. The only way through was the train, and from the window I
watched homes that families had spent years building half-swallowed by
water with nowhere left to go.

### Scale of the problem

- Gujranwala recorded **250mm of rainfall in 24 hours** — a regional record
  (Pakistan Meteorological Department, July 2026).
- At least **5 people died** in Gujranwala and Gujrat, including 2 children;
  a 14-year-old boy drowned in a flooded underpass in Kamoke that reached
  **10 feet deep** (The Express Tribune, July 2026).
- Nationally, the 2025 monsoon floods displaced **more than 4 million
  people**, caused **Rs822 billion** in economic losses, and damaged or
  destroyed **229,763 homes** (Pakistan Economic Survey 2025–26).
- This is not a one-off: similar flooding hit Pakistan in 2022 (1,700+
  deaths, ~$40 billion in losses) and again in 2025 and 2026 — a repeating,
  worsening pattern, not an isolated disaster.

### Sources

- Pakistan Economic Survey 2025–26 (Government of Pakistan)
- Pakistan Meteorological Department (PMD), rainfall data, July 2026
- The Express Tribune, "Record rains inundate Gujranwala, Gujrat," July 2026
- UN OCHA, Pakistan 2025 Monsoon Floods Support Plan

---

## 2. The Solution

**Kamoki Record** is a single-page storytelling site aimed at anyone who
wants to understand what's actually happening on the ground during
Pakistan's recurring monsoon floods — not just the headline numbers. It
combines a firsthand eyewitness account with verified statistics and a
concrete, practical case for what could reduce this damage in future
seasons. A technology solution makes sense here because the core problem
isn't a lack of data or policy ideas — it's that verified information and a
clear call to action rarely reach ordinary people in a form they'll
actually read. A well-designed, shareable web page can put the human story
and the hard numbers in front of people who would otherwise only see a
one-line news alert, and give them a direct way to engage (the "Join the
Movement" section) rather than just scroll past.

---

## 3. Product Scope & Features

**Core feature:** A single, well-designed long-form story page combining a
personal eyewitness account with cited flood data — this is the one thing
the product must do well: make the reader feel and understand the problem.

**Secondary features:**
- A "Scale of Ruin" data section with 8 verified, sourced statistics
- A "Why this keeps happening" section explaining root causes (climate
  change + infrastructure + zoning enforcement)
- A "What could actually change this" section proposing 4 concrete,
  practical solutions, tagged by who would implement them (Government vs.
  Community)
- A "Join the Movement" form (Name, Email, Phone) that simulates a
  submission in-memory, for anyone who wants to be counted

**Out of scope:**
- No real backend, database, or authentication — this assignment is a
  research, storytelling, and design exercise, not a working
  product/app, per instructor clarification
- No real data collection from the "Join the Movement" form — it is
  simulated client-side only, with no data stored or transmitted anywhere

**User flow:**
1. User lands on the hero section and reads the headline/subhead
2. User scrolls through the personal story (with a pulled quote)
3. User reaches the data section and sees the verified statistics
4. User reads the "why this keeps happening" explanation
5. User reviews four proposed solutions
6. User reaches the footer and optionally fills out the "Join the
   Movement" form, receiving an in-page thank-you confirmation

---

## 4. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Frontend | Next.js 14 (App Router) + Tailwind CSS | Required by the assignment; App Router keeps the single page simple, Tailwind allows fast, consistent styling with custom design tokens |
| Backend/API | None | No dynamic data or persistence is required — this is a static storytelling page |
| Database | None | The "Join the Movement" form uses React state (`useState`) to simulate a submission in memory only, per the assignment's clarified scope |
| Authentication | None | Not required — the page has no user accounts |
| Deployment | Vercel | Native integration with Next.js, zero-config deployment directly from GitHub |

---

## 5. Timeline

| Stage | Work |
|---|---|
| Day 1 | Researched and validated a real, data-backed social problem (Pakistan monsoon flooding); gathered sources |
| Day 1 | Defined solution scope, features, and user flow |
| Day 2 | Designed page structure and visual direction (storm/flood color palette, editorial typography) |
| Day 2 | Built the Next.js project: hero, story, data, causes, solutions, and Join the Movement sections |
| Day 3 | Refined design based on visual reference exploration; fixed layout/spacing issues |
| Day 3 | Deployed to GitHub and Vercel; final QA pass |

---

## 6. My Personal Account

I'd gone to Gujranwala for a short vacation. Getting back to Lahore should
have been simple — it always is. This time it wasn't. The rain hadn't
stopped for what felt like days. When I tried to leave, the roads near
Kamoki were flooded up to people's knees. No rickshaws were running. No
bikes were moving anywhere — the water had made the roads impossible. The
only way through was the train.

From the train window, I could see it — homes that people had spent years
building, half-swallowed by water that had nowhere left to go. Poor
people's houses were destroying. It really felt bad. These weren't
abstract numbers to me. They were roofs, walls, doorframes — someone's
whole life, standing in water.
