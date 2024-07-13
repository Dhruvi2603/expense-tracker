import React from 'react';
import { calender, comment, rupees, freelance, trash, book, food, circle, medical, clothing, tv } from '../../utils/icons';
import Button from '../button/Button';
import { dateFormat } from '../../utils/DateFormate';



const ExpenseItem = ({ id, title, amount, date, category, description, type, deleteExpense }) => {
  
  const handleDelete = () => {
    deleteExpense(id);
  };
  

  const expenseCategoryIcon = () => {
    switch (category) {
      case 'education':
        return book;
      case 'groceries':
        return food;
      case 'subscriptions':
        return tv;
      case 'takeaway':
        return circle;
      case 'health':
        return medical;
      case 'clothing':
        return clothing;
      case 'travelling':
        return freelance  
      case 'other':
        return circle;
      default:
        return '';
    }
  };

  return (
    <div className="bg-indigo-400 border-2 border-indigo-500 rounded-xl p-1 ml-3 mb-2 mt-1 flex items-center gap-4 min-w-full">
      <div className="icon w-20 h-20 rounded-xl flex items-center justify-center">
        <i style={{ fontSize: '2.6rem' }}>{expenseCategoryIcon()}</i>
      </div>
      <div className="content flex-1 flex flex-col">
        <div className="flex">
          <div className="indicator-dot w-2 h-2 bg-black rounded-full mr-2 mt-3"></div>
          <h5 className="text-lg relative mb-1">{title}</h5>
        </div>
        <div className="inner-content flex justify-between items-center px-1">
          <div className="text flex items-center gap-6">
            <p className="items-center gap-2 opacity-80 min-w-14">{rupees} {amount}</p>
            <p className="flex items-center gap-2 opacity-80">{calender} {dateFormat(date).toString()}</p>
            <p className="flex items-center gap-2 opacity-80 min-w-96">
            <i className='mt-1 pl-2'>{comment}</i>
              {description}
            </p>
          </div>
          <div className="btn">
            <Button icon={trash} className="text-black font-bold py-2 px-4 rounded-full text-lg pl-8 ml-1" onClick={() => handleDelete(id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
