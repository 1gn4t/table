import { Table } from '../../widgets/Table';
import { Spinner } from '../../entities/Spinner';
import { useGetUsersQuery } from '../../app/store/api';
import { Header } from '../../widgets/Header';
import { Drawer } from '../../widgets/Drawer';
import { useState } from 'react';
import { Button } from '../../entities/Button';

const MainPage = () => {
  const { data } = useGetUsersQuery();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className=''>
      <Button handelClick={() => setIsOpen(!isOpen)}>sdfsdf</Button>
      <Header />
      {data ? <Table data={data} /> : <Spinner />}
      <Drawer open={isOpen} setOpen={setIsOpen}>
        asdasdad
      </Drawer>
    </main>
  );
};

export default MainPage;
