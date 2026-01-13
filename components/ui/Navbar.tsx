"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './modetoggle';
function Navbar() {
  return (
    <nav className="bg-stone-600 fixed w-full p-1 pl-10 flex flex-row justify-between items-center">
      <div className="flex items-center justify-between w-full">
        {/* Left section */}
      <div className="flex items-center space-x-1.5">
          <Button asChild variant="outline"><Link href="/Login">Login</Link></Button>
          <Button asChild variant="outline"><Link href="/Signup">SignUp</Link></Button>
    </div>
    {/*Logo*/}
  <span className="text-black bg-white inline-flex rounded-xl font-bold p-2 border-4 w-auto">
    <Image src="/devpair.logo.jpg" width={50} height={10} alt="DevPair Logo" />DEV-PAIR</span>
    {/*Right Section*/}
          <div className="flex items-center space-x-1.5">
           <Button asChild variant="outline"><Link href="/www.google.com">Features</Link></Button>
          <Button asChild variant="outline"><Link href="/About">About Us</Link></Button>
          <ModeToggle/>
          </div>
          </div>
    </nav>
  )
}
export default Navbar