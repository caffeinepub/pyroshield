# PyroShield

## Current State
New project. Empty backend (scaffold only). No frontend pages yet.

## Requested Changes (Diff)

### Add
- Full single-page marketing website for PyroShield, a drone-based fire safety venture
- Sticky header with logo, nav links (Technology, Solutions, Industries, Benefits, About, Contact), and "Request Demo" CTA
- Hero section: large headline, supporting paragraph, dual CTAs, drone-over-fire imagery (right column), dark grid overlay background
- Problem Statement section: headline + key stats (e.g., 52M+ acres burned, $150B+ damages)
- Solution section: "PyroShield Drone Technology" — thermal imaging drones + AI analytics, with bullet features
- Target Markets section: 3 cards — Residential, Commercial, Industrial (+ Critical Infrastructure)
- Key Benefits section: 4 icon cards — Rapid Response, Cost Savings, Enhanced Safety, Scalable Protection
- Bottom CTA section: headline + lead form (Name, Email, Message + Submit)
- Footer with logo, nav, social links, copyright

### Modify
- None

### Remove
- None

## Implementation Plan
1. Generate hero drone/fire image and market card images via image generation
2. Build single-page React frontend matching design preview: dark #0B0D10 background, orange #FF6A2A accent, off-white text
3. All sections as described above, smooth scroll nav anchors
4. No backend integration needed — pure marketing site with a contact form (frontend only, no submission backend)
