import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

const navLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Resume', href: '/resume' },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full border border-black bg-surface-raised '>
      <div className='flex justify-between z-2 bg-surface-raised p-5 font-inter'>
        <h3>Jordan Fulawka</h3>
        <button onClick={() => setMenuOpen((prev) => !prev)}>
          <Menu />
        </button>
      </div>
      <motion.div animate={menuOpen ? 'open' : 'closed'} className='z-1'>
        <motion.ul animate={{ height: menuOpen ? 'auto' : '0' }}>
          {navLinks.map((navLink) => {
            return (
              <motion.li
                animate={{
                  transform: menuOpen ? 'translateY(0)' : `translateY(-200px)`,
                }}
              >
                {navLink.name}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default Nav;
