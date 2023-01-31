'use client';

import ReactHotToastProvider from './ReactHotToastProvider';
import ReactQueryProvider from './ReactQueryProvider';
import RecoilProvider from './RecoilProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <RecoilProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </RecoilProvider>
      <ReactHotToastProvider />
    </>
  );
};
export default Providers;
