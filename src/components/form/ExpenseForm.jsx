import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from '../button/Button';
import { plus } from '../../utils/icons';

const ExpenseForm = ({ onAddExpense }) => {
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: null, // Change the initial state of date to null
    category: '',
    description: '',
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting income:", inputState);
    await onAddExpense(inputState);
    console.log("Expense added successfully");
    setInputState({
      title: '',
      amount: '',
      date: null, // Reset date to null after submission
      category: '',
      description: '',
    });
    console.log("Form cleared"); // Log that the form is clear
  };

  const isDisabled = !title || !amount || !date || !category || !description;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input className="placeholder-slate-300 w-80 p-2 m-1 rounded-xl outline-none bg-indigo-400" type="text" value={title} name="title" placeholder="Enter title" onChange={handleInput('title')} />
        </div>
        <div className="input">
          <input className="placeholder-slate-300 w-80 p-2 m-1 rounded-xl outline-none bg-indigo-400" type="text" value={amount} name="amount" placeholder="Enter amount" onChange={handleInput('amount')} />
        </div>
        <div className="input">
          <ReactDatePicker
            className="placeholder-slate-300 w-80 p-2 m-1 rounded-xl outline-none bg-indigo-400"
            id="date"
            placeholderText="Enter date"
            selected={date}
            onChange={(date) => setInputState({ ...inputState, date })}
           dateFormat="dd/MM/yyyy" // Format the date as dd/mm/yyyy
          />
        </div>
        <div className="selects input">
          <select className="text-slate-300 w-80 p-2 m-1 rounded-xl outline-none bg-indigo-400" required value={category} name="category" id="category" onChange={handleInput('category')}>
            <option className="text-black" value="" disabled>Select Option</option>
            <option className="text-black" value="education">Education</option>
            <option className="text-black" value="groceries">Groceries</option>
            <option className="text-black" value="subscriptions">Subscriptions</option>
            <option className="text-black" value="takeaway">Takeaway</option>
            <option className="text-black" value="health">Health</option>
            <option className="text-black" value="clothing">Clothing</option>
            <option className="text-black" value="travelling">Travelling</option>
            <option className="text-black" value="other">Other</option>
          </select>
        </div>
        <div className="input">
          <textarea className="placeholder-slate-300 w-80 p-2 m-1 rounded-xl outline-none bg-indigo-400" value={description} name="description" placeholder="Enter description" id='description' cols="30" rows="4" onChange={handleInput('description')}></textarea>
        </div>
        <div className="btn">
        <Button name={'Add Income'} icon={plus} className={`w-80 bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-xl pl-28 ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`} disabled={isDisabled} onClick={handleSubmit} />
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;