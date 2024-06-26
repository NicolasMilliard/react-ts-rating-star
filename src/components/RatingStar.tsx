import React, { useMemo, useState } from 'react'
import Star from './Star'
// Types
import type { RatingStarProps } from './types/types'
// Styles
import './styles/react-ts-rating-star.css'

/**
 * RatingStar component for displaying a rating star system.
 * @param numberOfStars - The number of stars to display.
 * @param averageRating - The average rating to display.
 * @param iconColor - The color of the icon. Default is `gold`.
 * @param iconWidth - The width of the icon. Default is `2em`.
 * @param iconHeight - The height of the icon. Default is `2em`.
 * @param iconHoverEffect - The hover effect of the icon. Default is `none`. Allowed values: `none`, `scaling`, `rotating`, `animated-scaling`, `animated-twinkling` and `animated-rotating`.
 * @param backgroundColor - The background color of the star. Default is `darkgray`.
 * @param onClick - The callback function when a star is clicked.
 * @returns JSX.Element representing the RatingStar component.
 */
const RatingStar = ({
  numberOfStars = 5,
  averageRating,
  iconColor = 'gold',
  iconWidth = '2em',
  iconHeight = '2em',
  iconHoverEffect = 'none',
  backgroundColor = 'darkgray',
  onClick: clickCallback,
}: RatingStarProps) => {
  const [clickedStars, setClickedStars] = useState<number[]>([])

  // CSS Variables
  const iconColorCSSVar = {
    '--rtrs-star-color': iconColor,
  } as React.CSSProperties
  const backgroundColorCSSVar = {
    '--rtrs-star-background-color': backgroundColor,
  } as React.CSSProperties
  const iconWidthCSSVar = {
    '--rtrs-icon-width': iconWidth,
  } as React.CSSProperties
  const iconHeightCSSVar = {
    '--rtrs-icon-height': iconHeight,
  } as React.CSSProperties

  /**
   * Render the star components based on the average note.
   */
  const renderStars: JSX.Element[] = useMemo(() => {
    /**
     * Generate an array of clicked stars including the clicked star and all previous stars.
     * @param starIndex - The index of the clicked star
     * @returns void
     */
    const handleStar = (starIndex: number): void => {
      const clickedStarsArray: number[] = Array.from(
        { length: starIndex },
        (_, index) => index + 1,
      )
      setClickedStars(clickedStarsArray)

      clickCallback?.(starIndex)
    }

    const stars: JSX.Element[] = []
    // Calculate the number of filled stars and the percentage of the last star to fill
    const filledStars: number = averageRating ? Math.floor(averageRating) : 0
    const lastStarPercentage: number = averageRating
      ? (averageRating - filledStars) * 100
      : 0

    // Calculate the fill percentage for each star
    for (let i = 0; i < numberOfStars; i++) {
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
          iconColor={iconColor}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
          fillPercentage={clickedStars.length > 0 ? 0 : fillPercentage}
          animationClassName={iconHoverEffect}
          onClick={handleStar}
        />,
      )
    }
    return stars
  }, [
    numberOfStars,
    iconColor,
    iconWidth,
    iconHeight,
    averageRating,
    clickedStars,
    iconHoverEffect,
    clickCallback,
  ])

  return (
    <div
      className='rtrs-star-container'
      style={{
        ...iconColorCSSVar,
        ...backgroundColorCSSVar,
        ...iconWidthCSSVar,
        ...iconHeightCSSVar,
      }}
    >
      {renderStars}
    </div>
  )
}

export default RatingStar
