'use client'
import { useEffect, useState } from "react"

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false)
    }, 1000) // interval
  }, [])

  return (
    <div className={`
      h-screen w-screen fixed z-[1000] bg-white text-black transition duration-700 top-0 left-0 flex justify-center items-center
      ${!showPreloader && "opacity-0 pointer-events-none"}
    `}>
      <p className="w-fit">preloader</p>
    </div>
  )
}

export default Preloader
