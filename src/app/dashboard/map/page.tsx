// src/app/dashboard/map/page.tsx
"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

interface GetMapProps {
  posix: number[]
}

const GetMap: React.FC<GetMapProps> = ({ posix }) => {
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null)

  useEffect(() => {
    // Check if window is defined (ensures we are on the client side)
    if (typeof window !== "undefined") {
      // Use navigator.geolocation to get current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          console.log("Latitude is:", latitude)
          console.log("Longitude is:", longitude)
          setCoordinates([latitude, longitude])
        },
        (error) => {
          console.error("Error retrieving location:", error)
        },
      )
    }
  }, []) // Empty dependency array ensures this effect runs only once after initial render

  // Render PassMap dynamically (only on the client side)
  const PassMap = dynamic(() => import("./_components/map"), { ssr: false })

  return (
    <>
      <div className="bg-white-700 mx-auto my-5 h-[480px] w-[98%]">
        {coordinates ? <PassMap posix={coordinates} /> : <p>Loading map...</p>}
      </div>
    </>
  )
}

export default GetMap
