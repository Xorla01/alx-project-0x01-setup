import type { NextPage } from "next";
import Image from "next/image";
import { HERO_BACKGROUND, PROPERTYLISTINGSAMPLE } from "@/constants";
import FilterSection from "@/components/filters/FilterSection";
import PropertyCard from "@/components/common/Card";

const Home: NextPage = () => {
  return (
    <main className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] sm:h-[600px]">
        <Image
          src={HERO_BACKGROUND}
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <FilterSection />

      {/* Property Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard
              key={index} // using index as fallback, ideally use property.id
              name={property.name}
              price={property.price}
              rating={property.rating}
              image={property.image}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Home;
