"use client";

export default function TranscriptPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <button 
        onClick={() => window.history.back()} 
        className="p-2 m-2 rounded bg-gray-200 hover:bg-gray-300 self-start"
      >
        ← Back
      </button>
      <embed
        src="/Transcript.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}
