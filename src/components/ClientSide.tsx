"use client";
import { useFlag } from "@unleash/nextjs/client";

export const ClientSideCard = () => {
  const enabled = useFlag("nextjs-example");

  return (
    <div className="flex flex-col items-center justify-center w-64 h-96 p-4 m-4 bg-white rounded-xl shadow-md dark:bg-gray-800">
      Enabled: {enabled ? "true" : "false"}
    </div>
  );
};
