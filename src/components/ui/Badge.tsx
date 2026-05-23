import React from 'react';

export function Badge({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`inline-block bg-accent/15 border border-accent/40 text-accent font-display font-medium text-[11px] uppercase tracking-[0.12em] px-3 py-1 rounded-[2px] ${className}`}>
      {children}
    </div>
  );
}
