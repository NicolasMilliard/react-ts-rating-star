# React TS Rating Star

React TS Rating Star allows you to create a customizable rating star component with ease.

## How to use

**Requirements:**

React >= 16.8.0

**Installation:**

On the command line navigate to the project root and enter:

`npm install react-ts-rating-star`\
`yarn add react-ts-rating-star`

**TSX:**

```typescript
import { RatingStar } from 'react-ts-rating-star'

// ...

<RatingStar />
```

## Props

| Prop name       | Type                        | Default    | Optional | Description                                               |
| --------------- | --------------------------- | ---------- | -------- | --------------------------------------------------------- |
| numberOfStars   | number                      | 5          | true     | The number of stars to display.                           |
| averageRating   | number                      |            | true     | The rate displayed before interacting with the component. |
| iconColor       | string                      | 'gold'     | true     | The color of the icons when active.                       |
| backgroundColor | string                      | 'darkgray' | true     | The background color of the icons (inactive icon.)        |
| iconWidth       | string                      | '2em'      | true     | The width of the icons.                                   |
| iconHeight      | string                      | '2em'      | true     | The height of the icons.                                  |
| iconHoverEffect | HoverEffect                 | 'none'     | true     | The effect on hover (see HoverEffect type below).         |
| onClick         | (rating: number) => unknown |            | true     | Function called when the user clicks on a star.           |

## HoverEffect

Possible values of iconHoverEffect are the following:

```bash
'none'
'scaling'
'twinkling'
'rotating'
'animated-scaling'
'animated-twinkling'
'animated-rotating'
```

## Example

```typescript
import React from 'react'
import { RatingStar } from 'react-ts-rating-star'
import MyCustomIcon from './MyCustomIcon.tsx'

const ExampleRatingStar = () => {
  const getStarNumberClicked = (rating: number) => {
    console.log(`Rating: ${rating}`)
  }

  return (
    <RatingStar
      iconColor='#fdcb6e'
      backgroundColor='#dfe6e9'
      iconWidth='4em'
      iconHeight='4em'
      averageRating={3.81}
      iconHoverEffect='scaling'
      onClick={getStarNumberClicked}
    />
  )
}

export default ExampleRatingStar
```
![alt text](https://github.com/NicolasMilliard/react-ts-rating-star/blob/main/example/example.gif?raw=true)
