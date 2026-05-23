import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void) | any;
}

export function Button({ variant = 'primary', children, className = '', type = 'button', ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-[0.08em] font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-gradient-cta text-white shadow-cta hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(232,117,32,0.6)] rounded-[4px] px-8 py-3.5 text-[15px]",
    secondary: "border-[1.5px] border-accent/60 text-accent hover:bg-accent/10 rounded-[4px] px-8 py-3.5 text-[15px]",
    ghost: "text-steel hover:text-white underline-offset-[3px] hover:underline px-4 py-2 text-[15px]"
  };

  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
