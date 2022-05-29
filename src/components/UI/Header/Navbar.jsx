import React from 'react';

function Navbar() {
  return (
    <div className="flex w-full justify-center shadow-lg">
      <div className="flex w-full max-w-screen-md items-center justify-between py-3 px-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500">
            <span className="font-medium text-white">💵</span>
          </div>
          <span className="text-lg font-medium">Expenses Tracker</span>
        </div>
        <div>
          <span>Menu</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
