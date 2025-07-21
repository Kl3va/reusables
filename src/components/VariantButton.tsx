import React from "react";
// import { twMerge } from 'tailwind-merge'

type ButtonVariant = "primary" | "danger" | "disabling" | "tertiary";

interface VariantButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  buttonType: "submit" | "reset" | "button" | undefined;
}

const VariantButton = ({
  variant = "primary",
  buttonType = "submit",
  children,
  className,
  ...props
}: VariantButtonProps) => {
  // Base styles that apply to all buttons
  const baseStyles =
    "grid px-4 py-3 rounded-[60px] font-medium cursor-pointer transition-all duration-200 focus:outline-none text-[10px] min-lg:text-sm hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed";

  // Variant-specific styles
  const variantStyles = {
    primary: "bg-accent-100 text-white",
    tertiary: "text-accent-100 bg-bg-400",
    danger: "bg-danger-100 text-white",
    disabling: "text-danger-100 bg-danger-200",
  };

  // Merge base styles, variant styles, and any custom className
  // const mergedClassName = twMerge(baseStyles, variantStyles[variant], className) //UNCOMMENT when using tailwind-merge
  const mergedClassName = `${baseStyles} ${variantStyles[variant]} ${
    className || ""
  }`; // Use this line if not using tailwind-merge

  return (
    <button type={buttonType} className={mergedClassName} {...props}>
      {children}
    </button>
  );
};

export default VariantButton;
