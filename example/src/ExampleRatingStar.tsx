import React from 'react'
import RatingStar from './components/RatingStar'

const ExampleRatingStar = () => {
  const getStarNumberClicked = (rating: number) => {
    console.log(`Rating: ${rating}`)
  }

  return <RatingStar onClick={getStarNumberClicked} />
}

export default ExampleRatingStar
