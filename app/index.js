import React from 'react'
import ReactDOM from 'react-dom'

import SuperButton from './components/SuperButton'

// Just print a message out to the console to demonstrate everything is talking.
const myAction = msg => console.log(msg)

ReactDOM.render(
  <div className="my-app">
    <h1>React Starter</h1>

    <SuperButton
        label="My Button"
        action={myAction}
    />
  </div>,
  document.getElementById('app-container')
)
