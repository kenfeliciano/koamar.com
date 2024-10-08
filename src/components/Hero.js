import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Moog = () => (
  <StaticImage
    src='../images/steve-harvey-xWiXi6wRLGo-unsplash.jpg'
    alt='MOOG Modular Synthesizer - photo by Steve Harvey @ Unsplash'
    className='object-cover h-full min-w-full'
  />
)

export const Hero = () => (
  <>
    <div className='relative h-64 m-0 overflow-hidden rounded-lg bg-brandedSurface dark:bg-opposite'>
      <div className='absolute z-30 flex items-center w-full h-full'>
        <div className='relative z-30 w-5/6 px-6 py-8 text-body md:py-6 md:w-1/2'>
          <div className='hidden md:inline'>
            <h2 className='text-3xl lg:text-5xl'>
              <span className='hidden md:inline'>Lifelong learner, </span>
              <span className='md:hidden'>
                Learner, <br />
              </span>
              musician, <span className='hidden md:inline'>retired guy, </span>
              <span className='hidden lg:inline'>some sort of coding type</span>
              <span className='lg:hidden'>coder</span>
            </h2>
          </div>
          <div className='md:hidden'>
            <h2 className='text-3xl'>
              <span>Learner</span>
              <br />
              <span>Musician</span>
              <br />
              <span>Coder</span>
              <br />
              <span>Retired Guy</span>
            </h2>
          </div>
          <span></span>
        </div>
        <div className='absolute top-0 right-0 flex w-full h-full'>
          <div className='h-full transition-all sm:w-1/3 w-14 bg-brandedSurface dark:bg-opposite'></div>
          <div className='relative w-1/3 w-288 h-288'>
            <svg
              fill='currentColor'
              viewBox='0 0 100 100'
              className='absolute inset-y-0 z-20 h-full text-brandedSurface dark:text-opposite'
            >
              <polygon id='diagonal' points='0,0 100,0 50,100 0,100'></polygon>
            </svg>
            <svg
              fill='currentColor'
              viewBox='0 0 100 100'
              className='absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50'
            >
              <polygon points='0,0 100,0 50,100 0,100'></polygon>
            </svg>
          </div>
        </div>
      </div>
      <div className='absolute top-0 right-0 block w-8/12 h-full'>
        <Moog />
      </div>
    </div>
  </>
)
