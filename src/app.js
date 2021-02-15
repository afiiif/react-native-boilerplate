import React from 'react';
import * as Sentry from '@sentry/react-native';
import useStore from './store';
import BaseLayout from './components/layouts/base-layout';
import Navigations from './navigations/_root';
import Loading from './screens/loading';
import { SENTRY_DSN } from './config';

Sentry.init({
  dsn: SENTRY_DSN,
});

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
