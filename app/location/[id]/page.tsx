import { Location } from '@/types';
import LocationDetails from '@/components/LocationDetails';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// This would typically come from an API or database
const getLocationData = (id: string): Location => {
  // Fetch data based on id
  return {
    id: "1",
    name: "Trasteros Plus Madrid",
    address: "Calle de Alcalá 123, 28009 Madrid, Spain",
    rating: 4.8,
    reviewCount: 120,
    image: "https://source.unsplash.com/random/800x400?storage,madrid",
    description: "Trasteros Plus Madrid offers secure and convenient storage solutions in the heart of Madrid. With 24/7 access, climate-controlled units, and state-of-the-art security, we ensure your belongings are safe and accessible whenever you need them.",
    features: ["24/7 Access", "Climate Controlled", "Security Cameras", "On-site Manager", "Drive-up Access"],
    units: [
      { size: "5m²", price: 50, available: 3 },
      { size: "10m²", price: 100, available: 2 },
      { size: "15m²", price: 150, available: 1 },
    ],
    hours: {
      mon: "6:00 AM - 10:00 PM",
      tue: "6:00 AM - 10:00 PM",
      wed: "6:00 AM - 10:00 PM",
      thu: "6:00 AM - 10:00 PM",
      fri: "6:00 AM - 10:00 PM",
      sat: "8:00 AM - 8:00 PM",
      sun: "8:00 AM - 8:00 PM",
    },
    phone: "+34 912 345 678",
    email: "info@trasterosplusmadrid.es",
    website: "https://www.trasterosplusmadrid.es",
  };
};

export default function LocationPage({ params }: { params: { id: string } }) {
  const location = getLocationData(params.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16 md:mt-24"> {/* Added margin-top here */}
        <div className="container mx-auto px-4 py-12"> {/* Increased padding-y */}
          <LocationDetails location={location} />
        </div>
      </main>
      <Footer />
    </div>
  );
}