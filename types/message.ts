export type Message = {
  id: string;
  sessionId: string;
  senderId: string;
  senderRole: "mentor" | "student" | "system";
  content: string;
  createdAt: string;
};