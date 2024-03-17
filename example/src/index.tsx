import React from 'react'
import ReactDOM from 'react-dom/client'
import { RatingStar } from 'react-ts-rating-star'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <RatingStar averageNote={3.28} />
    </div>
  </React.StrictMode>,
)
