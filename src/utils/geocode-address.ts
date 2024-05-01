import axios from "axios"

import { db } from "@/lib/db"
import { getAllOrganizations } from "@/services/user"

const EARTH_RADIUS = 6371 // Radius of the Earth in kilometers

export async function geocodeAddress(address: string) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address,
    )}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}`,
  )

  if (response.data.status === "OK") {
    const { lat, lng } = response.data.results[0].geometry.location
    return { latitude: lat, longitude: lng }
  } else {
    throw new Error(`Geocoding failed for address: ${address}`)
  }
}

export async function getOrganizationsNearby(
  userAddress: string,
  radiusInKm: number,
) {
  if (radiusInKm === 0) {
    return []
  }

  const radius = radiusInKm // Radius in kilometers
  const { latitude: userLatitude, longitude: userLongitude } =
    await geocodeAddress(userAddress)

  const organizations = (await getAllOrganizations()) || []

  const nearby = await Promise.all(
    organizations.map(async (org) => {
      const { latitude: orgLatitude, longitude: orgLongitude } =
        await geocodeAddress(org.address!)
      const distance = calculateDistance(
        userLatitude,
        userLongitude,
        orgLatitude,
        orgLongitude,
      )
      return {
        ...org,
        distance,
        orgLat: orgLatitude,
        orgLng: orgLongitude,
      }
    }),
  )

  console.info("User location:", { userAddress })
  console.info("Organizations nearby:")
  console.table(
    nearby.map((item) => ({
      lat: item.orgLat,
      lng: item.orgLng,
      address: item.address,
      distance: item.distance,
    })),
  )

  const sortedOrgs = nearby.sort((a, b) => {
    const distanceToA = calculateDistance(
      userLatitude,
      userLongitude,
      a.orgLat,
      a.orgLng,
    )
    const distanceToB = calculateDistance(
      userLatitude,
      userLongitude,
      b.orgLat,
      b.orgLng,
    )
    return distanceToA - distanceToB
  })

  console.info("Organizations sorted by distance:")
  console.table(
    sortedOrgs.map((item) => ({
      lat: item.orgLat,
      lng: item.orgLng,
      address: item.address,
      distance: item.distance,
    })),
  )

  const nearbyOrganizations = sortedOrgs
    .filter((item) => item.distance <= radiusInKm)
    .map((item) => item)

  return nearbyOrganizations
}

// Helper function to calculate the distance between two coordinates
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) {
  const dLat = toRadians(lat2 - lat1)
  const dLon = toRadians(lon2 - lon1)
  const lat1Rad = toRadians(lat1)
  const lat2Rad = toRadians(lat2)

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = EARTH_RADIUS * c

  return distance // Distance in kilometers
}

function toRadians(degrees: number) {
  return degrees * (Math.PI / 180)
}
