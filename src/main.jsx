import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Add this line
import { AppProyecto } from './AppProyecto';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AppProyecto/>
    </React.StrictMode>
  </BrowserRouter>
  
)
