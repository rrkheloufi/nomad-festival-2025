import { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      icon,
      iconPosition = 'left',
      isLoading = false,
      className = '',
      disabled,
    },
    ref
  ) => {
    const { themeMode } = useTheme();
    
    // Base styles
    const baseStyles = 'font-brixton rounded-lg transition-all duration-300 flex items-center justify-center';
    
    // Size styles
    const sizeStyles = {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-5 py-2.5',
      lg: 'text-lg px-6 py-3',
    };
    
    // Variant styles with theme-based text color
    const getVariantStyles = () => {
      const textColor = themeMode === 'dark' ? 'text-dark' : 'text-light';
      
      switch (variant) {
        case 'primary':
          return `bg-primary ${textColor} hover:brightness-110 active:brightness-90 
                 shadow-md hover:shadow-lg active:shadow-sm`;
        case 'secondary':
          return `bg-secondary ${textColor} hover:brightness-110 active:brightness-90 
                 shadow-md hover:shadow-lg active:shadow-sm`;
        case 'outline':
          return `border-2 border-primary text-primary hover:bg-primary/10 
                 active:bg-primary/20`;
        case 'ghost':
          return `text-primary hover:bg-primary/10 active:bg-primary/20`;
        default:
          return '';
      }
    };
    
    // Width styles
    const widthStyles = fullWidth ? 'w-full' : '';
    
    // Disabled styles
    const disabledStyles = (disabled || isLoading) 
      ? 'opacity-60 cursor-not-allowed pointer-events-none' 
      : '';
    
    // Combine all styles
    const buttonStyles = `
      ${baseStyles} 
      ${sizeStyles[size]} 
      ${getVariantStyles()} 
      ${widthStyles} 
      ${disabledStyles} 
      ${className}
    `;

    const MotionButton = motion.button;

    return (
      <MotionButton
        ref={ref}
        className={buttonStyles}
        disabled={disabled || isLoading}
        whileHover={disabled || isLoading ? undefined : { scale: 1.03 }}
        whileTap={disabled || isLoading ? undefined : { scale: 0.97 }}
      >
        {isLoading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        
        {icon && iconPosition === 'left' && !isLoading && (
          <span className="mr-2">{icon}</span>
        )}
        
        {children}
        
        {icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </MotionButton>
    );
  }
);

Button.displayName = 'Button';