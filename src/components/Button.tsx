import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

/** Framer Motion redéfinit certains handlers (gestes, animations) — incompatibles avec le DOM. */
type ConflictingMotionButtonKeys =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingMotionButtonKeys> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      icon,
      iconPosition = "left",
      isLoading = false,
      className = "",
      disabled,
      style,
      ...rest
    },
    ref
  ) => {
    const baseStyles =
      "font-poppins font-700 rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer select-none";

    const sizeStyles = {
      sm: "text-xs px-4 py-1.5 tracking-wide",
      md: "text-sm px-6 py-2.5 tracking-wide",
      lg: "text-base px-8 py-3.5 tracking-wide",
    };

    const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
      primary: {
        backgroundColor: "var(--color-primary)",
        color: "var(--color-dark)",
        fontWeight: 700,
        boxShadow: "0 2px 12px rgba(var(--color-primary-rgb), 0.3)",
        border: "2px solid transparent",
      },
      secondary: {
        backgroundColor: "var(--color-secondary)",
        color: "var(--color-light)",
        fontWeight: 700,
        boxShadow: "0 2px 12px rgba(var(--color-secondary-rgb, 130, 140, 250), 0.3)",
        border: "2px solid transparent",
      },
      outline: {
        backgroundColor: "transparent",
        color: "var(--color-primary)",
        fontWeight: 700,
        border: "2px solid var(--color-primary)",
      },
      ghost: {
        backgroundColor: "transparent",
        color: "var(--color-primary)",
        fontWeight: 600,
        border: "2px solid transparent",
      },
    };

    const widthStyles = fullWidth ? "w-full" : "";

    const disabledStyles =
      disabled || isLoading
        ? "opacity-50 cursor-not-allowed pointer-events-none"
        : "";

    const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`;

    const MotionButton = motion.button;

    return (
      <MotionButton
        ref={ref}
        className={buttonStyles}
        disabled={disabled || isLoading}
        style={{ ...variantStyles[variant], ...style }}
        whileHover={
          disabled || isLoading
            ? undefined
            : {
                scale: 1.03,
                y: -1,
                boxShadow:
                  variant === "primary"
                    ? "0 6px 24px rgba(var(--color-primary-rgb), 0.4)"
                    : variant === "secondary"
                    ? "0 6px 24px rgba(var(--color-secondary-rgb, 130, 140, 250), 0.4)"
                    : "none",
              }
        }
        whileTap={disabled || isLoading ? undefined : { scale: 0.97 }}
        {...rest}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
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
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {icon && iconPosition === "left" && !isLoading && (
          <span className="flex-shrink-0">{icon}</span>
        )}

        <span>{children}</span>

        {icon && iconPosition === "right" && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </MotionButton>
    );
  }
);

Button.displayName = "Button";
