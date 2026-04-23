import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Vite가 vite.config.js의 base 설정을 알아서 가져와서 넣어줍니다 */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
)
