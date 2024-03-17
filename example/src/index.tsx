import React from 'react'
import ReactDOM from 'react-dom/client'

import ExampleRatingStar from './ExampleRatingStar'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <ExampleRatingStar />
    </div>
  </React.StrictMode>,
)
