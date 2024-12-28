import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Hero from './components/Hero'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <BackgroundBeamsDemo></BackgroundBeamsDemo> */}
      {/* <SpotlightPreview></SpotlightPreview> */}
      {/* <AuroraBackgroundDemo></AuroraBackgroundDemo> */}
      {/* <BackgroundGradientAnimationDemo></BackgroundGradientAnimationDemo> */}
      {/* <HeroHighlightDemo></HeroHighlightDemo> */}
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
)
