import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="w-full bg-white dark:bg-gray-600 border-b">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            YX Combinator | Dashboard Navigator
          </h1>
          {/* Placeholder for Navigation */}
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Startups
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto min-h-screen max-w-[1400px] px-4 sm:px-6 md:px-8 py-10">
        {children}
      </main>
    </>
  );
}
