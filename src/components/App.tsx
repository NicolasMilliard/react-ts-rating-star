import React from 'react'

interface RatingStarProps {
  note: number
}

const RatingStar = ({ note }: RatingStarProps) => {
  return <p>Current note: {note}</p>
}

export default RatingStar
