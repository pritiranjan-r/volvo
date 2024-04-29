"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="border-black border rounded-lg p-2 m-2 w-24"
      tabIndex={0}
      onClick={() => router?.back()}
    >
      Back
    </button>
  );
};

export default BackButton;
