import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface UnregisteredFacilityCardProps {
  title: string;
  rating: number | null;
  index: number;
  photoUrl: string;
}

const UnregisteredFacilityCard: React.FC<UnregisteredFacilityCardProps> = ({ title, rating, index, photoUrl}) => {
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
            <div className="w-1/3 relative h-32">
              <Image
                src={photoUrl}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="w-2/3 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{title}</h3>
                </div>
                {typeof rating === 'number' && (
                  <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="font-semibold">{rating.toFixed(1)}</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {title}
              </p>
              <div className="flex justify-end items-center">
                <Link href={`/location/${encodeURIComponent(title)}`} passHref>
                  <Button className="w-full">View Details</Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default UnregisteredFacilityCard
