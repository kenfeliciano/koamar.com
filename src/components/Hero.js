import * as React from 'react'

export const Hero = () => (
  <div className='bg-surface'>
    <p className='text-body'>Welcome to KoaMar in 2020, home of Ken Feliciano</p>
    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-2xl text-body'>
      <span className='hidden sm:inline'>Lifelong learner</span>
      <span className='sm:hidden'>Learner</span>, musician<span className='md:hidden'>, coder</span>
      <span className='hidden sm:inline'>, retired guy</span>
      <span className='hidden md:inline'>, some sort of coding type</span>
    </p>
    <p className='hidden lg:inline text-body'>
      I hope to be documenting my learning and creative work for future me and anyone else that finds this interesting!
    </p>
    <p className='hidden sm:inline lg:hidden text-body'>Documenting learning and creating stuff...for the future</p>
    <p className='sm:hidden text-body'>Documenting learning and creating stuff</p>
    <p className='text-body'>It's been 24 years, about time something happened!</p>
  </div>
)
