// src/page.tsx

import dynamic from "next/dynamic"
import { useMemo } from "react"

interface PassMapProps {
  posix: number[] // Define the type for 'posix' prop as an array of numbers
}

const PassMap: React.FC<PassMapProps> = ({ posix }) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("./index"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  )

  return (
    <div className="bg-white-700 mx-auto my-5 h-[480px] w-[98%]">
      {/* Pass individual elements of 'posix' array as props to the 'Map' component */}
      <Map posix={posix} />
    </div>
  )
}

export default PassMap
