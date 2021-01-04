import React, { useState } from 'react'
import leftArr from '../leftArr.svg'
import rightArr from '../rightArr.svg'

function CenterCarousel({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
    console.log(current)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    console.log(current)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div className='center__middle'>
      <h2>Explore our demos</h2>
      <p>
        Explore our landing Page demos on different kind of topics. More Demos
        are coming soon.
      </p>
      <section className='center__carousel'>
        <img
          src={leftArr}
          alt='left arrow'
          className='leftArrow'
          onClick={prevSlide}
        />
        <img
          src={rightArr}
          alt='right arrow'
          className='rightArrow'
          onClick={nextSlide}
        />
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div className='slide__content'>
                  <img
                    src={slide.img}
                    alt={slide.content}
                    className='carousel__img'
                  />
                  <h3 className='carousel__content'>{slide.content}</h3>
                </div>
              )}
            </div>
          )
        })}
      </section>
      <hr />
    </div>
  )
}

export default CenterCarousel
