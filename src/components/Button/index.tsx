import React, { ReactNode } from "react";
import styles from './button.module.css';

interface ButtonProps {
  children?: ReactNode;
  label?: string;
  handleClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: Styles;
  submit?: boolean;
}

type buttonComponentProps = Pick<ButtonProps, "children">

const buttons = {
  'primary': styles.primary,
  'secondary': styles.secondary,
  'outline': styles.outline
} 

type Styles = keyof typeof buttons;

// const handleStyle = (type: Styles, disabled: boolean) => {
//   if (disabled) return styles.disabled;

//   return buttons[type]
// }

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
  type = 'primary',
  submit = false,
  handleClick
}) => {

  return (
    <button
      className={`w-full max-w-[350px] rounded-xl border ${className} ${/*handleStyle(type, disabled)*/ buttons[type]} duration-200`}
      onClick={handleClick}
      type={submit ? "submit" : "button"}
      disabled={disabled}
    >
      <ButtonContent>
        {label}
      </ButtonContent>
    </button>
  );
}

export default Button;
