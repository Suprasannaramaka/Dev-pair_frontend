import { Message } from "@/hooks/useChat";
export default function MessageItem({ message }: { message: Message }) {
  if (message.type === "system") {
    return (
      <p className="text-center text-sm text-gray-500">
        {message.text}
      </p>
    );
  }
  return (
    <div className="mb-2">
      <span className="font-semibold">{message.sender}: </span>
      <span>{message.text}</span>
    </div>
  );
}
