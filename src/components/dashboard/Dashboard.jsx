import React from 'react'
import Chart from '../chart/Chart'
import { rupees } from '../../utils/icons'
import { useExpenseTrackerContext } from '../../context/Context'
import History from '../history/History'


const Dashboard = () => {

  const {totalExpense, totalIncome, totalBalance, incomes, expenses} = useExpenseTrackerContext()

  return (
    <div>
      <h1 className="text-4xl font-bold mt-2 mb-1">All Transactoins</h1>
      <div className="start grid grid-cols-5 gap-8">
        <div className="chart col-span-3 h-96 ">
          <Chart />
          <div className="amount grid grid-cols-4 gap-4 mt-3">
            <div className="income col-span-2 bg-slate-300 border-2 border-solid border-indigo-500 rounded-2xl p-3 justify-center items-center flex flex-col">
              <h2 className="text-xl font-medium mb-1">Total Income</h2>
              <p className="text-3xl font-semibold">
                {rupees} {totalIncome()}
              </p>
            </div>
            <div className="expense col-span-2 bg-slate-300 border-2 border-solid border-indigo-500 rounded-2xl p-3 justify-center items-center flex flex-col">
              <h2  className="text-xl font-medium mb-1">Total Expense</h2>
              <p className="text-3xl font-semibold">
                {rupees} {totalExpense()}
              </p>
            </div>
            <div className="balance bg-slate-300 border-2 border-solid border-indigo-500 rounded-2xl p-3 col-start-2 col-end-4 flex flex-col justify-center items-center">
              <h2  className="text-xl font-medium mb-1">Total Balance</h2>
              <p className="text-3xl font-semibold  text-green-500">
                {rupees} {totalBalance()}
              </p>
            </div>
          </div>
        </div>
        <div className="history col-start-4 col-end-6 mr-1">
          <History />
          <h2 className="salary-item text-lg font-medium m-4 flex items-center justify-between">Min <span className="text-xl">Income</span> Max</h2>
          <div className="salary-item bg-slate-300 border-2 border-solid border-indigo-500 p-3 rounded-xl flex justify-between items-center">
            <p className="font-medium">
              {Math.min(...incomes.map(item => item.amount))}
            </p>
            <p className="font-medium">
              {Math.max(...incomes.map(item => item.amount))}
            </p>
          </div>
          <h2 className="expense-item text-lg font-medium  m-4 flex items-center justify-between">Min <span>Expense</span> Max</h2>
          <div className="expense-item  bg-slate-300 border-2 border-solid border-indigo-500 p-3 rounded-xl flex justify-between items-center">
            <p className="font-medium">
              {Math.min(...expenses.map(item => item.amount))}
            </p>
            <p className="font-medium">
              {Math.max(...expenses.map(item => item.amount))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
