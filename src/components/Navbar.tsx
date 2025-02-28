// components/Navbar.tsx
import React from 'react';
import { Menu, MenuItem } from '@/components/ui/navbar-menu';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center items-center p-4 bg-transparent">
      <div className="flex items-center space-x-4">
        <Image
          src="/translator.png" // Use the translator.png file for the logo
          alt="Logo"
          width={40}
          height={40}
          className="cursor-pointer"
        />
        <Menu>
          <MenuItem item="Home" href="/" />
          <MenuItem item="How It Works" href="/howitworks" />
          <MenuItem item="Meet the Creators" href="/meetthecreators" />
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
