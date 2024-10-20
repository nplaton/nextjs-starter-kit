import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LocationMap = () => (
  <Card className="mb-6">
    <CardContent className="p-4">
      <h2 className="text-xl font-semibold mb-4">Location</h2>
      <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-gray-500">Interactive Map</span>
      </div>
      <Button className="w-full">Get Directions</Button>
    </CardContent>
  </Card>
);

export default LocationMap;