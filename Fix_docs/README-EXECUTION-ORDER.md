# NashikExplore Website Cleanup — Execution Guide

## Repositories: do not mix them up

- **Website repository to change:** [`sooubh/nashik`](https://github.com/sooubh/nashik). This is the marketing website being simplified and corrected.
- **Actual mobile app repository to inspect as the source of truth:** [`sooubh/nashikexplore`](https://github.com/sooubh/nashikexplore). This is the Flutter app. Read it to verify features, limitations, routes, app behavior, and screenshots. **Do not modify this repository as part of the website cleanup unless a separate, explicit task asks for app changes.**
- The app repository also contains its own `website/` directory and legal pages. Do not assume that those files are identical to the separate `sooubh/nashik` website repository.

## Read and execute in this order

1. `FIX-01-TRUTHFUL-CLAIMS-AND-FUNCTIONAL-FLOWS.md` — remove unsupported claims and fake form/simulator behavior.
2. `FIX-02-PREMIUM-LANDING-PAGE-REDESIGN.md` — reduce the homepage to a clean, focused app-promotion page.
3. `FIX-03-REPOSITORY-CLEANUP-AND-ASSET-PERFORMANCE.md` — safely remove duplicated implementations/assets and reduce page weight.
4. `FIX-04-SEO-LEGAL-ROUTES-AND-RELEASE-QA.md` — reconcile metadata, legal routes, domain settings and complete release checks.

The work must be sequential at the implementation stage because several files are shared by the truth, layout, SEO, and cleanup tasks. Use subagents for parallel **read-only audit and review**; do not allow two agents to edit the same path at once.

## Required workflow for the coordinator agent

1. Open `sooubh/nashik`, inspect the active branch, deployment configuration, production domain, current `git status`, and recent changes. Do not overwrite unrelated work.
2. Read all four Fix files, then inspect the relevant runtime code in `sooubh/nashikexplore` before writing marketing copy.
3. Start with read-only subagents (see the subagent matrix in each Fix file). Ask each one for evidence, exact paths, claims, dependencies, and risks—not speculative implementation.
4. Create a working branch for the website repository. Preserve a clean rollback point.
5. Implement one Fix file at a time, run its acceptance checks, and only then proceed to the next one.
6. Run a separate subagent review after each phase. The reviewer must check both the diff and the claims against the app repository.
7. Do not commit, push, deploy, or delete large groups of files before reporting test outcomes and the remaining blockers.

## Global non-negotiable rules

- No invented Play Store ratings, review counts, download counts, testimonials, verification percentages, team size, response SLAs, performance figures, safety guarantees or premium prices.
- No wording that implies live road routing, emergency weather alerts, landslide notifications, full offline maps, or a complete offline catalogue unless the exact capability is verified in runtime code and the deployed app.
- The website exists to promote the real app. It must not build a second fake web app or imitate the app's backend with timers and demo data.
- Keep necessary privacy, terms, contact and account-deletion routes working. Simplifying the homepage is not permission to remove compliance routes.
- Preserve the exact Google Play URL already used by the project unless a live test verifies the replacement: `https://play.google.com/store/apps/details?id=com.nashikexplore.app`.
- Keep edits confined to `sooubh/nashik`. Use `sooubh/nashikexplore` as a read-only reference unless separately authorised.
