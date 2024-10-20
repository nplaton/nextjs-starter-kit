'use client'

import React, { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import UnregisteredFacilityCard from '@/app/search-results/_components/UnregisteredFacilityCard'
import { Loader } from '@googlemaps/js-api-loader'
import Image from 'next/image'

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams()
  const [facilities, setFacilities] = useState<Array<{ title: string; rating: number | null; latitude: number; longitude: number; address: string; photoUrl: string }>>([])
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false)

  const initialLocation = searchParams?.get('location') || ''

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await fetch('/api/facilities')
        if (!response.ok) {
          throw new Error('Failed to fetch facilities')
        }
        const data = await response.json()
        
        // Add logger here
        // console.log('Fetched facilities data:', JSON.stringify(data, null, 2))
        
        const transformedData = data.map((facility: any) => ({
          title: facility.title,
          rating: typeof facility.rating === 'number' ? facility.rating : null,
          latitude: facility.latitude,
          longitude: facility.longitude,
          address: facility.address,
          photoUrl: facility.photoUrl || '' // Add default value if photoUrl is not present
        }))
        setFacilities(transformedData)
      } catch (error) {
        console.error('Error fetching facilities:', error)
        // Handle error (e.g., show error message to user)
      }
    }

    fetchFacilities()
  }, [])

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      version: "weekly",
    })

    loader.load().then(() => {
      setGoogleMapsLoaded(true)
      setIsMapLoaded(true)
    }).catch(e => {
      console.error('Error loading Google Maps API:', e)
    })
  }, [])

  useEffect(() => {
    if (mapRef.current && !map && isMapLoaded && googleMapsLoaded) {
      const newMap = new google.maps.Map(mapRef.current, {
        center: { lat: 40.4168, lng: -3.7038 }, // Centered on Madrid
        zoom: 6,
      })
      setMap(newMap)
    }
  }, [mapRef, map, isMapLoaded, googleMapsLoaded])

  useEffect(() => {
    if (map && googleMapsLoaded && facilities.length > 0) {
      facilities.forEach((facility) => {        
        const packageEmoji = '📦'; // Unicode for package emoji
        
        const marker = new google.maps.Marker({
          position: { lat: facility.latitude, lng: facility.longitude },
          map: map,
          icon: {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <text x="20" y="20" font-family="Arial" font-size="30" text-anchor="middle" dominant-baseline="central">${packageEmoji}</text>
              </svg>
            `)}`,
            scaledSize: new google.maps.Size(40, 40),
            anchor: new google.maps.Point(20, 20),
          }
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 200px;">
              <h3 style="font-weight: bold; margin-bottom: 5px;">${facility.name}</h3>
              <p style="font-size: 12px; margin-bottom: 5px;">${facility.address}</p>
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    }
  }, [map, facilities, googleMapsLoaded])

  const handleSearch = (searchTerm: string, date: Date | undefined) => {
    // Implement search functionality here
    console.log('Searching for:', searchTerm, 'Date:', date)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} initialLocation={initialLocation} />
          <p className="text-sm text-gray-600 mt-2 text-center">Over 1000 stores in Spain</p>
        </div>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="w-full md:w-1/2 md:pr-4 mb-8 md:mb-0">
            <div className="grid grid-cols-1 gap-6">
              {facilities.map((facility, index) => (
                <UnregisteredFacilityCard
                  key={index}
                  title={facility.title}
                  rating={facility.rating}
                  index={index}
                  photoUrl={facility.photoUrl}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            {isMapLoaded && googleMapsLoaded ? (
              <div ref={mapRef} className="w-full h-[600px] border border-gray-300 rounded-lg"></div>
            ) : (
              <div className="w-full h-[600px] border border-gray-300 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/map-placeholder.jpg"
                  alt="Map placeholder"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default SearchResults
