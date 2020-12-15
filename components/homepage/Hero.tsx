import React, { useRef } from 'react';
import Slider, { SliderAction } from 'components/Slider';

type Hero = { image: { sourceUrl: string }, title: string }
interface HeroProps {
  data: Hero[]
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const slider = useRef<SliderAction>(null)

  return (<>
    <Slider sliderRef={slider} className="h-full">
      {data.map((hero, index) => (
        <div
          key={index}
          className="h-full"
          style={{
            backgroundImage: `url(${hero.image.sourceUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container h-full flex items-center">
            <h1 className="text-white whitespace-pre-line w-full text-4xl sm:text-6xl text-center sm:text-left font-bold">
              {hero.title}
            </h1>
          </div>
        </div>
      ))}
    </Slider>
    <div
      style={{ left: '50%', top: '80%' }}
      className="absolute w-full container flex justify-center sm:justify-between items-center transform -translate-x-1/2 text-white text-sm"
    >
      <p className="hidden sm:block"><span className="mr-2">l</span> DIGITAL AGENCY</p>
      <div className="flex items-center">
        <button onClick={() => slider.current?.prev()}><p>PREVIOUS</p></button>
        <div style={{ height: 2 }} className="w-20 mx-4 bg-white" />
        <button onClick={() => slider.current?.next()}><p>NEXT</p></button>
      </div>
    </div>
  </>);
};

export default Hero;