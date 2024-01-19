import { TRow } from './TRow';
import { IUser } from '../../../app/types/types';
import { FC } from 'react';

export const TBody: FC<{
  data: IUser[];
  handelClick?: (user: IUser) => void;
}> = ({ data, handelClick }) => {
  return (
    <tbody>
      {data.map((user: IUser) => (
        <TRow
          user={user}
          key={user.id}
          handelClick={() => handelClick?.(user)}
        />
      ))}
    </tbody>
  );
};
