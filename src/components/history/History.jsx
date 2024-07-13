import React from 'react';
import { useExpenseTrackerContext } from '../../context/Context';

const History = () => {
  const { transactionHistory } = useExpenseTrackerContext();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Recent History</h2>
      {transactionHistory().map((item) => {
         console.log("Item:", item);
        const { _id, title, amount, type } = item;
        const textColor = type === 'expense' ? 'red' : 'green';
        const sign = type === 'expense' ? '-' : '+';
       
        return (
          <div
            key={_id}
            className="history-item bg-slate-300 border-solid border-2 border-indigo-500 p-4 rounded-2xl flex justify-between items-center"
          >
            <p style={{ color: textColor }}>{title}</p>
            <p style={{ color: textColor }}>{`${sign}${amount}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default History;
