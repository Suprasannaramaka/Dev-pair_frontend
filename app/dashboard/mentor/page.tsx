export default function MentorDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Mentor Dashboard</h1>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded">Create Session</button>
       <div className="mt-6">
     <h2 className="font-semibold">Your Sessions</h2>
     <p>No Sessions</p>
       </div>
    </div>
  );
}