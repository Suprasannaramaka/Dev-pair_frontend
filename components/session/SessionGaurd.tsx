import { useSession } from "@/components/context/SessionContext";

export default function SessionGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { state } = useSession();

  if (state === "connecting")
    return <p className="text-center">Connecting...</p>;

  if (state === "disconnected")
    return <p className="text-center text-red-500">Disconnected</p>;

  return <>{children}</>;
}
