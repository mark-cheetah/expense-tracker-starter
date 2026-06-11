import { useState } from 'react'

const categories = ["food", "housing", "utilities", "transport", "entertainment", "salary", "other"];

const CATEGORY_COLORS = {
  food:          { color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
  housing:       { color: '#60a5fa', bg: 'rgba(96,165,250,0.12)' },
  utilities:     { color: '#a78bfa', bg: 'rgba(167,139,250,0.12)' },
  transport:     { color: '#2dd4bf', bg: 'rgba(45,212,191,0.12)' },
  entertainment: { color: '#f472b6', bg: 'rgba(244,114,182,0.12)' },
  salary:        { color: '#34d399', bg: 'rgba(52,211,153,0.12)' },
  other:         { color: '#94a3b8', bg: 'rgba(148,163,184,0.12)' },
};

function TransactionList({ transactions, onDelete }) {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  let filtered = transactions;
  if (filterType !== "all") filtered = filtered.filter(t => t.type === filterType);
  if (filterCategory !== "all") filtered = filtered.filter(t => t.category === filterCategory);

  return (
    <div className="transactions">
      <div className="transactions-header">
        <h2>Transactions</h2>
        <div className="filters">
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => {
            const cat = CATEGORY_COLORS[t.category] || CATEGORY_COLORS.other;
            return (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.description}</td>
                <td>
                  <span
                    className="category-pill"
                    style={{ color: cat.color, background: cat.bg }}
                  >
                    {t.category}
                  </span>
                </td>
                <td>
                  <span className={`td-amount ${t.type}`}>
                    {t.type === "income" ? "+" : "−"}${t.amount.toLocaleString()}
                  </span>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      if (window.confirm("Delete this transaction?")) onDelete(t.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList
