import * as React from 'react'
import styled from 'styled-components'

const ChevronWrapper = styled.div`
  height: 21px;
  width: 21px;
`
export const DoubleChevronLeft = () => (
  <ChevronWrapper>
    <svg
      className='inline fill-current'
      height='21'
      viewBox='0 0 21 21'
      width='21'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g
        fill='none'
        fill-rule='evenodd'
        stroke='var(--text-body)'
        stroke-linecap='round'
        stroke-linejoin='round'
        transform='translate(5 6)'
      >
        <path d='m8.5 8.5-4-4 4-4' />
        <path d='m4.5 8.5-4-4 4-4' />
      </g>
    </svg>
  </ChevronWrapper>
)

export const DoubleChevronRight = () => (
  <ChevronWrapper>
    <svg
      className='inline fill-current'
      height='21'
      viewBox='0 0 21 21'
      width='21'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g
        fill='none'
        fill-rule='evenodd'
        stroke='var(--text-body)'
        stroke-linecap='round'
        stroke-linejoin='round'
        transform='translate(7 6)'
      >
        <path d='m.5 8.5 4-4-4-4' />
        <path d='m4.5 8.5 4-4-4-4' />
      </g>
    </svg>
  </ChevronWrapper>
)
