import { FC } from 'react';
import { TBody } from './TBody';
import { THeader } from './THeader';
import { TPagination } from './TPagination';
import { useTPagination } from '../lib/useTPagination';
import { ArrayUsers } from '../../../app/types/types';
import { useSortAndFilter } from '../lib/useSortAndFilter';
import { TFormFilter } from './TFormFilter';

export const Table: FC<{ data: ArrayUsers }> = ({ data }) => {
  const { arrData, sortFn, filterFn } = useSortAndFilter(data);
  const { functions, values } = useTPagination(arrData, 10);
  // const [selectedItem, setSelectedItem] = useState({} as IUser);

  return (
    <div className='bg-gray px-4 py-2.5 md:rounded-2xl rounded-none lg:px-8 lg:py-6'>
      <h1 className='text-xl border-b-2 border-gray-2 pb-6'>Моя организация</h1>
      <TFormFilter label='Пользователь' filterFn={filterFn} />
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <THeader sortFn={sortFn} />
        <TBody data={values.currentData} /*handelClick={setSelectedItem}*/ />
      </table>
      <TPagination functions={functions} values={values} />
    </div>
  );
};
