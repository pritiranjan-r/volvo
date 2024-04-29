import Image from "next/image";
import React from "react";

const CarDetails = ({ volvo }: { volvo: VolvoType }) => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <p className="text-gray-400 text-sm">{volvo?.bodyType}</p>
      <p className=" text-base">
        <strong>{volvo?.modelName}</strong> <span>{volvo?.modelType}</span>
      </p>
      <img src={volvo?.imageUrl} alt={volvo.modelName} width={"100%"} />
    </div>
  );
};

export default CarDetails;
