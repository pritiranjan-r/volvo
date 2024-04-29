import { Card, CardContent } from "vcc-ui";
import ActionFooter from "./ActionFooter";
import CarDetails from "./CarDetails";

const VolvoCar = ({ volvo }: { volvo: VolvoType }) => {
  return (
    <div className="col-auto  ">
      <Card>
        <CardContent>
          <CarDetails {...{ volvo }} />
          <ActionFooter volvoId={volvo?.id} />
        </CardContent>
      </Card>
    </div>
  );
};

export default VolvoCar;
