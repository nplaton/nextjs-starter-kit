'use client'

import React, { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import FacilityCard from '@/components/FacilityCard'
import { Facility } from '@/types'
import Map from '@/components/Map' // Added import for the map component
import FilterComponent from '@/components/FilterComponent' // Add this import

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams()
  const [facilities, setFacilities] = useState<Facility[]>([])
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 150,
    minSize: 0,
    maxSize: 50,
  });

  useEffect(() => {
    const location = searchParams.get('location')
    const date = searchParams.get('date')
    
    // Updated dummy data with Spanish locations
    setFacilities([
      {
        id: '1',
        name: 'Trasteros Plus Madrid',
        address: 'Calle de Alcalá 123, ' + (location || 'Madrid'),
        rating: 4.7,
        lat: 40.4168,
        lng: -3.7038,
        units: [
          { size: '5x5', price: 50, available: 3 },
          { size: '10x10', price: 100, available: 2 },
          { size: '10x15', price: 150, available: 1 },
        ]
      },
      {
        id: '2',
        name: 'Guardamuebles Barcelona',
        address: 'Avinguda Diagonal 456, ' + (location || 'Barcelona'),
        rating: 4.5,
        lat: 41.3851,
        lng: 2.1734,
        units: [
          { size: '5x10', price: 75, available: 2 },
          { size: '15x20', price: 200, available: 1 },
        ]
      },
      {
        id: '3',
        name: 'Almacenaje Seguro Valencia',
        address: 'Carrer de Colón 789, ' + (location || 'Valencia'),
        rating: 4.3,
        lat: 39.4699,
        lng: -0.3763,
        units: [
          { size: '8x8', price: 80, available: 4 },
          { size: '12x12', price: 120, available: 2 },
        ]
      },
      {
        id: '4',
        name: 'Espacio Extra Sevilla',
        address: 'Avenida de la Constitución 101, ' + (location || 'Sevilla'),
        rating: 4.6,
        lat: 37.3891,
        lng: -5.9845,
        units: [
          { size: '6x6', price: 60, available: 5 },
          { size: '10x12', price: 110, available: 3 },
        ]
      },
      {
        id: '5',
        name: 'Trasteros Económicos Málaga',
        address: 'Paseo del Parque 202, ' + (location || 'Mlaga'),
        rating: 4.2,
        lat: 36.7213,
        lng: -4.4214,
        units: [
          { size: '4x4', price: 40, available: 6 },
          { size: '8x10', price: 90, available: 2 },
        ]
      },
    ])
  }, [searchParams])

  useEffect(() => {
    if (mapRef.current && !map) {
      if (typeof google === 'undefined') {
        console.error('Google Maps API not loaded');
        return;
      }
      const newMap = new google.maps.Map(mapRef.current, {
        center: { lat: 40.4168, lng: -3.7038 }, // Centered on Madrid
        zoom: 6,
      });
      setMap(newMap);
    }
  }, [mapRef, map]);

  useEffect(() => {
    if (map && typeof google !== 'undefined') {
      facilities.forEach((facility) => {
        new google.maps.Marker({
          position: { lat: facility.lat, lng: facility.lng },
          map: map,
          title: facility.name,
        })
      })
    }
  }, [map, facilities])

  const handleSearch = (searchTerm: string, date: Date | undefined) => {
    // Implement search functionality here
    console.log('Searching for:', searchTerm, 'Date:', date)
  }

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    // Apply filters to facilities
    const filteredFacilities = facilities.filter(facility => {
      return facility.units.some(unit => {
        const [width, height] = unit.size.split('x').map(Number);
        const size = width * height;
        return (
          unit.price >= newFilters.minPrice &&
          (newFilters.maxPrice === 150 ? true : unit.price <= newFilters.maxPrice) &&
          size >= newFilters.minSize &&
          (newFilters.maxSize === 50 ? true : size <= newFilters.maxSize)
        );
      });
    });
    setFacilities(filteredFacilities);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl font-bold mb-6">Search Results for {searchParams.get('location') || 'All Locations'}</h1>
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
          <p className="text-sm text-gray-600 mt-2 text-center">Over 1000 stores in Spain</p>
        </div>
        <div className="sm:flex sm:space-x-4 mb-6">
          <FilterComponent filters={filters} onFilterChange={handleFilterChange} />
        </div>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="w-full md:w-1/2 md:pr-4 mb-8 md:mb-0">
            <div className="grid grid-cols-1 gap-6">
              {facilities.map((facility, index) => (
                <FacilityCard key={facility.id} facility={facility} index={index} />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <div ref={mapRef} className="w-full h-[600px] border border-gray-300 rounded-lg"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default SearchResults