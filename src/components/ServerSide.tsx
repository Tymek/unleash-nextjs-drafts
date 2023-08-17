import { flag } from "@unleash/nextjs";
import { cookies } from "next/headers";

export const ServerSideCard = async () => {
  const sessionId =
    cookies().get("unleash")?.value ||
    `${Math.floor(Math.random() * 1_000_000_000)}`;
  const { enabled, variant, error } = await flag(
    "nextjs-example",
    { sessionId },
    { fetchOptions: { next: { revalidate: 1 } } }
  );

  return (
    <div className="flex flex-col items-center justify-center w-64 h-96 p-4 m-4 bg-white rounded-xl shadow-md dark:bg-gray-800">
      Enabled: {enabled ? "true" : "false"}
    </div>
  );
};
