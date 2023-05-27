import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
import { DataProvider } from './Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={Router}></RouterProvider>
    </DataProvider>
  </React.StrictMode>,
)
