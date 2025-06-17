// ─ src/pages/SessionPage.tsx ─
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type SessionInfo = {
  id: string;
  title: string;
  speakerImage: string;
  joinLink: string;
  startAt: string;      // ISO date‑time
  description: string;
  agenda: string[];
};

const SESSIONS: Record<string, SessionInfo> = {
  "essential-skills": {
    id: "essential-skills",
    title: "ESTP – AI & Essential Skills (Live)",
    speakerImage: "/logos/swami.jpg",
    joinLink: "https://zoom.us/j/xxxxxxxxxx",   // ← real link here
    startAt: "2025-06-16T19:00:00+07:037",

    // NEW ‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
    description:
      "A 5‑day immersive workshop that blends essential soft‑skills with practical AI application building. Perfect for students, faculty, and professionals preparing for the future of work.",
    agenda: [
      "Day 1  •  Kick‑off & Goal‑setting",
      "Day 2  •  Communication & Collaboration skills",
      "Day 3  •  Low‑code AI app prototype (live build)",
      "Day 4  •  Prompt‑engineering & Generative‑AI hacks",
      "Day 5  •  Capstone demo & certificate briefing"
    ]
    // ‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑‑
  }
};

const SessionPage = () => {
  const { id } = useParams<{ id: string }>();
  const session = SESSIONS[id ?? ""];

  /** ----------------  COUNTDOWN  ---------------- **/
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

  /** --------------  NOT FOUND Fallback ------------- **/
  if (!session) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl text-red-500">
        Session not found
      </div>
    );
  }

  /** --------------  TIME FORMAT ------------- **/
  const hh = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const mm = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6">
      {/* title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#00D1FF] mt-10 mb-6 text-center">
        {session.title}
      </h1>

      {/* image */}
      <img
        src={session.speakerImage}
        alt="Session speaker"
        className="w-44 h-44 object-cover rounded-full border-4 border-[#FFD700] shadow-lg mb-6"
      />

      {/* description */}
      <p className="max-w-2xl text-center text-gray-300 mb-10 leading-relaxed">
        {session.description}
      </p>

      {/* countdown or join button */}
      {secondsLeft > 0 ? (
        <div className="text-center mb-10">
          <p className="text-gray-300 mb-2 tracking-wide">Session starts in</p>
          <div className="text-5xl font-mono text-[#FFD700]">
            {hh}:{mm}:{ss}
          </div>
        </div>
      ) : (
        <a
          href={session.joinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 mb-10 inline-block bg-[#00D1FF] text-black text-xl font-semibold rounded-full hover:bg-[#00D1FF]/90 transition-colors"
        >
          ➜ Join Live Session
        </a>
      )}

      {/* agenda */}
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-lg border border-[#00D1FF]/20 p-6 mb-12">
        <h2 className="text-xl font-semibold text-[#FFD700] mb-4 text-center">
          Workshop Agenda
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {session.agenda.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* footer note */}
      <p className="text-sm text-gray-400 text-center max-w-md">
        All participants will receive an AICTE‑endorsed certificate upon
        successful completion. For support, email&nbsp;
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
