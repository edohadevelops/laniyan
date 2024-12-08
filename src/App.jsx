import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import RouterConfig from './routes/Config'
import Store from './store/Store'
import ScrollToTop from './components/scroll/ScrollToTop'

function App() {

  return (
    <Store>
      <Router>
        <ScrollToTop />
        <RouterConfig />
      </Router>
    </Store>
  )
}

export default App
