import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto p-8 text-center">
      <div className="flex justify-center">
        {/* You can add more content here if needed */}
      </div>
      <div className="p-8">
        <Button className="bg-blue-500 text-white px-4 py-2 rounded">Click me</Button>
      </div>
      <p className="text-gray-500">About</p>
    </div>
  );
}
