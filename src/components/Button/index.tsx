import React, { ReactNode } from "react";
// import { Link } from "react-router-dom";
import styles from './button.module.css';

interface ButtonProps {
  children?: ReactNode;
  label?: string;
  handleClick?: () => void;
  disabled?: boolean;
  className?: string;
  buttonStyle?: Styles;
  type?: "submit" | "button";
}

type buttonComponentProps = Pick<ButtonProps, "children">

const buttons = {
  'outline': styles.outline,
  'switch': styles.switch,
  'link': styles.link
} 

type Styles = keyof typeof buttons;

const handleStyle = (type: Styles, disabled: boolean) => {
  if (disabled) return styles.disabled;

  return buttons[type]
}

const ButtonContent = ({children}: buttonComponentProps) => {
  return (
    <div className={`w-full h-10 px-4 py-1 flex justify-center items-center gap-2 font-lexend`}>
      {children}
    </div>
  )
}

const Button: React.FC<ButtonProps> = ({
  label,
  children,
  className,
  disabled = false,
  buttonStyle = 'link',
  type = "button",
  handleClick
}) => {

  return (
    <button
      className={`w-full rounded-xl border ${className} ${handleStyle(buttonStyle, disabled)} duration-200`}
      onClick={handleClick}
      type={type}
    >
      <ButtonContent>
      {label}
      {children}
      </ButtonContent>
    </button>
  );
}

export default Button;
