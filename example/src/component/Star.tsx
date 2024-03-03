import React from 'react'
import './react-ts-rating-star.scss'

interface StarProps {
  iconWidth: string
  iconHeight: string
  fillPercentage: number
}

const Star = ({ iconWidth, iconHeight, fillPercentage }: StarProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 47.94 47.94'
      xmlSpace='preserve'
      width={iconWidth}
      height={iconHeight}
      className='star'
    >
      {/* Define the clipPath */}
      <defs>
        <clipPath id='starClip'>
          {/* Define the star path */}
          <path d='m26.285 2.486 5.407 10.956a2.58 2.58 0 0 0 1.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.582 2.582 0 0 0-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.585 2.585 0 0 0-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.582 2.582 0 0 0-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757a2.58 2.58 0 0 0 1.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0z' />
        </clipPath>
      </defs>

      {/* Render the star */}
      <path
        className='gradient-bg'
        d='m26.285 2.486 5.407 10.956a2.58 2.58 0 0 0 1.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.582 2.582 0 0 0-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.585 2.585 0 0 0-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.582 2.582 0 0 0-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757a2.58 2.58 0 0 0 1.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0z'
      />

      {/* Render the rectangle inside the star with clipping */}
      <rect
        x='0'
        y='0'
        width={`${fillPercentage * 100}%`}
        height='100%'
        fill='gold'
        clipPath='url(#starClip)'
        className='star-progress'
      />
    </svg>
  )
}

export default Star
