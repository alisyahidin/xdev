import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const duration = 0.3
const menuVariants = (i: number) => ({
  show: {
    strokeDashoffset: 0,
    transition: {
      type: 'tween',
      duration,
      delay: (i * 0.1) + 0.1
    }
  },
  hide: {
    strokeDashoffset: 8,
    transition: {
      type: 'tween',
      duration,
      delay: i * 0.1
    }
  },
  init: {
    strokeDashoffset: -8,
    transition: {
      type: 'tween',
      duration,
      delay: i * 0.1
    }
  },
})

const closeVariants = {
  show: {
    strokeDashoffset: 0,
    transition: {
      type: 'tween',
      duration,
      delay: 0.5
    }
  },
  hide: {
    strokeDashoffset: 8,
    transition: {
      type: 'tween',
      duration,
    }
  },
  init: {
    strokeDashoffset: -8,
    transition: {
      type: 'tween',
      duration,
    }
  },
}

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (<>
    <button onClick={() => setShowMenu(prev => !prev)} className="fixed right-0 z-50" style={{ top: '50%', transform: 'translate(-50%, -50%)' }}>
      <svg height="38px" viewBox="0 0 9.9375 8.1761" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-100.03 -144.41)">
          <AnimatePresence>
            {!showMenu && <g fill="none" stroke="#FFF" strokeWidth="0.7" strokeDasharray="8">
              <motion.path variants={menuVariants(1)} initial="init" animate="show" exit="hide" d="m101.03 148.5h7.9375" />
              <motion.path variants={menuVariants(2)} initial="init" animate="show" exit="hide" d="m101.03 145.85h7.9375" />
              <motion.path variants={menuVariants(3)} initial="init" animate="show" exit="hide" d="m101.03 151.15h7.9375" />
            </g>}
          </AnimatePresence>
          <AnimatePresence>
            {showMenu && <g fill="none" stroke="#FFF" strokeWidth="0.8" strokeDasharray="8">
              <motion.path variants={closeVariants} initial="init" animate="show" exit="hide" d="m102.19 145.69 5.6127 5.6127" />
              <motion.path variants={closeVariants} initial="init" animate="show" exit="hide" d="m102.19 151.31 5.6407-5.612" />
            </g>}
          </AnimatePresence>
        </g>
      </svg>
    </button>
    <AnimatePresence>
      {showMenu && <motion.div
        initial={{ left: '100%' }}
        animate={{ left: 0 }}
        exit={{ left: '100%' }}
        transition={{ type: 'tween', duration: 1, ease: [0.15, 0.95, 0.5, 1] }}
        className="fixed h-screen w-screen z-40"
        style={{ backgroundColor: '#111111' }}
      >
        {/* Content Menu Here */}
      </motion.div>}
    </AnimatePresence>
  </>);
};

export default Menu;