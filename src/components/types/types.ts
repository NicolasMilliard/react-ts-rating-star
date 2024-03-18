export interface RatingStarProps {
  numberOfStars?: number
  icon?: JSX.Element
  iconColor?: string
  iconWidth?: string
  iconHeight?: string
  backgroundColor?: string
  averageRating?: number
  iconHoverEffect?: HoverEffect
  onClick?: (rating: number) => unknown
}

export interface StarProps {
  currentStar: number
  isActive: boolean
  icon?: JSX.Element
  iconColor?: string
  iconWidth: string
  iconHeight: string
  fillPercentage: number
  animationClassName: string
  onClick: (starIndex: number) => void
}

export type HoverEffect =
  | 'none'
  | 'scaling'
  | 'twinkling'
  | 'rotating'
  | 'animated-scaling'
  | 'animated-twinkling'
  | 'animated-rotating'
