import { useState } from 'react';
import { ArrayUsers } from '../../../app/types/types';

// const STEP = 10;

export const useTPagination = (data: ArrayUsers, STEP: number) => {
  const [num, setNum] = useState(1);

  const total = Math.ceil(data.length / STEP);
  const end = num * STEP;
  const start = end - STEP;
  const currentData = data.slice(start, end);

  const currentSlicePage = () => {
    const pageNumber = [];

    for (let i = 1; i <= total; i++) {
      pageNumber.push(i);
    }

    if (num < 3) return pageNumber.slice(0, 4);
    if (num > pageNumber.length - 3) return pageNumber.slice(-4);
    return pageNumber.slice(num - 3, num + 1);
  };

  const next = () => {
    if (end >= data.length) return;
    setNum(num + 1);
  };

  const prev = () => {
    if (start <= 0) return;
    setNum(num - 1);
  };

  const changePage = (num: number) => {
    setNum(num);
  };

  return {
    functions: {
      currentSlicePage,
      next,
      prev,
      changePage,
    },
    values: {
      currentData,
      num,
      total,
    },
  };
};

/*
const STEP = 10;

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [newData, setNewData] = useState(data.slice(start, end));

  const amountSlice = Math.ceil(data.length / STEP);

  const next = () => {
    console.log(start, end, amountSlice);
    if (end < data.length) {
      setStart(start + STEP);
      setEnd(end + STEP);
      setNewData(data.slice(start, end));
    }
  };

  const prev = () => {
    console.log(start, end, amountSlice);
    if (start > 0) {
      setStart(start - STEP);
      setEnd(end - STEP);
      setNewData(data.slice(start, end));
    }
  };
*/
