import React, { useEffect, useState } from 'react';
import { useExpenseTrackerContext } from '../../context/Context';
import { rupees } from '../../utils/icons';
import ExpenseItem from '../expenseItem/ExpenseItem';
import ExpenseForm from '../form/ExpenseForm';

const LOCAL_STORAGE_KEY = "expenses";

const Expenses = () => {
  const { addExpense, expenses, deleteExpense, totalExpense } = useExpenseTrackerContext();
 
   // Initialize incomeItems state with data from local storage, if available
   const [expenseItems, setExpenseItems] = useState(() => {
    const localItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localItems ? JSON.parse(localItems) : [];
  });

  
  const handleAddExpense = async (expenseData) => {
    const addedExpense = await addExpense(expenseData);
    
    // Update local storage with the latest income data
    const updatedExpenseItems = [...expenseItems, addedExpense];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedExpenseItems));
  
    // Update the state with the latest income data
    setExpenseItems(updatedExpenseItems);
  };

  const handleDeleteExpense = async (id) => {
    await deleteExpense(id);
    
    // Update local storage with the updated expense list
    const updatedExpenseItems = expenseItems.filter(expense => expense._id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedExpenseItems));

    // Force a re-render by updating the state with a new array reference
    setExpenseItems([...updatedExpenseItems]);
  };

  return (
    <>
      <h1 className=" text-4xl font-bold mt-3">Expenses</h1>
      <h2 className="flex justify-center items-center bg-indigo-400 rounded-xl border-2 border-indigo-500 text-3xl p-5 font-semibold mt-4 mb-2">Total Income: <span className="ml-2"><i className="mr-1 font-semibold">{rupees}</i>{totalExpense()}</span></h2>
      <div className="flex">
        <div className="form">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
        <div className="income">
          {expenseItems && expenseItems.map((expense) => (
            <ExpenseItem
              key={expense._id}
              id={expense._id}
              title={expense.title}
              description={expense.description}
              amount={expense.amount}
              category={expense.category}
              date={expense.date}
              deleteExpense={handleDeleteExpense}
              type={expense.type}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Expenses;