import { FC, useState } from 'react';
import { IArrow } from '../../../entities/Icons';

interface ITHeaderProps {
  sortFn: (sort: string) => void;
}

export const THeader: FC<ITHeaderProps> = ({ sortFn }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <thead className='text-sm text-gray-light-2 bg-dark'>
      <tr>
        <th scope='col' className='px-3 py-3'>
          <div className='flex justify-center items-center'>Email</div>
        </th>
        <th scope='col' className='px-3 py-3'>
          <div className='flex justify-center items-center'>Имя</div>
        </th>
        <th scope='col' className='px-3 py-3 hidden md:table-cell'>
          <div className='flex justify-center items-center'>Роль</div>
        </th>
        <th scope='col' className='px-3 py-3 hidden sm:table-cell'>
          <div className='flex justify-center items-center'>Подписка</div>
        </th>
        <th scope='col' className='px-3 py-3 hidden xs:table-cell'>
          <div
            className='flex justify-center items-center'
            onClick={() => {
              sortFn('subscription.tokens');
              setToggle(!toggle);
            }}
          >
            Токены
            <IArrow rotate={toggle ? 'up' : 'down'} />
          </div>
        </th>
        <th scope='col' className='px-3 py-3 hidden sm:table-cell'>
          <div className='flex justify-center items-center'>Действия</div>
        </th>
      </tr>
    </thead>
  );
};
