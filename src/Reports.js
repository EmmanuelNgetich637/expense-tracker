export default function Reports({ expenses }) {
    const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);
    
    return (
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-4">Spending Analytics</h2>
        <p>Total Expenses: ${total.toFixed(2)}</p>
        {/* Add charts here later */}
      </div>
    );
  }