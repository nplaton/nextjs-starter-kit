import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Unit {
  size: string;
  price: number;
  available: number;
}

interface AvailableUnitsProps {
  units: Unit[];
}

const AvailableUnits = ({ units }: AvailableUnitsProps) => (
  <>
    <h2 className="text-2xl font-semibold mb-4">Available Units</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      {units.map((unit, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">{unit.size}</h3>
            <p className="text-gray-600 mb-2">{unit.price}€/month</p>
            <p className="text-sm text-gray-500">{unit.available} available</p>
            <Button className="w-full mt-4">Book Now</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </>
);

export default AvailableUnits;