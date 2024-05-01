import React, { useEffect, useRef } from "react"

const Map = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    if (mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      })

      // Add a marker to the map
      const marker = new window.google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map,
        title: "Hello, World!",
      })
    }
  }, [])

  return <div ref={mapRef} style={{ height: "500px" }} />
}

export default Map
