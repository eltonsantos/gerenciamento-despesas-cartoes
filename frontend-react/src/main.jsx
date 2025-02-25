import { StrictMode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material';
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </StrictMode>,
)
