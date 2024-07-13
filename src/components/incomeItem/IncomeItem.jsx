import React from 'react';
import { bitcoin, calender, card, comment, rupees, money, freelance, piggy, stocks, trash, users, youtube } from '../../utils/icons';
import Button from '../button/Button';
import { dateFormat } from '../../utils/DateFormate';


const IncomeItem = ({ id, title, amount, date, category, description, type, deleteItem }) => {
  

  

  const categoryIcon = () => {
    switch (category) {
      case 'salary':
        return money;
      case 'freelancing':
        return freelance;
      case 'investments':
        return stocks;
      case 'stocks':
        return users;
      case 'bitcoin':
        return bitcoin;
      case 'bank':
        return card;
      case 'youtube':
        return youtube;
      case 'other':
        return piggy;
      default:
        return '';
    }
  };

  return (
    <div className="bg-indigo-400 border-2 border-indigo-500 rounded-xl p-1 ml-2 mb-4 mt-1 flex items-center gap-4 w-full flex-1">
      <div className="icon w-20 h-20 rounded-xl flex items-center justify-center">
        <i style={{ fontSize: '2.6rem' }}>{categoryIcon()}</i>
      </div>
      <div className="content flex-1 flex flex-col">
        <div className="flex">
          <div className="indicator-dot w-2 h-2 bg-black rounded-full mr-2 mt-3"></div>
          <h5 className="text-lg relative mb-1">{title}</h5>
        </div>
        <div className="inner-content flex justify-between items-center px-2">
          <div className="text flex items-center gap-6">
            <p className="items-center gap-2 opacity-80 min-w-14">{rupees} {amount}</p>
            <p className="flex items-center gap-2 opacity-80">{calender} {dateFormat(date).toString()}</p>
            <p className="flex items-center gap-2 opacity-80 min-w-96">
            <i className='mt-1'>{comment}</i>
              {description}
            </p>
          </div>
          <div className="btn">
            <Button icon={trash} className="text-black font-bold py-2 px-4 rounded-full text-lg pl-8 ml-1" onClick={() => deleteItem(id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeItem;
