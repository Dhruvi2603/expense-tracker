import React from 'react';

const Button = ({ name, icon, onClick, className }) => {
  return (
    <button className={`outline-none border-none flex items-center ${className}`} onClick={onClick}>
      {icon}
      {name}
    </button>
  );
};

export default Button;
