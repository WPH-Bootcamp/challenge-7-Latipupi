import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  type = "button",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  let variantStyle = "";
  if (variant === "primary") {
    variantStyle =
      "bg-primary text-white hover:bg-orange-700 focus:ring-orange-500";
  } else if (variant === "secondary") {
    variantStyle =
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400";
  } else if (variant === "danger") {
    variantStyle =
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500";
  } else if (variant === "outline") {
    variantStyle =
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400";
  } else if (variant === "icon") {
        variantStyle =  "p-2 rounded-lg focus:ring-0 focus:ring-offset-0"
  }

  let sizeStyle = "";
  if (size === "sm") {
    sizeStyle = "px-3 py-1.5 text-sm";
  } else if (size === "md") {
    sizeStyle = "px-4 py-2 text-sm";
  } else if (size === "lg") {
    sizeStyle = "px-6 py-3 text-base";
  }

  const disabledStyle =
    disabled || loading ? "opacity-60 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${disabledStyle} ${className}`}
      {...props}
    >
      {loading && (
        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}
      {children}
    </button>
  );
};

export default Button;
