import { IBag } from '../../../entities/Icons';
import { UserInfo } from '../../../entities/UserInfo';

export const Header = () => {
  return (
    <>
      <div className='mx-4 my-6 md:mx-0 md:my-0 md:mb-7'>
        <nav className='bg-gray px-4 py-2.5 rounded-2xl lg:px-6 lg:py-3.5'>
          <div className='flex justify-between items-center mx-auto max-w-screen-xl'>
            <div className='w-full sm:w-auto flex gap-10 sm:gap-16 justify-between items-center'>
              <span className='text-xl'>BitTest</span>
              <span className='flex items-center gap-2.5 text-sm'>
                <IBag></IBag>Moя организация
              </span>
            </div>
            <UserInfo status='Администратор' info='Вы авторизованы'></UserInfo>
          </div>
        </nav>
      </div>
    </>
  );
};
