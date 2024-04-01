import React, { useState } from 'react'
// import { RatingStar } from 'react-ts-rating-star'
import RatingStar from './components/RatingStar.tsx'

const ExampleRatingStar = () => {
  const defaultRating = 3.81
  const [currentRating, setCurrentRating] = useState<number | null>(null)
  const getStarNumberClicked = (rating: number) => {
    setCurrentRating(rating)
  }

  return (
    <>
      <p>
        {currentRating ? 'Current' : 'Default'} rating is:{' '}
        {currentRating ? currentRating : defaultRating}
      </p>
      <RatingStar
        iconColor='#fdcb6e'
        backgroundColor='#dfe6e9'
        iconWidth='4em'
        iconHeight='4em'
        averageRating={defaultRating}
        iconHoverEffect='scaling'
        onClick={getStarNumberClicked}
      />
    </>
  )
}

export default ExampleRatingStar
