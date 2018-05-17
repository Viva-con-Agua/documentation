import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import logo from 'resources/drop_small.png'
//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/" className="brand">
          <img src={logo} alt="Viva con Agua logo" />
          <div>
            <span className="bold">Pool²</span>
            <span>Documentation</span>
          </div>
        </Link>
        <Link to="/concepts" className="text">Concepts</Link>
        <Link to="/guides" className="text">Guides</Link>
        <Link to="/rest" className="text">REST Interfaces</Link>
        <Link to="/about" className="text">About</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
