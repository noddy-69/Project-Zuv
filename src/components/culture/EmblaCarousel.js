import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])


  const imgs = [
    '/frame-1261156899@2x.png', 
    '/frame-1261156900@2x.png', 
    '/frame-1261156901@2x.png'
  ];

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide"><img
                  className="none"
                  src="/11.png"
                  alt="Third slide"
                  /></div>
          <div className="embla__slide"><img
                  className="none"
                  src="/22.png"
                  alt="Third slide"
                  /></div>
          <div className="embla__slide"><img
                  className="none"
                  src="/33.png"
                  alt="Third slide"
                  /></div>
          <div className="embla__slide"><img
                  className="none"
                  src="/11.png"
                  alt="Third slide"
                  /></div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
