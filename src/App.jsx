import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className="max-w-[1240px] mx-auto px-4 md:min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default App
