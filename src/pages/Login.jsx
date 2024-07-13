import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    // You can perform login logic here, such as sending the data to the server for authentication
    // If login is successful, redirect user to the dashboard page
    const userId = data.username; // Assuming username is unique and serves as the user ID
    localStorage.setItem('userId', userId);
    localStorage.setItem('incomes', JSON.stringify([])); // Initialize empty income array for the user
    localStorage.setItem('expenses', JSON.stringify([])); // Initialize empty expense array for the user
    navigate('/Home');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 h-1/2 border-solid border-2 rounded-2xl border-indigo-500 justify-center items-center bg-indigo-300">
        <h2 className="text-center text-3xl font-bold p-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 p-4 items-center">
          {/* Register input fields with react-hook-form */}
          <input
            type="text"
            placeholder="Enter your username"
            {...register('username', { required: true })}
            className="placeholder-slate-300 bg-indigo-400 p-3 rounded-2xl w-full"
          />
          {errors.username && <span className="text-red-500">Username is required</span>}
          
          <input
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: true })}
            className="placeholder-slate-300 bg-indigo-400 p-3 rounded-2xl w-full"
          />
          {errors.password && <span className="text-red-500">Password is required</span>}
          
          <button type="submit" className="bg-indigo-400 text-white p-3 rounded-2xl cursor-pointer hover:bg-indigo-600 font-medium w-full">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
