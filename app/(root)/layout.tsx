import React from "react";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home | YX Combinator',
  description: 'Find out the best startups in the world',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-white dark:bg-gray-800 border-b">
        <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">YX Combinator</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">Startups</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto min-h-screen max-w-[1400px] px-4 sm:px-6 md:px-8 py-10">
        {children}
      </main>
    </>
  );
}
