
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'whatsapp' | 'telegram';
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  href,
  icon
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 active:scale-95 shadow-lg group";
  
  const variants = {
    primary: "bg-brand-purple text-white hover:bg-brand-purple/90 hover:shadow-brand-purple/20",
    outline: "border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white",
    whatsapp: "bg-brand-green text-white hover:bg-brand-green/90",
    telegram: "bg-brand-blue text-white hover:bg-brand-blue/90"
  };

  const Content = (
    <>
      {icon && <span className="w-5 h-5 transition-transform group-hover:scale-110">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {Content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {Content}
    </button>
  );
};

export default Button;
