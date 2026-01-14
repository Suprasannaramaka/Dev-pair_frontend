export type Session = {
  id: string;
  mentorId: string;
  studentId?: string;
  title: string;
  status: "waiting" | "active" | "ended";
  createdAt: string;
};
