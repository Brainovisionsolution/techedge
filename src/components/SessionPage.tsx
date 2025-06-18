// ─ src/pages/SessionPage.tsx ─
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type SessionInfo = {
  id: string;
  title: string;
  speakerImage: string;
  joinLink: string;
  startAt: string;
  description: string;
};

const SESSIONS: Record<string, SessionInfo> = {
  "essential-skills": {
    id: "essential-skills",
    title: "ESTP – AI & Essential Skills (Live Session)",
    speakerImage: "/logos/ChiefGuest.jpg",
    joinLink:
      "https://brainovision.org/live-class/national-level-workshop-estp-j1-2025/sh15290-dxrwej/jro-jkr/waiting",
    startAt: "2025-06-23T18:45:00+05:30",
    description:
      "Access to the session will be available after the countdown ends."
  }
};

const SessionPage = () => {
  const { id } = useParams<{ id: string }>();
  const session = SESSIONS[id ?? ""];

  const [secondsLeft, setSecondsLeft] = useState(() =>
    Math.max(
      0,
      Math.floor((new Date(session.startAt).getTime() - Date.now()) / 1000)
    )
  );

  useEffect(() => {
    if (secondsLeft === 0) return;
    const t = setInterval(
      () => setSecondsLeft((s) => Math.max(0, s - 1)),
      1000
    );
    return () => clearInterval(t);
  }, [secondsLeft]);

  if (!session) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl text-red-500">
        Session not found
      </div>
    );
  }

  const hh = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const mm = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");
  const isReady = secondsLeft === 0;

  const start = new Date(session.startAt);
  const formattedDate = start.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata"
  });
  const formattedTime = start.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata"
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6">
      {/* title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#00D1FF] mt-10 mb-6 text-center">
        {session.title}
      </h1>

      {/* speaker image */}
      <img
        src={session.speakerImage}
        alt="Session speaker"
        className="w-44 h-44 object-cover rounded-full border-4 border-[#FFD700] shadow-lg mb-4"
      />

      {/* session timings */}
      <div className="text-center text-white mb-6">
        <p className="text-sm uppercase tracking-wider text-gray-300">Session Timings</p>
        <p className="text-lg font-semibold mt-1">
          {formattedDate} • {formattedTime} IST
        </p>
      </div>

      {/* description */}
      <p className="max-w-2xl text-center text-gray-300 mb-10 leading-relaxed">
        {session.description}
      </p>

      {/* countdown */}
      {secondsLeft > 0 && (
        <div className="text-center mb-6">
          <p className="text-gray-300 mb-2 tracking-wide">Session starts in</p>
          <div className="text-5xl font-mono text-[#FFD700]">
            {hh}:{mm}:{ss}
          </div>
        </div>
      )}

      {/* join button */}
      <a
        href={isReady ? session.joinLink : "#"}
        onClick={(e) => !isReady && e.preventDefault()}
        aria-disabled={!isReady}
        className={`px-10 py-4 mb-10 inline-block text-xl font-semibold rounded-full transition-colors
          ${isReady
            ? "bg-[#00D1FF] text-black hover:bg-[#00D1FF]/90"
            : "bg-gray-500/60 text-gray-200 cursor-not-allowed"}`}
      >
        ➜ Join Live Session
      </a>

      {/* footer */}
      <p className="text-sm text-gray-400 text-center max-w-md">
        All participants will receive an AICTE‑endorsed certificate upon successful completion.
        For support, email&nbsp;
        <a
          href="mailto:connect@brainovision.in"
          className="underline hover:text-[#FFD700]"
        >
          connect@brainovision.in
        </a>
        .
      </p>
    </div>
  );
};

export default SessionPage;
