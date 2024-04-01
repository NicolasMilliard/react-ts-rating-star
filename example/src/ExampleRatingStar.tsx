import React from 'react'
// import { RatingStar } from 'react-ts-rating-star'
import RatingStar from './components/RatingStar.tsx'
// import MyCustomIcon from './MyCustomIcon.tsx'

const ExampleRatingStar = () => {
  const getStarNumberClicked = (rating: number) => {
    console.log(`Rating: ${rating}`)
  }

  return (
    <RatingStar
      numberOfStars={10}
      // icon={<MyCustomIcon />}
      iconColor='blue'
      iconWidth='4em'
      iconHeight='4em'
      backgroundColor='green'
      averageRating={3.81}
      iconHoverEffect='animated-rotating'
      onClick={getStarNumberClicked}
    />
  )
}

export default ExampleRatingStar
