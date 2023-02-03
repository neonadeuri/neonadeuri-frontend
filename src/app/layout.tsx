/* eslint-disable @next/next/no-css-tags */
import 'styles/globals.css';
import React from 'react';
import Providers from 'lib/providers';
import Header from 'components/templates/Header';

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
          href="/fontawesome-free-6.2.1-web/css/all.min.css"
        />
        <link rel="stylesheet" href="/styles/dist.css" />
      </head>
      <body className="h-screen w-screen overflow-hidden whitespace-nowrap bg-transparent">
        <Providers>
          <Header />
          <main className="h-full w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
