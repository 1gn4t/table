import { FC } from 'react';

type Rotate = 'up' | 'right' | 'down' | 'left';
export const IArrow: FC<{ rotate: Rotate }> = ({ rotate }) => {
  const configRotate = {
    down: 0,
    left: 90,
    up: 180,
    right: 270,
  };

  return (
    <div className='p-1.5 min-w-[20px]'>
      <img
        className={`rotate-${configRotate[rotate]}`}
        src='/public/arrow.svg'
        alt='Сумка'
        width='9'
        height='7'
      />
    </div>
  );
};
