import { Message } from "@/types/message";

export default function SystemMessage({ message }: { message: Message }) {
  return (
    <div className="my-2 text-center">
      <span className="text-xs text-gray-500 italic">
        {message.content}
      </span>
    </div>
  );
}
