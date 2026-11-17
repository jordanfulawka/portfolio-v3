import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full border border-black bg-surface-raised'>
      <div className='flex justify-between'>
        <h3>Jordan Fulawka</h3>
        <button onClick={() => setMenuOpen((prev) => !prev)}>
          <Menu />
        </button>
      </div>
      <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }}>
        <li>Projects</li>
        <li>Experience</li>
        <li>Blog</li>
        <li>About</li>
        <li>Resume</li>
      </motion.div>
    </div>
  );
}

export default Nav;
