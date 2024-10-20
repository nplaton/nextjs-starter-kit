import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from 'lucide-react';

interface OperatingHoursProps {
  hours: {
    [key: string]: string;
  };
}

const OperatingHours = ({ hours }: OperatingHoursProps) => (
  <>
    <h2 className="text-2xl font-semibold mb-4">Hours of Operation</h2>
    <Tabs defaultValue="mon">
      <TabsList>
        {Object.keys(hours).map((day) => (
          <TabsTrigger key={day} value={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(hours).map(([day, hours]) => (
        <TabsContent key={day} value={day}>
          <Card>
            <CardContent className="p-4 flex items-center">
              <Clock className="h-5 w-5 text-gray-500 mr-2" />
              <span>{hours}</span>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  </>
);

export default OperatingHours;