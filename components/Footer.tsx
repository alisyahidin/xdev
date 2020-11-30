import React from 'react';
import Section from './Section';

type Background =  'bg-footer.png'
  | 'bg-footer-2.png'

interface FooterProps {
  bg?: Background
}

const Footer: React.FC<FooterProps> = ({ bg = 'bg-footer.png' }) => (
  <Section
    className="h-screen"
    style={{
      backgroundImage: `url(/images/${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div className="container h-full flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center sm:justify-start">
        <h1 className="text-white text-4xl sm:text-6xl font-bold">
          Hello@xdevels.com
        </h1>
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-between py-6">
        <div className="flex flex-col text-center sm:block sm:text-left" style={{ color: '#f2f2f2' }}>
          <p className="text-xl font-bold mb-2">Contact us</p>
          <span className="sm:mr-12">+62 817 614262</span>
          <span>Hello@xdevels.com</span>
        </div>
        <p className="mt-4 sm:mt-0" style={{ color: '#BDBDBD' }}>© 2020 xdevels.</p>
      </div>
    </div>
  </Section>
);

export default Footer;