import React from 'react';

import Navbar from '@/components/UI/Header/Navbar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="mt-4 flex justify-center">
        <div className="w-full max-w-screen-md px-4">{children}</div>
      </main>
    </div>
  );
}

export default DefaultLayout;
