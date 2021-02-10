import React from 'react';
import useStore from './store';
import BaseLayout from './components/layouts/base-layout';
import Navigations from './navigations/_root';
import Loading from './screens/loading';

export default function App() {
  const isInitialized = useStore((state) => state.isInitialized);

  return (
    <BaseLayout>
      {isInitialized
        ? <Navigations />
        : <Loading />}
    </BaseLayout>
  );
}
