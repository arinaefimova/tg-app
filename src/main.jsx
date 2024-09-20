import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import './null.scss'
createRoot(document.getElementById('root')).render(
  <StrictMode>

      <App />

    
  </StrictMode>,
)
