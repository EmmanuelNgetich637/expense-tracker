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
    console.log("Received in App:", newExpense); // This should log every time a new expense is added
    setExpenses([...expenses, newExpense]);
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ExpenseForm onAdd={addExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;
