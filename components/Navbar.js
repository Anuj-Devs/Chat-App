"use client";
// components/Navbar.js
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';


const Navbar = () => {
  const user = useUser()
  console.log("USER", user)
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          My Website
        </Link>
        <ul className='flex space-x-4 items-center'>
          <li><Link href="/" className="text-white mr-4 hover:text-gray-300">Home</Link></li>
          <li><Link href="/forums" className="text-white mr-4 hover:text-gray-300">Forum</Link></li>
          <li><Link href="/chat" className="text-white mr-4 hover:text-gray-300">UserChat</Link></li>
          <li><UserButton/></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;