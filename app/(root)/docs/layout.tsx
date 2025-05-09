import React from 'react';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-lime-950/30 to-black flex">
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
} 