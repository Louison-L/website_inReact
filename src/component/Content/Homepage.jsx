/*import React from 'react'*/;
import { Card, CardContent } from '@/components/ui/card';

const TravelPlannerHome = () => {
  const featuredDestinations = [
    {
      id: 1,
      title: "Paris, France",
      description: "Explore the city of lights",
      price: "From $799",
      duration: "7 Days"
    },
    {
      id: 2,
      title: "Bali, Indonesia",
      description: "Paradise island getaway",
      price: "From $899",
      duration: "10 Days"
    },
    {
      id: 3,
      title: "Swiss Alps",
      description: "Mountain adventure awaits",
      price: "From $999",
      duration: "8 Days"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as About page */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center">
          <img 
            src="/api/placeholder/50/50" 
            alt="Holiday Planners Logo" 
            className="h-12"
          />
          <span className="ml-2 text-2xl font-bold">
            <span className="text-yellow-600">Holiday</span>
            <span className="text-gray-800">Planners</span>
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition">
            RESERVE
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src="/api/placeholder/1920/600"
          alt="Travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-serif mb-6">Discover Your World</h1>
            <p className="text-xl mb-8">Your journey begins with us</p>
            <button className="px-8 py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition transform hover:scale-105">
              Start Planning
            </button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-4xl mx-auto -mt-16 relative z-10 px-4">
        <Card className="bg-white shadow-xl">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Destination</label>
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Check In</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Check Out</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full p-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition">
                  Search
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition">
                <img
                  src={`/api/placeholder/400/300`}
                  alt={destination.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-600 font-medium">{destination.price}</span>
                    <span className="text-gray-500">{destination.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Travel</h3>
              <p className="text-gray-600">Your safety is our top priority with proper protocols in place</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">We offer competitive rates and exclusive deals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Booking</h3>
              <p className="text-gray-600">Easy and fast booking process with instant confirmation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-yellow-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-serif mb-6">Suscribe to Our NewsLetter</h2>
          <p className="mb-8">Get the latest updates and special offers delivered directly to your inbox</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-md text-gray-800 min-w-[300px]"
            />
            <button className="px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelPlannerHome;