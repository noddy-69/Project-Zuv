import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const imgs = [
    '/frame-1261156899@2x.png', 
    '/frame-1261156900@2x.png', 
    '/frame-1261156901@2x.png'
  ];

  return (
    <div className="embla">
      <div className="headingWrapper">
        <div className="heading">Some photos of site</div>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide"><img
                  className="none"
                  src="/frame-1261156899@2x.png"
                  alt="Third slide"
                  /></div>
          <div className="embla__slide"><img
                  className="none"
                  src="/frame-1261156900@2x.png"
                  alt="Third slide"
                  /></div>
          <div className="embla__slide"><img
                  className="none"
                  src="/frame-1261156901@2x.png"
                  alt="Third slide"
                  /></div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
