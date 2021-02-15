import React from 'react';
import { LogBox } from 'react-native';
import * as Sentry from '@sentry/react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import useStore from './store';
import BaseLayout from './components/layouts/base-layout';
import Navigations from './navigations/_root';
import Loading from './screens/loading';
import { SENTRY_DSN } from './config';

// Sentry
LogBox.ignoreLogs(['Require cycle:']); // https://github.com/getsentry/sentry-react-native/issues/479
if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
  });
}

// React Query
LogBox.ignoreLogs(['Setting a timer']); // https://github.com/tannerlinsley/react-query/discussions/356
const queryClient = new QueryClient();

export default function App() {
  const isInitialized = useStore((state) => state.isInitialized);

  return (
    <QueryClientProvider client={queryClient}>
      <BaseLayout>
        {isInitialized
          ? <Navigations />
          : <Loading />}
      </BaseLayout>
    </QueryClientProvider>
  );
}
