# React TS Rating Star

React TS Rating Star allows you to create a highly customizable rating star component with ease.

A working example can be found here: [TODO]

## How to use

**Requirements:**

React >= 16.8.0

**Install:**

On the command line navigate to the project root and enter:

`npm install react-ts-rating-star`\
`yarn add react-ts-rating-star`

**Import:**

`import { RatingStar } from 'react-ts-rating-star'`

**TSX:**

```
<RatingStar/>
```

## Props

| Prop name       | Type        | Default     | Optional | Description                                               |
| --------------- | ----------- | ----------- | -------- | --------------------------------------------------------- |
| numberOfStars   | number      | 5           | true     | The number of stars to display.                           |
| icon            | JSX.Element | A star icon | true     | The displayed icons.                                      |
| iconColor       | string      | 'gold'      | true     | The color of the icons.                                   |
| iconWidth       | string      | '2em'       | true     | The width of the icons.                                   |
| iconHeight      | string      | '2em'       | true     | The height of the icons.                                  |
| backgroundColor | string      | 'darkgray'  | true     | The background color of the icons (inactive icon.)        |
| averageNote     | number      |             | true     | The node displayed before interacting with the component. |
| animationEffect | HoverEffect | 'none'      | true     | The animation on hover (see HoverEffect type below).      |
