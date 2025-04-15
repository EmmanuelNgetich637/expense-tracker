import { useState } from 'react';

function ExpenseForm({ onAdd }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
    console.log("All values:", { description, category, amount, date });

    if (!description || !category || !amount || !date) return;

    const newExpense = {
      id: Date.now(),
      description,
      category,
      amount,
      date,
    };

    onAdd(newExpense);
    console.log("New expense added:", newExpense);

    // Clear form
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 bg-gray-800 rounded"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 bg-gray-800 rounded"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 bg-gray-800 rounded"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 bg-gray-800 rounded"
      />
      <button type="submit" className="bg-black text-white p-2 rounded hover:bg-gray-700">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
