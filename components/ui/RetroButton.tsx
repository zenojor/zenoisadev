import React from 'react';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  label: string;
  icon?: React.ReactNode;
}

export const RetroButton: React.FC<RetroButtonProps> = ({ 
  variant = 'primary', 
  label, 
  icon, 
  className = '',
  ...props 
}) => {
  // Base structural styles
  const baseStyle = "group relative inline-flex items-center justify-center overflow-hidden px-8 py-4 font-bold uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-zeno-yellow focus:ring-offset-2 focus:ring-offset-zeno-blue";
  
  // Variant configurations
  const variantStyles = {
    primary: {
      initial: "bg-zeno-yellow text-zeno-blue border-2 border-zeno-white shadow-[4px_4px_0px_0px_#FFFFFF] hover:shadow-[2px_2px_0px_0px_#FFFFFF] hover:translate-x-[2px] hover:translate-y-[2px]",
      hoverFill: "bg-white",
      textColorHover: "text-zeno-blue", // Text stays blue, bg becomes white
      iconColor: "text-zeno-blue"
    },
    secondary: {
      initial: "bg-zeno-blue text-zeno-yellow border-2 border-zeno-yellow shadow-[4px_4px_0px_0px_#F0D642] hover:shadow-[2px_2px_0px_0px_#F0D642] hover:translate-x-[2px] hover:translate-y-[2px]",
      hoverFill: "bg-zeno-yellow",
      textColorHover: "group-hover:text-zeno-blue", // Text turns blue, bg becomes yellow
      iconColor: "text-zeno-yellow group-hover:text-zeno-blue"
    }
  };

  const currentVariant = variantStyles[variant];

  return (
    <button 
      className={`${baseStyle} ${currentVariant.initial} ${className}`} 
      {...props}
    >
      {/* Sliding Background Layer */}
      <span className={`absolute inset-0 w-full h-full transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 ${currentVariant.hoverFill}`}></span>
      
      {/* Content Layer (Z-Index to sit on top of background) */}
      <span className={`relative z-10 flex items-center gap-3 transition-colors duration-300 ${currentVariant.textColorHover}`}>
        {icon && <span className={`${currentVariant.iconColor} transition-colors duration-300`}>{icon}</span>}
        {label}
      </span>
    </button>
  );
};