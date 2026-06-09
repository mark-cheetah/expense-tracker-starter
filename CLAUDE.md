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

React 19, Vite 7. No routing or external state management.

`App.jsx` is the root — it holds the `transactions` array in state and passes it down:

- **`Summary`** — receives `transactions`, computes and displays total income, expenses, and balance
- **`TransactionForm`** — owns its own form state (description, amount, type, category); calls `onAdd(transaction)` prop when submitted
- **`TransactionList`** — receives `transactions`, owns filter state internally, renders the filtered table

The `categories` constant is duplicated in `TransactionForm` and `TransactionList` — not yet extracted to a shared location.

**Known intentional issues** (this is a course starter project):
- "Freelance Work" is marked as `type: "expense"` but categorized as `"salary"`
- No delete functionality on transactions
- UI styling is minimal/rough
