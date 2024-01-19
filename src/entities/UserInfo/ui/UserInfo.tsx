import { FC } from 'react';
import { IUser } from '../../Icons';

export const UserInfo: FC<{ status: string; info: string }> = ({
  status,
  info,
}) => {
  return (
    <div className='hidden sm:flex py-2 px-3.5 rounded gap-4 justify-between items-center hover:outline hover:outline-1 hover:outline-gray-light'>
      <IUser></IUser>
      <div className='flex flex-wrap flex-col justify-between items-center'>
        <span className='text-xs text-gray-light'>{info}</span>
        <span className='text-sm'>{status}</span>
      </div>
    </div>
  );
};
