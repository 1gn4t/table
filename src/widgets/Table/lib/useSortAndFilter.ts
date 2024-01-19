import { useState } from 'react';
import { ArrayUsers, IUser } from '../../../app/types/types';

export const useSortAndFilter = (data: ArrayUsers) => {
  const [arrData, setArrData] = useState(data);
  const [toggle, setToggle] = useState(false);

  const sortFn = (sort: string) => {
    const getProps = (obj: IUser, path: string) => {
      const keys = path.split('.');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return keys.reduce((acc, key) => acc[key], obj);
    };

    if (!toggle) {
      const sortArray = [...arrData].sort((a, b) => {
        if (getProps(a, sort) > getProps(b, sort)) return 1;
        if (getProps(a, sort) < getProps(b, sort)) return -1;
        return 0;
      });
      setArrData(sortArray);
      setToggle(!toggle);
    } else {
      setArrData(data);
      setToggle(!toggle);
    }
  };

  const filterFn = (option: keyof IUser, text: string | undefined) => {
    if (!text || !option) return setArrData(data);
    const filterArray = data.filter((user) =>
      user[option]?.toString().toLowerCase().includes(text.toLowerCase())
    );
    setArrData(filterArray);
  };

  return { arrData, sortFn, filterFn };
};
