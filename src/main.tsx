import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ResetCSS } from './ResetCSS.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetCSS/>
    
    <App />
  </StrictMode>,
)
