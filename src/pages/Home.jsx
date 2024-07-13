import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Dashboard from '../components/dashboard/Dashboard';
import Income from '../components/income/Income';
import Expenses from '../components/expenses/Expenses';
import { useExpenseTrackerContext } from '../context/Context';


const Home = () => {
  
  const [active, setActive] = useState(1)

  const context = useExpenseTrackerContext()
  

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
       case 4:
        return <Expenses />
      default:
        return <Dashboard />       
    }
  }

  return (
    <>
    <div className="min-h-full flex ">
      {/* Your Dashboard content here */}
      <Navbar active={active} setActive={setActive} />
      <div className="container  bg-indigo-300  min-h-full rounded-xl flex-1 ml-4 p-4">
        {displayData()}
      </div>
    </div>
   
    </>
  );
};

export default Home;
