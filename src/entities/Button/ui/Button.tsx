import { FC } from 'react';
import { ModeColor, choseClass } from '../lib/choseClass';

interface ButtonProps {
  children?: string | number | JSX.Element | JSX.Element[];
  mode?: ModeColor;
  handelClick?: () => void | undefined;
  type?: ButtonType;
  className?: string;
}

type ButtonType = 'button' | 'submit';

export const Button: FC<ButtonProps> = ({
  children,
  mode,
  handelClick,
  type,
  className,
}) => {
  const typeChange = (): ButtonType => (type ? type : 'button');

  return (
    <button
      type={typeChange()}
      className={mode ? choseClass(mode) : className}
      onClick={handelClick}
    >
      {children}
    </button>
  );
};
