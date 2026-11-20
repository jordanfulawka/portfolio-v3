import { Menu } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion, stagger } from 'motion/react';

const navLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Resume', href: '/resume' },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const list = {
    open: {
      height: 'auto',
      transition: {
        delayChildren: stagger(0.075),
      },
    },
    closed: { height: 0 },
  };

  const item = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -12 },
  };

  return (
    <div className='w-full bg-surface-raised'>
      <div className='flex justify-between z-2 bg-surface-raised p-5 font-inter border-b border-line'>
        <h3 className='font-grotesk font-semibold'>Jordan Fulawka</h3>
        <AnimatePresence>
          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
            animate={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0)' }}
            initial={{ transform: 'rotate(0)' }}
            exit={{ transform: 'rotate(0)' }}
            className='md:hidden'
          >
            <Menu />
          </motion.button>
        </AnimatePresence>
        <div className='hidden md:flex gap-5 font-main text-sm items-center font-medium'>
          {navLinks.map((navLink) => {
            return (
              <p key={navLink.href} className=''>
                {navLink.name}
              </p>
            );
          })}
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            variants={list}
            initial='closed'
            animate='open'
            exit='closed'
            className='overflow-hidden font-grotesk'
          >
            {navLinks.map((navLink) => {
              return (
                <motion.li
                  key={navLink.href}
                  variants={item}
                  className='p-2 border-b border-line hover:bg-sky-soft transition-all duration-300 text-sm font-medium'
                >
                  {navLink.name}
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Nav;
