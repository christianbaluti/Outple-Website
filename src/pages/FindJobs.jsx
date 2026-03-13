import { useEffect } from "react";

export default function FindJobs() {
  useEffect(() => {
    window.location.href = "https://outple2.zohorecruit.eu/jobs/Careers";
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#432d7e] mx-auto mb-4"></div>
        <p className="text-gray-500">Redirecting to careers portal...</p>
      </div>
    </div>
  );
}