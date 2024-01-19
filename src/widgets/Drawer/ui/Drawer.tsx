import React from 'react';
// import { clsx } from 'clsx';

const openClassNames = {
  right: 'translate-x-0',
  left: 'translate-x-0',
  top: 'translate-y-0',
  bottom: 'translate-y-0',
};

const closeClassNames = {
  right: 'translate-x-full',
  left: '-translate-x-full',
  top: '-translate-y-full',
  bottom: 'translate-y-full',
};

const classNames = {
  right: 'inset-y-0 right-0',
  left: 'inset-y-0 left-0',
  top: 'inset-x-0 top-0',
  bottom: 'inset-x-0 bottom-0',
};

export const Drawer = ({ open, setOpen, side = 'right' }) => {
  return (
    <div
      id={`dialog-${side}`}
      className='relative z-10'
      aria-labelledby='slide-over'
      role='dialog'
      aria-modal='true'
      onClick={() => setOpen(!open)}
    >
      <div
        className={
          'fixed inset-0 bg-gray-500 bg-opacity-75 transition-all' + open
            ? 'opacity-100 duration-500 ease-in-out visible'
            : 'opacity-0 duration-500 ease-in-out invisible'
        }
      ></div>
      <div className={open ? 'fixed inset-0 overflow-hidden' : ''}>
        <div className='absolute inset-0 overflow-hidden'>
          <div
            className={'pointer-events-none fixed max-w-full inset-y-0 left-0'}
          >
            <div
              className={
                'pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500' +
                open
                  ? 'translate-x-0'
                  : 'translate-x-full'
              }
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <div className='flex flex-col h-full overflow-y-scroll bg-white p-20 shadow-xl bg-blue-400 rounded-lg'>
                content
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
