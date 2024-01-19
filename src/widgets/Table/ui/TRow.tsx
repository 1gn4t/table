import { FC } from 'react';
import { IUser } from '../../../app/types/types';
import { IPen } from '../../../entities/Icons';
import { IBasket } from '../../../entities/Icons';

export const TRow: FC<{
  user: IUser;
  handelClick: (user: IUser) => void;
}> = ({ user, handelClick }) => {
  const {
    email,
    name,
    role,
    subscription: { tokens, plan },
  } = user;
  return (
    <tr
      className='bg-white border-b-2 border-gray-2'
      onClick={() => handelClick(user)}
    >
      <td className='px-3 py-3 text-center'>{email}</td>
      <td className='px-3 py-4 text-center'>{name}</td>
      <td className='px-3 py-4 text-center hidden md:table-cell'>{role}</td>
      <td className='px-3 py-4 text-center hidden sm:table-cell'>
        {plan.type}
      </td>
      <td className='px-3 py-4 text-center hidden xs:table-cell'>{`${tokens} TKN`}</td>
      <td className='px-3 py-4 text-center flex justify-center hidden sm:flex'>
        <IPen />
        <IBasket />
      </td>
    </tr>
  );
};
