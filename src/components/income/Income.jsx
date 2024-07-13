import React, { useEffect, useState } from 'react';
import { useExpenseTrackerContext } from '../../context/Context';
import Form from '../form/Form';
import IncomeItem from '../incomeItem/IncomeItem';
import { rupees } from '../../utils/icons';

const LOCAL_STORAGE_KEY = "incomes";

const Income = () => {
  const { addIncome, incomes, deleteIncome, totalIncome } = useExpenseTrackerContext();

  // Initialize incomeItems state with data from local storage, if available
  const [incomeItems, setIncomeItems] = useState(() => {
    const localItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localItems ? JSON.parse(localItems) : [];
  });

  const handleAddIncome = async (incomeData) => {
    const addedIncome = await addIncome(incomeData);
    
    // Update local storage with the latest income data
    const updatedIncomeItems = [...incomeItems, addedIncome];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedIncomeItems));
  
    // Update the state with the latest income data
    setIncomeItems(updatedIncomeItems);
  };

  const handleDeleteIncome = async (id) => {
    await deleteIncome(id);
    
    // Update local storage with the updated expense list
    const updatedIncomeItems = incomeItems.filter(income => income._id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedIncomeItems));

    // Force a re-render by updating the state with a new array reference
    setIncomeItems([...updatedIncomeItems]);
  };

  return (
    <>
      <h1 className="text-4xl font-bold mt-3">Incomes</h1>
      <h2 className="flex justify-center items-center bg-indigo-400 rounded-xl border-2 border-indigo-500 text-3xl p-5 font-semibold mt-4 mb-2">
        Total Income: <span className="ml-2"><i className="mr-1 font-semibold">{rupees}</i>{totalIncome()}</span>
      </h2>
      <div className="flex">
        <div className="form">
          <Form onAddIncome={handleAddIncome} />
        </div>
        <div className="income">
          {incomeItems.map((income) => (
            <IncomeItem
              key={income._id}
              id={income._id}
              title={income.title}
              description={income.description}
              amount={income.amount}
              category={income.category}
              date={income.date}
              deleteItem={handleDeleteIncome}
              type={income.type}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Income;