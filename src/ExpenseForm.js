import { useState } from 'react';

function ExpenseForm({ onAdd }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!"); // Add this
    console.log("All values:", { description, category, amount, date });

    if (!description || !category || !amount || !date) return;

    const newExpense = {
      id: Date.now(),
      description,
      category,
      amount,
      date,
    };

    onAdd(newExpense); // This calls the App component's addExpense
    console.log("New expense added:", newExpense);

    // Clear form
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-1"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-1"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-1"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-2 py-1">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
