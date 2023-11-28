import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Global } from '@emotion/react'
import { reset } from './styles/global.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <Global styles={reset}/>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
)
