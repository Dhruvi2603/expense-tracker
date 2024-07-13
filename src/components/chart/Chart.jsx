import React from 'react'
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useExpenseTrackerContext } from '../../context/Context'
import { dateFormat } from '../../utils/DateFormate'

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)


const Chart = () => {

    const {incomes, expenses} = useExpenseTrackerContext()

const data = {
    labels: incomes.map((inc) => {
        const {date} = inc
        return dateFormat(date)
    }),

    datasets: [
        {
            label: 'Income',
            data: [
                ...incomes.map((income) => {
                    const {amount} = income
                    return amount
                })
            ],
            backgroundColor: 'green',
            tension: .2
        },
        {
            label: 'Expenses',
            data: [
                ...expenses.map((expense) => {
                    const {amount} = expense
                    return amount
                })
            ],
            backgroundColor: 'red',
            tension: .2
        }
    ] 
}


  return (
    <div className=" bg-slate-300 border-2 border-solid border-indigo-500 p-4 rounded-xl h-full w-full">
      <Line data={data}/>
    </div>
  )
}

export default Chart
