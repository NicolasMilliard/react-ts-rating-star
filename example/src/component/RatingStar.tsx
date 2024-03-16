import React, { useMemo, useState } from 'react'
import Star from './Star'
import './react-ts-rating-star.scss'

enum HoverEffect {
  None = 'none',
  Scaling = 'scaling',
  AnimatedScaling = 'pulsating',
  AnimatedTwinkling = 'twinkling',
  AnimatedRotating = 'rotating',
}

interface RatingStarProps {
  numberOfStars?: number
  icon?: JSX.Element
  iconColor?: string
  iconWidth?: string
  iconHeight?: string
  iconUpScaleOnHover?: boolean
  backgroundColor?: string
  averageNote?: number
  animationEffect?: string
}

/**
 * RatingStar component for displaying a rating star system.
 * @param props - The RatingStarProps object containing the props for the RatingStar component.
 * @returns JSX.Element representing the RatingStar component.
 */
const RatingStar = ({
  numberOfStars = 5,
  icon,
  iconColor = 'gold',
  iconWidth = '2em',
  iconHeight = '2em',
  iconUpScaleOnHover = true,
  backgroundColor = 'darkgray',
  averageNote,
  animationEffect = HoverEffect.AnimatedRotating,
}: RatingStarProps) => {
  let animationClassName = ''
  const [clickedStars, setClickedStars] = useState<number[]>([])

  /** CSS Variable */
  const iconColorCSSVar = {
    '--rtrs-star-color': iconColor,
  } as React.CSSProperties
  /** CSS Variable */
  const backgroundColorCSSVar = {
    '--rtrs-star-background-color': backgroundColor,
  } as React.CSSProperties
  /** CSS Variable */
  const iconUpScaleOnHoverCSSVar = {
    '--rtrs-star-upscale-on-hover': iconUpScaleOnHover ? '1.3' : '1',
  } as React.CSSProperties

  switch (animationEffect) {
    case HoverEffect.Scaling:
      animationClassName = 'scaling-fixed'
      break
    case HoverEffect.AnimatedScaling:
      animationClassName = 'scaling-animation'
      break
    case HoverEffect.AnimatedTwinkling:
      animationClassName = 'twinkling-animation'
      break
    case HoverEffect.AnimatedRotating:
      animationClassName = 'rotating-animation'
      break
    default:
      break
  }

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
  }

  /**
   * Render the star components based on the average note.
   */
  const renderStars: JSX.Element[] = useMemo(() => {
    const stars: JSX.Element[] = []
    // Calculate the number of filled stars and the percentage of the last star to fill
    const filledStars: number = averageNote ? Math.floor(averageNote) : 0
    const lastStarPercentage: number = averageNote
      ? (averageNote - filledStars) * 100
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
          icon={icon}
          iconColor={iconColor}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
          fillPercentage={clickedStars.length > 0 ? 0 : fillPercentage}
          animationClassName={animationClassName}
          onClick={handleStar}
        />,
      )
    }
    return stars
  }, [
    numberOfStars,
    icon,
    iconColor,
    iconWidth,
    iconHeight,
    averageNote,
    clickedStars,
    animationClassName,
  ])

  return (
    <div
      className='rtrs-star-container'
      style={{
        ...iconColorCSSVar,
        ...backgroundColorCSSVar,
        ...iconUpScaleOnHoverCSSVar,
      }}
    >
      {renderStars}
    </div>
  )
}

export default RatingStar
