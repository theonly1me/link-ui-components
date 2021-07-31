import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      className={`btn ${
        variant === 'primary' ? 'btn-primary' : 'btn-secondary'
      } `}
    >
      {children}
    </button>
  );
};
