import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './style.css'
import Home from './views/home'
import FigmaImport from './views/figma-import'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={FigmaImport} exact path="/figma-import" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
