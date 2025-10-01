import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
// import { PLACEHOLDER_IMAGE } from "@/constants";

export default function Home() {
  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">ALX Listing App</h1>
        <p className="text-gray-600">A modern Airbnb clone listing page</p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {properties.map((property, idx) => ( */}
        {/* <Card
            key={idx}
            title={property.title}
            description={property.description}
            image={property.image}
          />
        ))} */}
      </main>

      <div className="mt-6 text-center">
        <Button label="Load More" onClick={() => alert("Load more clicked")} />
      </div>
    </div>
  );
}
