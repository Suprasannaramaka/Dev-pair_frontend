import {Message} from "@/types/message";
import SystemMessage from "./SystemMessage";
export default function MessageItem({ message }: { message: Message }) {
  if (message.senderRole === "system") {
    return (
      <SystemMessage message={message}/>
    );
  }
  return (
    <div className="mb-2">
      <span className="font-semibold">{message.senderRole}:</span>
      {""}
      <span>{message.content}</span>
    </div>
  );
}
