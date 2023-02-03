import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      <div className="h-full max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
