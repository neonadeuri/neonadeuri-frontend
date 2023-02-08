/* eslint-disable @next/next/no-css-tags */
// import 'styles/globals.css';
import React from 'react';
import Providers from 'lib/providers';
import Header from 'components/organism/Header';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../.mocks');
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>달밤 Front</title>
        <link
          rel="stylesheet"
          href="/styles/fontawesome-free-6.2.1-web/css/all.min.css"
        />
        <link rel="stylesheet" href="/styles/dist.css" />
      </head>
      <body className="h-screen w-screen overflow-y-auto overflow-x-hidden whitespace-nowrap bg-transparent">
        <Providers>
          <Header />
          <main className="h-full w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
