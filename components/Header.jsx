'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {
  SignedIn, 
  SignedOut, 
  SignInButton, 
  SignUpButton,
  UserButton 
} from '@clerk/nextjs';
import { Button } from './ui/button';
import { LayoutDashboard,PenBox } from 'lucide-react';

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="budgetbee logo"
            height={60}
            width={200}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Wrap SignIn + SignUp in one block */}
        <div className="flex items-center space-x-4">

        <SignedIn>
          <Link href={"/dashboard"} className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
          <Button variant="outline">
           <LayoutDashboard size={18}/>
            <span className='hidden md:inline'>Dashboard</span>
          </Button>
          </Link>

          <Link href={"/transaction/create"}>
          <Button className="flex items-center">
           <PenBox size={18}/>
            <span className='hidden md:inline'>Add Transaction</span>
          </Button>
          </Link>
        </SignedIn>


          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
              <UserButton
              appearance={{  // ERROR  !! the size of avatar is not changing !!
                elements: {
                  // increase these to the size you want:
                  rootBox: "w-12 h-12",      // entire control
                  avatarBox: "w-12 h-12",    // wrapper
                  avatarImage: "w-12 h-12",  // actual image
                }
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;