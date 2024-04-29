import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigate = ({ path, label }: { path: string; label: string }) => {
  return (
    <Link
      href={path}
      passHref
      className="flex text-base text-blue-800 items-center m-1"
    >
      {label}
      <span aria-label={`Navigate to ${label}`}>
        <Image
          className="m-1"
          src="chevron-small.svg"
          alt={`Navigate to ${label}`}
          width={15}
          height={15}
        />
      </span>
    </Link>
  );
};

const ActionFooter = ({ volvoId }: { volvoId: string }) => {
  return (
    <div className="flex justify-center items-center">
      <Navigate path={`learn/${volvoId}`} label={"Learn"} />
      <Navigate path={`shop/${volvoId}`} label={"Shop"} />
    </div>
  );
};

export default ActionFooter;
