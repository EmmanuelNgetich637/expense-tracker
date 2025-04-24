import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import Home from './Home';
import Reports from './Reports';
import Settings from './Settings';
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
    console.log("Received in App:", newExpense); 
    setExpenses([...expenses, newExpense]);
  }

  return (
    <Router>
    <div className="p-4 text-white bg-gray-900 min-h-screen">

      {/* Navigation Bar */}
      <nav className="mb-6 flex space-x-4">
          <Link to="/" className="text-white hover:text-blue-400">Home</Link>
          <Link to="/reports" className="text-white hover:text-blue-400">Reports</Link>
          <Link to="/settings" className="text-white hover:text-blue-400">Settings</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
            <SearchBar search={search} setSearch={setSearch} />
            <ExpenseForm onAdd={addExpense} />
            <ExpenseTable expenses={filteredExpenses} />
            </>
          }
          />
          <Route path="/reports" element={<Reports expenses={expenses} />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

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
  </Router>
  );
}

export default App;

