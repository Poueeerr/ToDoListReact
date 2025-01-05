import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.module.css'
import App from './App.tsx'
import { ToDoContextProvider } from './contexts/toDoContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoContextProvider>
      <App />
    </ToDoContextProvider>    
  </StrictMode>,
)
