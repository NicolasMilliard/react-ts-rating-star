import React, { useState, useEffect } from 'react'
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
  const [clickedStars, setClickedStars] = useState<number[]>([])

  const handleStar = (starIndex: number) => {
    // Generate an array of clicked stars including the clicked star and all previous stars
    const clickedStarsArray = Array.from(
      { length: starIndex },
      (_, index) => index + 1,
    )
    setClickedStars(clickedStarsArray)
  }

  const renderStars = (): JSX.Element[] => {
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
          isActive={clickedStars.includes(i + 1)}
          icon={icon}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
          fillPercentage={clickedStars.length > 0 ? 0 : fillPercentage}
          onClick={handleStar}
        />,
      )
    }
    return stars
  }

  useEffect(() => {
    console.log('clickedStars', clickedStars)
  }, [clickedStars])

  return <div className='star-container'>{renderStars()}</div>
}

export default RatingStar
