export type ModeColor = 'blue' | 'red' | 'green' | 'pagination';

export const choseClass: (mode?: ModeColor) => string = (mode = 'blue') => {
  switch (mode) {
    case 'pagination':
      return 'flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-gray';
    case 'blue':
      return 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ';
    case 'red':
      return 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center';
    case 'green':
      return 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center';
  }
};
