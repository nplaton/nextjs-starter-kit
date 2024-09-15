import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Search, MapPin, Calendar as CalendarIcon } from 'lucide-react'

interface SearchBarProps {
  onSearch: (searchTerm: string, date: Date | undefined) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm, date)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full p-2 max-w-4xl mx-auto shadow-lg">
      <div className="flex-grow flex items-center space-x-4">
        <div className="relative flex-grow">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input 
            placeholder="Where do you need storage?" 
            className="pl-10 py-6 rounded-full bg-transparent border-none" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <Button type="submit" size="icon" className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90">
        <Search className="h-5 w-5 text-white" />
      </Button>
    </form>
  )
}

export default SearchBar