import Volvo from "@/View/Volvo";
export default async function Home() {
  const volvo = await fetch("http://localhost:3001/api/cars.json");

  if (!volvo.ok) {
    throw new Error(`HTTP error! Status`);
  }
  const volvoData: VolvoType[] = await volvo.json();

  return (
    <main>
      <Volvo data={volvoData} />
    </main>
  );
}
