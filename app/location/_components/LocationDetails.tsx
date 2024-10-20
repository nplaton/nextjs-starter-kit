import { LocationType } from '@/types';
import { MapPin, Star } from 'lucide-react';
import LocationFeatures from './LocationFeatures';
import AvailableUnits from './AvailableUnits';
import LocationMap from './LocationMap';
import ContactInformation from './ContactInformation';
import OperatingHours from './OperatingHours';

interface LocationDetailsProps {
  location: LocationType;
}

const LocationDetails = ({ location }: LocationDetailsProps) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="md:col-span-2">
      <h1 className="text-3xl font-bold mb-4">{location.name}</h1>
      <div className="flex items-center mb-4">
        <MapPin className="h-5 w-5 text-gray-500 mr-2" />
        <span className="text-gray-600">{location.address}</span>
      </div>
      <div className="flex items-center mb-6">
        <Star className="h-5 w-5 text-yellow-400 fill-current" />
        <span className="ml-1 font-medium">{location.rating}</span>
        <span className="ml-1 text-gray-600">({location.reviewCount} reviews)</span>
      </div>
      <img 
        src={location.image}
        alt={location.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-700 mb-6">{location.description}</p>
      <LocationFeatures features={location.features} />
      <AvailableUnits units={location.units} />
    </div>
    <div>
      <LocationMap />
      <ContactInformation location={location} />
    </div>
    <div className="md:col-span-3">
      <OperatingHours hours={location.hours} />
    </div>
  </div>
);

export default LocationDetails;