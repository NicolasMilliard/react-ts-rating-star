import React from 'react'
import './react-ts-rating-star.scss'

// TODO: Add colors props
interface StarProps {
  currentStar: number
  isActive: boolean
  icon: JSX.Element | undefined
  iconWidth: string
  iconHeight: string
  fillPercentage: number
  onClick: (starIndex: number) => void
}

const Star = ({
  currentStar,
  isActive,
  icon,
  iconWidth,
  iconHeight,
  fillPercentage,
  onClick,
}: StarProps) => {
  const handleClick = () => {
    onClick(currentStar)
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 47.94 47.94'
      xmlSpace='preserve'
      width={iconWidth}
      height={iconHeight}
      className={`star ${isActive ? 'clicked-star' : ''}`}
      onClick={handleClick}
    >
      <defs>
        <clipPath id='starClip'>
          <StarIcon icon={icon} />
        </clipPath>
      </defs>
      <StarIcon icon={icon} />
      <rect
        x='0'
        y='0'
        width={`${fillPercentage}%`}
        height='100%'
        fill='gold'
        clipPath='url(#starClip)'
        className='star-progress'
      />
    </svg>
  )
}

export default Star

const StarIcon = ({ icon }: { icon: JSX.Element | undefined }) => {
  return (
    <>
      {icon ? (
        icon
      ) : (
        <path d='m26.285 2.486 5.407 10.956a2.58 2.58 0 0 0 1.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.582 2.582 0 0 0-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.585 2.585 0 0 0-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.582 2.582 0 0 0-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757a2.58 2.58 0 0 0 1.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0z' />
      )}
    </>
  )
}
