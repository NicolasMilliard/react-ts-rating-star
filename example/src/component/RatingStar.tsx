import React from 'react'
import Star from './Star'
import './react-ts-rating-star.scss'

interface RatingStarProps {
  numberOfStars?: number
  icon?: JSX.Element
  iconWidth?: string
  iconHeight?: string
  averageNote?: number
}

const RatingStar = ({
  icon,
  iconWidth = '2em',
  iconHeight = '2em',
  numberOfStars = 5,
  averageNote,
}: RatingStarProps) => {
  const renderStars = () => {
    const stars: JSX.Element[] = []

    // Calculate the number of filled stars and the percentage of the last star to fill
    const filledStars: number = averageNote ? Math.floor(averageNote) : 0
    const lastStarPercentage: number = averageNote
      ? (averageNote - filledStars) * 100
      : 0

    for (let i = 0; i < numberOfStars; i++) {
      // Calculate the fill percentage for each star
      let fillPercentage = 100
      if (i < filledStars) {
        fillPercentage = 100
      } else if (i === filledStars) {
        fillPercentage = lastStarPercentage
      } else {
        fillPercentage = 0
      }

      stars.push(
        <Star
          key={i}
          currentStar={i + 1}
          icon={icon}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
          fillPercentage={fillPercentage}
        />,
      )
    }

    return stars
  }

  return <div className='star-container'>{renderStars()}</div>
}

export default RatingStar
