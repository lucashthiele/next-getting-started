"use client";

import Button from "@components/button";
import { use, useState } from "react";

export default function LocationList({
  initialData,
}: {
  initialData: Promise<any>;
}) {
  const initialLocations = use(initialData);
  const [locations, setLocations] = useState(initialLocations.results);
  const [nextUrl, setNextUrl] = useState(initialLocations.next);
  const [previousUrl, setPreviousUrl] = useState(initialLocations.previous);
  const [isLoading, setIsLoading] = useState(false);

  function fetchNextLocations() {
    setIsLoading(true);
    locationsRequest(nextUrl);
  }
  function fetchPreviousLocations() {
    setIsLoading(true);
    locationsRequest(previousUrl);
  }

  async function locationsRequest(url: string) {
    const res = await fetch(url);
    const data = await res.json();
    setLocations(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setIsLoading(false);
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {locations.map((location: any) => (
              <li key={location.name}>{location.name}</li>
            ))}
          </ul>
          <div className="flex gap-8 flex-row">
            {previousUrl ? (
              <Button className="" onClick={fetchPreviousLocations}>
                Fetch Previous 20
              </Button>
            ) : null}
            {nextUrl ? (
              <Button onClick={fetchNextLocations}>Fetch Next 20</Button>
            ) : null}
          </div>
        </>
      )}
    </>
  );
}
