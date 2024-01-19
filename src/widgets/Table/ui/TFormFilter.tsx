import { FC } from 'react';
import { Input } from '../../../entities/Input/ui/Input';
import { IUser } from '../../../app/types/types';

interface FormFilterProps {
  label: string;
  filterFn: (option: keyof IUser, text: string) => void;
}

export const TFormFilter: FC<FormFilterProps> = ({ label, filterFn }) => {
  const handlerChange = (text: string) => filterFn('name', text);

  return (
    <form className='py-6'>
      <label className='flex flex-col gap-6 text-xl'>
        {label}
        <Input placeholder='Поиск' type='text' handlerChange={handlerChange} />
      </label>
    </form>
  );
};
