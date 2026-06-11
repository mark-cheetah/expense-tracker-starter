---
name: project-architecture
description: Core architectural facts, patterns, and known issues for the expense tracker project
metadata:
  type: project
---

React 19 + Vite 7 expense tracker. Single-page, no routing, no external state management.

**Why:** Course starter project; intentionally simple architecture to teach React fundamentals.
**How to apply:** Don't suggest routing, Redux, or heavy abstractions — they're out of scope.

## Component tree
- `App.jsx` — root; holds `transactions` array in state; `handleAdd` and `handleDelete` passed as props
- `Summary.jsx` — pure display; receives `transactions`, computes income/expenses/balance locally
- `TransactionForm.jsx` — owns its own form state; calls `onAdd(transaction)` on submit
- `TransactionList.jsx` — owns filter state (filterType, filterCategory); renders table with delete buttons
- `SpendingChart.jsx` — recharts BarChart; aggregates expenses by category; returns null when no data

## Known intentional issues (course bugs)
- "Freelance Work" seed transaction has `type: "expense"` but `category: "salary"` — intentional for teaching
- `categories` constant duplicated in TransactionForm and TransactionList — not yet extracted (known per CLAUDE.md)

## Style architecture
- `index.css` — legacy reset only (Arial, white bg); effectively overridden by `App.css`
- `App.css` — all real styles; dark theme with CSS custom properties on `:root`
- Three Google Fonts loaded in `index.html`: Syne, IBM Plex Mono, DM Sans
- `CATEGORY_COLORS` map lives in TransactionList only (not shared with SpendingChart which uses its own `COLORS` array)

## ID generation
- Seed data uses sequential integer IDs (1–8)
- `handleAdd` uses `Date.now()` for new transaction IDs — collision risk if two transactions added in the same millisecond (acceptable for course project)

## Recharts usage
- Version 3.x; `Cell` component used for per-bar coloring in SpendingChart
- Chart colors (COLORS array in SpendingChart) are not synchronized with CATEGORY_COLORS in TransactionList
