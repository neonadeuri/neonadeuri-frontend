import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      <div className="h-full px-6 py-4">{children}</div>
    </div>
  );
}
