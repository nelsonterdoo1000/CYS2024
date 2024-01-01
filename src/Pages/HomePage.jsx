import React, { useEffect } from "react"
import { useStateContext } from '../State/StateContext'
import HomeMain from "../components/home/HomeMain"
import Hero from "../components/home/Hero"
import HomeFooter from "../components/home/HomeFooter"


const HomePage = () => {
  const { setTitle } = useStateContext()

  useEffect(() => {
    setTitle('Home')
    console.clear()
  }, [])

  return <div className="p-0 m-0 animated--grow-in">
    <Hero/>
    <HomeMain />
    <HomeFooter/>
    <a href="#" className="d-flex align-items-center justify-content-center">
      Back to top
    </a>
  </div>
}

export default HomePage