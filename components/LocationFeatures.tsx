import { Badge } from "@/components/ui/badge";

interface LocationFeaturesProps {
  features: string[];
}

const LocationFeatures = ({ features }: LocationFeaturesProps) => (
  <>
    <h2 className="text-2xl font-semibold mb-4">Features</h2>
    <div className="flex flex-wrap gap-2 mb-6">
      {features.map((feature, index) => (
        <Badge key={index} variant="secondary">{feature}</Badge>
      ))}
    </div>
  </>
);

export default LocationFeatures;