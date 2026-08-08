import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Portfolio from './PortfolioDark.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)

