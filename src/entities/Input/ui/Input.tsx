import { FC } from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  handlerChange?: (text: string) => void | undefined;
  value?: string | number;
  name?: string;
  required?: boolean;
}
export const Input: FC<InputProps> = ({
  handlerChange,
  type,
  name,
  required,
  placeholder,
  value,
}) => {
  return (
    <input
      value={value}
      required={required}
      name={name}
      onChange={(e) => {
        if (handlerChange) handlerChange(e.target.value);
      }}
      type={type}
      placeholder={placeholder}
      className='bg-gray border-2 border-gray-2 text-gray-900 text-sm rounded-lg focus:ring-gray-2 focus:border-gray-2 block w-full p-2.5'
    />
  );
};
