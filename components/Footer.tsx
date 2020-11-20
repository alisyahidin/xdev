import React from 'react';
import Section from './Section';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <Section
    className="h-screen"
    style={{
      backgroundImage: 'url(/images/bg-footer.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div className="container h-full flex flex-col justify-between">
      <div className="flex-1 flex items-center">
        <h1 className="text-white text-6xl font-bold">
          Hello@xdevels.com
        </h1>
      </div>
      <div className="flex items-end justify-between py-6">
        <div style={{ color: '#f2f2f2' }}>
          <p className="text-xl font-bold mb-2">Contact us</p>
          <span className="mr-12">+62 817 614262</span>
          <span>Hello@xdevels.com</span>
        </div>
        <p style={{ color: '#BDBDBD' }}>© 2020 xdevels.</p>
      </div>
    </div>
  </Section>
);

export default Footer;