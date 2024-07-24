import React from 'react'
import Login from './Login';
import DarkModeToggle from './DarkModeToggle';

function Header() {
  
  return (
    <div className=" flex justify-between border-b-2 border-black dark:border-white p-4 mb-4">
      <h1 className="text-5xl dark:text-white">💭</h1>
      <div className=" flex-1 text-center">
        <h1 className="text-5xl dark:text-white">Notes 💭</h1>
      </div>
      <div className='flex-row'>
        <Login />
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Header