import LocationList from "@pages/fetch/components/LocationList";

export default async function FetchPage() {
  const data = fetch("https://pokeapi.co/api/v2/location").then((res) =>
    res.json()
  );

  return (
    <div className="flex gap-16 flex-col items-center justify-center">
      <p>Fetch</p>
      <LocationList initialData={data}></LocationList>
    </div>
  );
}
