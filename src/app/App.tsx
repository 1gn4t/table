import { Suspense } from 'react';
import { MainPage } from '../page';
import { Spinner } from '../entities/Spinner/ui/Spinner';

export default function Stopwatch() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <MainPage />
      </Suspense>
    </div>
  );
}
