import React, { ReactNode } from 'react';

interface PageLayoutProps {
    children: ReactNode;
    className?: string;
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
    return (
        <div
            className={`z-10 m-auto w-60 sm:w-6/12 font-lexend flex min-h-screen flex-col bg-[#FDFDFC] text-[#1b1b18] lg:p-8 dark:bg-[#0a0a0a] ${className}`}
        >
            {children}
        </div>
    );
}