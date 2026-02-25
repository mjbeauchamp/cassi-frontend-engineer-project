# Cassi – Frontend Engineering Take-Home Exercise

## Getting Started

```bash
pnpm install
pnpm dev        # start dev server at http://localhost:5173
pnpm test       # run tests
pnpm check      # run svelte-check
```

---

## Overview

You'll be working in a small, existing **SvelteKit** codebase — a Property Dashboard that lets property managers view service requests (maintenance tickets). The app is functional but incomplete, and has some rough edges. Just like real life.

Your job is to **extend it with a new feature, improve what's already there, and show us how you think.**

**Time expectation:** 2–4 hours. We value your time — don't over-polish. If you hit the 4-hour mark, stop and document what you'd do next. An unfinished submission with a strong write-up beats a complete one with no explanation.

**On SvelteKit:** We use SvelteKit in-house, which is why this starter is built with it. If you haven't used Svelte before, don't worry — it's intentionally approachable, and the existing code gives you patterns to follow. You should be able to read and extend it without deep framework knowledge. That said, don't spend your limited time fighting the framework — focus on the problem-solving.

**On AI tools:** Use whatever tools you'd normally use — search engines, AI assistants, documentation, etc. We do the same. What we're evaluating is your judgment, your decisions, and your ability to reason about the code — not whether you typed every character yourself.

---

## The Scenario

Cassi is a property management platform. Tenants and on-site staff submit service requests for properties they manage. Property managers use this dashboard to triage and track them. A previous developer started this tool and moved on. You're picking it up.

---

## What's Already Built

- A SvelteKit app with a service request list view
- Mock data loaded from a local JSON file
- Basic filtering by status
- Tailwind CSS for styling

Take some time to read through the codebase before you start. You may notice some things you'd do differently — that's intentional.

---

## Your Tasks

### 1. Add a Feature: Detail View + Status Updates

When a user clicks a service request, they should see its full details (description, notes, assignee, timestamps, etc.) and be able to **change its status** (e.g. Open → In Progress → Resolved).

How you implement this — modal, side panel, separate route, etc. — is a product and architecture decision for you to make. Client-side state changes are fine; no persistence required.

### 2. Improve Something

Look at the existing code with fresh eyes. Pick at least one thing to refactor or improve and do it. This could be a component that's doing too much, a pattern that's inconsistent, an accessibility gap, error handling that's missing, or anything else you notice.

**Tell us what you changed and why in your write-up.**

### 3. Write Tests

We don't expect full coverage. Write a few tests that demonstrate *how* you think about testing — what's worth testing, at what level, and why. A few meaningful tests beat dozens of trivial ones.

### 4. Stretch (optional — pick any that interest you)

These aren't expected. They're opportunities to show depth in areas you're strong in.

- **Optimistic UI** — Update the UI immediately on status change; handle potential rollback.
- **URL-driven state** — Reflect filters and/or selected request in the URL.
- **Keyboard navigation** — Let a power user navigate and act without a mouse.
- **Edge-case handling** — The data has some quirks. How gracefully do you handle them?
- **A product suggestion** — Notice something about the workflow that could be better? Implement it or write it up.

---

## Data Quirks

The mock data has a few imperfections on purpose. How (or whether) you handle them is part of the exercise:

- One request has an **empty description** and an **assignee with an empty name**
- One request has a **missing property address**
- Dates are in UTC
- Some requests have notes, some don't; some have assignees, some are null

---

## What We're Evaluating

| Area | What we're looking for |
|---|---|
| **Problem-solving** | How do you navigate ambiguity and constraints you didn't create? |
| **Working in existing code** | Can you read, understand, and extend someone else's patterns — or thoughtfully deviate from them? |
| **Architecture** | Are your additions organized in a way another developer could follow and extend? |
| **Code quality** | Clean, readable code. Sensible abstractions. Not too clever, not too flat. |
| **Product thinking** | Does the UI make sense for the user? Did you notice things that could be better? |
| **Testing** | What did you choose to test, and why? |
| **Communication** | Your write-up and inline decisions tell us how you think. |

---

## Deliverables

1. **A working application** — Fork the repository and submit your work as a public repo (GitHub, GitLab, etc.).

2. **A DECISIONS.md file** (or a section in the README) that includes:
   - **Your approach:** What did you do first? How did you orient yourself in the codebase?
   - **Decisions & tradeoffs:** What options did you consider? What did you choose and why? What did you explicitly *not* build?
   - **What you improved:** What did you refactor or change in the existing code, and what was your reasoning?
   - **With more time:** What would you tackle next?
   - **Product observations** (if any): Anything about the data, workflow, or UX you'd flag or suggest.

3. **Tests** — at least a few that show your testing philosophy.

---

## After Submission

We'll schedule a **30-minute code walkthrough** where you'll walk us through your submission. We'll ask you about your decisions, explore alternatives together, and talk through how you'd handle changing requirements. Think of it as a collaborative review, not a gotcha session.

---

## Ground Rules

- **Do use** whatever tools and references you'd normally use day-to-day.
- **Don't use** project generators or boilerplate templates that make the architectural decisions for you.
- **Time-box yourself.** The write-up matters as much as the code.

---

## Submission

Reply to the email you received with a link to your repository. If you have any questions about the exercise, don't hesitate to ask — how you ask questions is itself a signal we value.

Good luck, and thanks for your time!
