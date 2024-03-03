import React from 'react'
import Star from './Star'
import './react-ts-rating-star.scss'

interface RatingStarProps {
  icon?: JSX.Element
  iconWidth?: string
  iconHeight?: string
  note?: number
  averageNote?: number
}

const RatingStar = ({
  note = 5,
  iconWidth = '2em',
  iconHeight = '2em',
  averageNote = 3.81,
}: RatingStarProps) => {
  const renderStars = () => {
    const stars: JSX.Element[] = []

    // Calculate the number of filled stars and the percentage of the last star to fill
    const filledStars = Math.floor(averageNote)
    const lastStarPercentage = (averageNote - filledStars) * 100

    for (let i = 0; i < note; i++) {
      // Calculate the fill percentage for each star
      let fillPercentage = 1
      if (i < filledStars) {
        fillPercentage = 1
      } else if (i === filledStars) {
        fillPercentage = lastStarPercentage / 100
      } else {
        fillPercentage = 0
      }

      stars.push(
        <Star
          key={i}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
          fillPercentage={fillPercentage}
        />,
      )
    }

    return stars
  }

  return <div className='star_container'>{renderStars()}</div>
}

export default RatingStar
