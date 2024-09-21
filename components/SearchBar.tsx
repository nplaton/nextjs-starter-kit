import React, { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Search, MapPin, Calendar as CalendarIcon } from 'lucide-react'
import { LoadScript, Autocomplete } from '@react-google-maps/api'

interface SearchBarProps {
  onSearch: (location: string, date: Date | undefined) => void;
  initialLocation?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialLocation = '' }) => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [searchTerm, setSearchTerm] = useState(initialLocation)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const [location, setLocation] = useState(initialLocation)

  useEffect(() => {
    console.log('SearchBar mounted')
    console.log('API Key:', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
    setLocation(initialLocation)
    setSearchTerm(initialLocation)
  }, [initialLocation])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted with:', { searchTerm, date })
    onSearch(searchTerm, date)
  }

  const handlePlaceSelect = () => {
    console.log('Place selected')
    const place = autocompleteRef.current?.getPlace()
    console.log('Selected place:', place)
    if (place && place.formatted_address) {
      setSearchTerm(place.formatted_address)
    }
  }

  return (
    <LoadScript 
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!} 
      libraries={['places']}
      onLoad={() => console.log('Google Maps script loaded')}
      onError={(error) => console.error('Google Maps script error:', error)}
    >
      <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full p-2 max-w-4xl mx-auto shadow-lg">
        <div className="flex-grow flex items-center space-x-4">
          <div className="relative flex-grow">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Autocomplete
              onLoad={(autocomplete) => {
                console.log('Autocomplete loaded')
                autocompleteRef.current = autocomplete
              }}
              onPlaceChanged={handlePlaceSelect}
            >
              <Input 
                placeholder="Where do you need storage?" 
                className="pl-10 py-6 rounded-full bg-transparent border-none" 
                value={searchTerm}
                onChange={(e) => {
                  console.log('Input changed:', e.target.value)
                  setSearchTerm(e.target.value)
                }}
              />
            </Autocomplete>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="rounded-full">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? date.toLocaleDateString() : "Move-in date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => {
                  console.log('Date selected:', newDate)
                  setDate(newDate)
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <Button type="submit" size="icon" className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90">
          <Search className="h-5 w-5 text-white" />
        </Button>
      </form>
    </LoadScript>
  )
}
export default SearchBar
