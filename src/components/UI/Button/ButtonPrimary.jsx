/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import React from 'react';

function ButtonPrimary({ children, className, onClick, ...props }) {
  const cx = classNames([
    'bg-red-500 py-1.5 px-4 rounded-lg text-white hover:bg-red-600',
    className
  ]);

  return (
    <button type="button" onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}

export default ButtonPrimary;
