import { useState } from "react";
import {
  Heart,
  MapPin,
  Gauge,
  DollarSign,
  ThumbsUp,
  Users,
} from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Tesla Model S",
    price: "$80,000",
    likes: 120,
    km: "15,000 km",
    location: "San Francisco, CA",
    seats: 5,
    owner: "1st Owner",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    name: "BMW i8",
    price: "$95,000",
    likes: 200,
    km: "22,000 km",
    location: "Los Angeles, CA",
    seats: 4,
    owner: "2nd Owner",
    image:
      "https://images.unsplash.com/photo-1750780439483-16f092fe9d7b?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Audi R8",
    price: "$120,000",
    likes: 320,
    km: "10,000 km",
    location: "Miami, FL",
    seats: 2,
    owner: "1st Owner",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    name: "Mercedes AMG GT",
    price: "$150,000",
    likes: 270,
    km: "18,500 km",
    location: "New York, NY",
    seats: 2,
    owner: "1st Owner",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Lamborghini Huracan",
    price: "$220,000",
    likes: 500,
    km: "8,000 km",
    location: "Las Vegas, NV",
    seats: 2,
    owner: "1st Owner",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 6,
    name: "Porsche 911",
    price: "$130,000",
    likes: 350,
    km: "12,500 km",
    location: "Chicago, IL",
    seats: 4,
    owner: "2nd Owner",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function CarListings() {
  const [likedCars, setLikedCars] = useState([]);

  const toggleLike = (id) => {
    setLikedCars((prev) =>
      prev.includes(id) ? prev.filter((carId) => carId !== id) : [...prev, id]
    );
  };

  return (
    <div className="px-6 py-10 mt-5 mb-5">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <div
            key={car.id}
            className="group rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="relative">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover"
              />
              <button
                onClick={() => toggleLike(car.id)}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-100"
              >
                <Heart
                  className={`h-5 w-5 ${
                    likedCars.includes(car.id)
                      ? "text-red-500 fill-red-500"
                      : "text-gray-600"
                  }`}
                />
              </button>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-lg font-bold text-green-600 flex items-center gap-1">
                <DollarSign className="h-4 w-4" /> {car.price}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <Gauge className="h-4 w-4" /> {car.km}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {car.location}
                </p>
                <p className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> {car.seats} Seats
                </p>
                <p className="flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4" /> {car.owner}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-500 text-sm">{car.likes} Likes</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
