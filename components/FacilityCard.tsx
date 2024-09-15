import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin } from 'lucide-react'
import { Facility } from '@/types'
import Image from 'next/image'

interface FacilityCardProps {
  facility: Facility;
  index: number;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility, index }) => {
  // Function to convert size to square meters and round to nearest whole number
  const convertToSquareMeters = (size: string): string => {
    const [width, height] = size.split('x').map(Number)
    const squareMeters = width * height * 0.092903
    
    // Round to nearest whole number
    const roundedMeters = Math.round(squareMeters)
    
    return `${roundedMeters}m²`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="flex">
            <div className="w-1/3 relative">
              <Image
                src="/placeholder-storage.jpg" // Replace with actual image path
                alt={facility.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-2/3 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{facility.name}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{facility.address}</span>
                  </div>
                </div>
                <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  <span className="font-semibold">{facility.rating.toFixed(1)}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Secure storage facility with 24/7 access and climate control.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Available Units:</h4>
                <div className="grid grid-cols-3 gap-2">
                  {facility.units.map((unit, idx) => (
                    <div key={idx} className="text-sm border rounded p-2 bg-gray-50">
                      <p className="font-bold">{convertToSquareMeters(unit.size)}</p>
                      <p>${unit.price}/mo</p>
                      <p className="text-xs text-gray-500">{unit.available} left</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold">${facility.units[0].price}</span>
                  <span className="text-sm text-gray-600">/month</span>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">View Details</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default FacilityCard