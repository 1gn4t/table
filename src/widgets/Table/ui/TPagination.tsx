import { FC } from 'react';
import { Button } from '../../../entities/Button';
import { IArrow } from '../../../entities/Icons';

interface IPaginationProps {
  functions: {
    prev: () => void;
    next: () => void;
    changePage: (num: number) => void;
    currentSlicePage: () => number[];
  };
  values: {
    num: number;
    total: number;
  };
}

export const TPagination: FC<IPaginationProps> = ({ functions, values }) => {
  const { num, total } = values;

  const classNames = (currNum: number) => {
    if (currNum === num) {
      return 'flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-blue';
    } else {
      return 'flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-gray';
    }
  };

  return (
    <nav className='flex items-center md:flex-row justify-center pt-4'>
      <div className='inline-flex gap-1 -space-x-px rtl:space-x-reverse text-sm h-8'>
        <Button mode='pagination' handelClick={functions.prev}>
          <IArrow rotate='left'></IArrow>
        </Button>
        {functions.currentSlicePage().map((item) => (
          <Button
            key={item}
            className={classNames(item)}
            handelClick={() => functions.changePage(item)}
          >
            {item}
          </Button>
        ))}
        {num < total - 2 ? (
          <>
            <span className='inline-block align-baseline'>...</span>
            <Button
              mode='pagination'
              handelClick={() => functions.changePage(total)}
            >
              {total}
            </Button>
          </>
        ) : null}
        <Button mode='pagination' handelClick={functions.next}>
          <IArrow rotate='right'></IArrow>
        </Button>
      </div>
    </nav>
  );
};
