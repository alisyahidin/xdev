import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import { FloatMenu } from './Menu';
import { useShowMenu } from 'store/menu';

const wrapperVariants = {
  transparent: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    boxShadow: 'rgb(61, 61, 61, 0) 0px 0px 10px',
    paddingBottom: '2rem',
    paddingTop: '2rem',
    transition: {
      type: 'tween',
      ease: [0.15, 0.95, 0.5, 1],
      duration: 0.4
    }
  },
  white: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: 'rgb(61, 61, 61, 0.1) 0px 0px 35px',
    paddingBottom: '1.4rem',
    paddingTop: '1.4rem',
    transition: {
      type: 'tween',
      ease: [0.15, 0.95, 0.5, 1],
      duration: 0.4
    }
  },
}

const logoVariants = {
  transparent: {
    color: 'rgba(255, 255, 255, 1)',
    fill: 'rgba(255, 255, 255, 1)',
    transition: {
      type: 'tween',
      ease: [0.15, 0.95, 0.5, 1],
      duration: 0.4
    }
  },
  white: {
    color: 'rgba(0, 0, 0, 1)',
    fill: 'rgba(0, 0, 0, 1)',
    transition: {
      type: 'tween',
      ease: [0.15, 0.95, 0.5, 1],
      duration: 0.4
    }
  },
}

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [mode, setMode] = useState<string>('transparent')
  const { scrollY } = useViewportScroll()
  const { showMenu } = useShowMenu()

  useEffect(() => {
    const updateNavbar = (scrollPosition: number) => setMode(scrollPosition > window.innerHeight * (7/10) ? 'white' : 'transparent')
    updateNavbar(scrollY.get())

    return scrollY.onChange(updateNavbar)
  }, [])

  return (
    <motion.div variants={wrapperVariants} initial="transparent" animate={showMenu ? 'transparent' : mode} className="fixed top-0 left-0 w-full z-50 sm:z-10">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <svg className="cursor-pointer h-5 sm:h-8" viewBox="0 0 245 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EB5757" d="M2.14513 66.0007C1.56009 66.0007 1.04006 65.8117 0.585036 65.4336C0.195012 64.9926 0 64.457 0 63.8269C0 63.3228 0.16251 62.8502 0.48753 62.4092L16.771 40.7655L1.95012 20.445C1.56009 19.941 1.36508 19.4369 1.36508 18.9328C1.36508 18.3657 1.5926 17.8932 2.04762 17.5151C2.50265 17.074 3.02268 16.8535 3.60772 16.8535H15.5034C16.6735 16.8535 17.6161 17.3891 18.3311 18.4603L27.3992 30.558L36.3697 18.5548C36.7597 18.0507 37.1498 17.6411 37.5398 17.3261C37.9298 17.011 38.5148 16.8535 39.2949 16.8535H50.7031C51.2881 16.8535 51.7756 17.074 52.1657 17.5151C52.6207 17.8932 52.8482 18.3657 52.8482 18.9328C52.8482 19.5629 52.6857 20.067 52.3607 20.445L37.1498 40.7655L53.7258 62.4092C54.0508 62.8502 54.2133 63.3228 54.2133 63.8269C54.2133 64.457 53.9858 64.9926 53.5307 65.4336C53.1407 65.8117 52.6532 66.0007 52.0682 66.0007H39.5874C38.4823 66.0007 37.5723 65.4966 36.8572 64.4885L27.0091 51.5401L17.0635 64.4885C16.6735 64.9925 16.2835 65.3706 15.8935 65.6226C15.5034 65.8747 14.9834 66.0007 14.3334 66.0007H2.14513Z" />
            <motion.path variants={logoVariants} initial="transparent" animate={showMenu ? 'transparent' : mode} d="M67.6803 65.0702C67.0149 65.0702 66.416 64.8533 65.8837 64.4195C65.4179 63.9237 65.1851 63.3659 65.1851 62.7462V2.32394C65.1851 1.64225 65.4179 1.0845 65.8837 0.650704C66.416 0.216901 67.0149 0 67.6803 0H93.6303C103.411 0 110.997 2.169 116.386 6.50701C121.776 10.845 124.604 17.1351 124.87 25.3774C124.937 27.1745 124.97 29.5604 124.97 32.5351C124.97 35.5097 124.937 37.8646 124.87 39.5998C124.537 48.2139 121.776 54.6279 116.586 58.842C111.463 62.9941 103.977 65.0702 94.1293 65.0702H67.6803ZM93.6303 51.6843C98.0218 51.6843 101.249 50.7237 103.312 48.8026C105.374 46.8195 106.472 43.69 106.605 39.4139C106.738 37.6167 106.805 35.2928 106.805 32.4421C106.805 29.5914 106.738 27.2985 106.605 25.5633C106.472 21.4112 105.274 18.3436 103.012 16.3605C100.816 14.3774 97.5228 13.3859 93.1312 13.3859H83.1504V51.6843H93.6303Z" />
            <motion.path variants={logoVariants} initial="transparent" animate={showMenu ? 'transparent' : mode} d="M159.485 65.9997C151.501 65.9997 145.213 63.9856 140.622 59.9575C136.031 55.9293 133.635 50.073 133.436 42.3886V39.1351C133.702 31.8224 136.13 26.121 140.722 22.0309C145.379 17.8788 151.601 15.8028 159.386 15.8028C165.041 15.8028 169.799 16.8873 173.658 19.0563C177.584 21.1633 180.512 24.076 182.441 27.7943C184.437 31.5125 185.435 35.7886 185.435 40.6224V42.8533C185.435 43.4731 185.203 44.0308 184.737 44.5266C184.271 44.9604 183.672 45.1773 182.94 45.1773H151.002V45.828C151.135 48.7406 151.9 51.0956 153.297 52.8927C154.695 54.6899 156.724 55.5885 159.386 55.5885C161.049 55.5885 162.413 55.2786 163.478 54.6589C164.542 53.9772 165.507 53.1716 166.372 52.242C166.971 51.5603 167.437 51.1575 167.769 51.0336C168.169 50.8477 168.768 50.7547 169.566 50.7547H181.942C182.541 50.7547 183.04 50.9406 183.439 51.3125C183.905 51.6223 184.138 52.0561 184.138 52.6139C184.138 54.2251 183.14 56.0843 181.144 58.1913C179.214 60.2983 176.386 62.1265 172.66 63.6758C168.934 65.2251 164.542 65.9997 159.485 65.9997ZM167.869 35.9745V35.7886C167.869 32.752 167.104 30.3661 165.574 28.6309C164.11 26.8337 162.047 25.9351 159.386 25.9351C156.791 25.9351 154.728 26.8337 153.198 28.6309C151.734 30.3661 151.002 32.752 151.002 35.7886V35.9745H167.869Z" />
            <motion.path variants={logoVariants} initial="transparent" animate={showMenu ? 'transparent' : mode} d="M211.307 65.0702C210.376 65.0702 209.644 64.8842 209.112 64.5124C208.646 64.0786 208.247 63.4899 207.914 62.7462L189.05 19.614L188.851 18.7774C188.851 18.2196 189.05 17.7549 189.45 17.383C189.915 16.9492 190.481 16.7323 191.146 16.7323H202.425C203.888 16.7323 204.853 17.383 205.319 18.6844L216.597 47.2223L227.975 18.6844C228.441 17.383 229.406 16.7323 230.87 16.7323H242.148C242.747 16.7323 243.279 16.9492 243.745 17.383C244.211 17.7549 244.444 18.2196 244.444 18.7774L244.244 19.614L225.38 62.7462C225.048 63.4899 224.615 64.0786 224.083 64.5124C223.551 64.8842 222.819 65.0702 221.887 65.0702H211.307Z" />
          </svg>
        </Link>
        <div>
          <Link href="/about" passHref><motion.a variants={logoVariants} initial="transparent" animate={showMenu ? 'transparent' : mode} className="sm:text-xl mr-5 sm:mr-16">ABOUT</motion.a></Link>
          <Link href="/works" passHref><motion.a variants={logoVariants} initial="transparent" animate={showMenu ? 'transparent' : mode} className="sm:text-xl">WORKS</motion.a></Link>
        </div>
        <div className="sm:hidden">
          <FloatMenu />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;