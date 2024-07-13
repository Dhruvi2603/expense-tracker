import React, { createContext, useContext, useState } from 'react';

const EXPENSES_STORAGE_KEY = "expenses";
const INCOMES_STORAGE_KEY = "incomes";


// Create a context object
const ExpenseTrackerContext = createContext();

// Create a custom hook to consume the ExpenseTrackerContext
export const useExpenseTrackerContext = () => useContext(ExpenseTrackerContext);

// Create the ExpenseTrackerProvider component to provide the context to its children
export const Provider = ({ children }) => {
 
  // State to manage the list of incomes and expenses, initialize with data from local storage
  const [incomes, setIncomes] = useState(() => {
    const storedIncomes = JSON.parse(localStorage.getItem(INCOMES_STORAGE_KEY));
    return storedIncomes ? storedIncomes : [];
  });

  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = JSON.parse(localStorage.getItem(EXPENSES_STORAGE_KEY));
    return storedExpenses ? storedExpenses : [];
  });


  // Function to add an income
  const addIncome = (incomeData) => {
    // Logic to add an income
    const addedIncome = { ...incomeData, _id: Math.random().toString(), type: 'income' };
    setIncomes([...incomes, addedIncome]);
    return addedIncome;
  };

  // Function to add an expense
  const addExpense = (expenseData) => {
    // Logic to add an income
    const addedExpense = { ...expenseData, _id: Math.random().toString(), type: 'expense'  };
    setExpenses([...expenses, addedExpense]);
    return addedExpense;
  };

  // Function to delete an income
  const deleteIncome = (id) => {
    // Filter out the expense with the provided id
    const updatedIncomes = incomes.filter(income => income._id !== id);
  
    // Update the state with the filtered list of expenses
    setIncomes(updatedIncomes);
  
    // Update local storage with the updated list of expenses
    localStorage.setItem(INCOMES_STORAGE_KEY, JSON.stringify(updatedIncomes));
  };

  //function to delete expense
  const deleteExpense = (id) => {
    // Filter out the expense with the provided id
    const updatedExpenses = expenses.filter(expense => expense._id !== id);
  
    // Update the state with the filtered list of expenses
    setExpenses(updatedExpenses);
  
    // Update local storage with the updated list of expenses
    localStorage.setItem(EXPENSES_STORAGE_KEY, JSON.stringify(updatedExpenses));
  };



  const totalIncome = () => {
    let total = 0;
    incomes.forEach((income) => {
      total += parseFloat(income.amount); // Convert to float before summing
    });
    return total;
  };

  const totalExpense = () => {
    let total = 0;
    expenses.forEach((expense) => {
      total += parseFloat(expense.amount); // Convert to float before summing
    });
    return total;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpense()
  }  

const transactionHistory = () => {
  const history = [...incomes, ...expenses]
  history.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
  return history.slice(0, 4)
}

  // Value object to be passed to consumers of the context
  const contextValue = {
    incomes,
    addIncome,
    deleteIncome,
    totalIncome,
    expenses,
    addExpense,
    deleteExpense,
    totalExpense,
    totalBalance,
    transactionHistory
  };

  // Provide the context value to its children
  return (
    <ExpenseTrackerContext.Provider value={contextValue}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};