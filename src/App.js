import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import SearchBar from './SearchBar';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState('');

  const filteredExpenses = expenses.filter(expense =>
    (expense.category || '').toLowerCase().includes(search.toLowerCase())
  );

  function addExpense(newExpense) {
    console.log("Received in App:", newExpense); // Should log each time
    setExpenses([...expenses, newExpense]);
  }

  return (
    <div className="p-4 text-white bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Expense Tracker</h1>

      <div className="mb-6">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className="mb-8 border-2 border-gray-600 rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Add New Expense</h2>
        <ExpenseForm onAdd={addExpense} />
      </div>

      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;

