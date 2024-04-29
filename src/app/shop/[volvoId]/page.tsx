import CarDetails from "@/View/Volvo/CarDetails";
import BackButton from "@/components/BackButton";
import { Card, CardContent } from "vcc-ui";

export default async function Learn({
  params,
}: {
  params: { volvoId: string };
}) {
  const { volvoId } = params;
  const API = await fetch("http://localhost:3001/api/cars.json");

  if (!API.ok) {
    throw new Error(`HTTP error! Status`);
  }
  const volvoData: VolvoType[] = await API.json();
  const filteredvolvo = volvoData?.filter((volvo) => volvoId === volvo.id);
  const volvo = filteredvolvo[0];

  return (
    <Card>
      <CardContent>
        <BackButton />
        <CarDetails {...{ volvo }} />
      </CardContent>
    </Card>
  );
}
