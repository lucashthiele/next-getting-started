import Button from "@/components/button";

export default function Home() {
  return (
    <div className="flex gap-16 flex-col items-center justify-center">
      <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Getting Started Next
      </h2>
      <div className="flex flex-row gap-8 items-center justify-center">
        <Button redirectTo="/settings">Settings</Button>
        <Button redirectTo="/image">
          Image
        </Button>
        <Button redirectTo="/fetch">
          Fetch
        </Button>
      </div>
    </div>
  );
}
