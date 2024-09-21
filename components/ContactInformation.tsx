import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, ExternalLink } from 'lucide-react';
import { LocationType } from '@/types';

interface ContactInformationProps {
  location: LocationType;
}

const ContactInformation = ({ location }: ContactInformationProps) => (
  <Card>
    <CardContent className="p-4">
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
      <div className="space-y-3">
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-gray-500 mr-2" />
          <span>{location.phone}</span>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-gray-500 mr-2" />
          <span>{location.email}</span>
        </div>
        <div className="flex items-center">
          <ExternalLink className="h-5 w-5 text-gray-500 mr-2" />
          <a href={location.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Visit Website
          </a>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ContactInformation;