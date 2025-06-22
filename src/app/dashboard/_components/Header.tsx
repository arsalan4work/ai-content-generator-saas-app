'use client';

import { Search } from 'lucide-react';
import React from 'react';
import { useUser, UserButton } from '@clerk/nextjs';

export default function Header() {
  const { user, isLoaded } = useUser();

  return (
    <div className='p-5 shadow-sm border-b-2 flex bg-white justify-between items-center'>

      {/* Search Box */}
      <div className='flex gap-2 items-center border rounded-md max-w-lg bg-white'>
        <Search />
        <input
          type='text'
          placeholder='Search...'
          className='outline-none'
        />
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-4'>

        {/* Membership Banner */}
        <h2 className='bg-primary p-1 md:p-2 rounded-full text-xs md:text-md text-white px-2 md:px-5'>
          🔥 Join Membership just for <strong className='text-green-600'>$12</strong> /Month
        </h2>

        {/* User Info */}
        {isLoaded && user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium hidden md:block">
              Hi, {user.firstName}
            </span>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="text-sm text-gray-500">Loading...</div>
        )}
      </div>
    </div>
  );
}
