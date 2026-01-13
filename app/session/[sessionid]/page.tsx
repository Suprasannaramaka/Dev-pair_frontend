import ChatPanel from "@/components/chat/ChatPanel";
import CodeEditor from "@/components/editor/CodeEditor";
export default function SessionPage({
  params,
}: {
  params: { sessionId: string };
}) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex">
        <div className="flex-1">
        <CodeEditor sessionId={params.sessionId} user={student}/>
        </div>
        </div>
        </div>
  );
}
