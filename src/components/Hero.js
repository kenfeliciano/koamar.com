import * as React from 'react'

export const Hero = () => (
  <div className='bg-container p-4 rounded-lg shadow-lg mt-4'>
    <p>
      Welcome to <span className='text-primary font-semibold'>KoaMar</span> in 2020, home of Ken Feliciano
    </p>
    <p className='text-3xl leading-none tracking-tight font-extrabold sm:text-2xl'>
      <span className='hidden sm:inline'>Lifelong learner</span>
      <span className='sm:hidden'>Learner</span>, musician<span className='md:hidden'>, coder</span>
      <span className='hidden sm:inline'>, retired guy</span>
      <span className='hidden md:inline'>, some sort of coding type</span>
    </p>
    <p className='hidden lg:block text-body'>
      I hope to be documenting my learning and creative work for future me and anyone else that finds this interesting!
    </p>
    <p className='hidden sm:block lg:hidden'>Documenting learning and creating stuff...for the future</p>
    <p className='sm:hidden'>Documenting learning and creating stuff</p>
    <p>It's been 24 years, about time something happened!</p>
  </div>
)
