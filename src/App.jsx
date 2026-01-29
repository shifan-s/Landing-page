import React from 'react'
import AppRouter from './app/AppRouter'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <div>
  <BrowserRouter>
 
    <AppRouter />
    
  </BrowserRouter>
      
    </div>
  )
}

export default App