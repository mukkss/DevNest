import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'outline' | 'solid';
  onClick?: () => void;
}

export const Button = ({ children, className, variant = 'solid', onClick }: ButtonProps) => {
  const baseStyles = 'py-2 px-4 rounded-md text-center transition-all';
  const variantStyles = variant === 'outline' ? 'border-2 border-white text-white hover:hover:bg-[#1a7f6f]' : 'bg-[#20C997] text-white hover:bg-[#1a7f6f]';

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
