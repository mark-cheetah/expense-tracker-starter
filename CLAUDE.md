# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build
npm run lint      # ESLint
npm run preview   # Preview production build
```

No test suite is configured.

## Architecture

This is a single-component React app (React 19, Vite 7). All state and logic live in `src/App.jsx` — there are no sub-components, routing, or external state management.

**Known intentional issues** (this is a course starter project):
- `amount` is stored as a string, so `reduce` concatenates instead of summing — totals and balance are wrong
- "Freelance Work" is marked as `type: "expense"` but categorized as `"salary"`
- No delete functionality on transactions
- UI styling is minimal/rough
