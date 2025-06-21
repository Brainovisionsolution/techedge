// ─ src/pages/SessionPage.tsx ─
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type SessionInfo = {
  id: string;
  title: string;
  speakerImage: string;
  speakerTitle?: string;
  speakerName?: string;
  speakerDesignation?: string;
  speakerBio?: string;
  joinLink: string;
  description: string;
};

const SESSIONS: Record<string, SessionInfo> = {
  "essential-skills": {
    id: "essential-skills",
    title: "ESTP – AI & Essential Skills (Live Session)",
    speakerImage: "/logos/ChiefGuest.jpg",
    speakerTitle: "Chief Guest",
    speakerName: "I V S Ranganath",
    speakerDesignation:
      "Head – HR (India), Shriram Bioseed Genetics (DCM Shriram Ltd)",
    speakerBio:
      "",
    joinLink:
      "https://brainovision.org/live-class/national-level-workshop-estp-j1-2025/sh15290-dxrwej/jro-jkr/waiting",
    description:
      "Access to the session will be available after the countdown ends."
  }
};

/* ------------ programme constants ------------ */
const START_HHMM = "18:45";           // 06:45 PM IST
const END_HHMM   = "20:30";           // 08:30 PM IST
const PROGRAM_START = "2025-06-23";   // Day 1
const PROGRAM_DAYS  = 5;              // 23 – 27 Jun 2025
const IST_OFFSET    = "+05:30";

const dayMillis = 24 * 60 * 60 * 1000;

const SessionPage = () => {
  const { id } = useParams<{ id?: string }>();
  const session = SESSIONS[id ?? ""];

  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  if (!session) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl text-red-500">
        Session not found
      </div>
    );
  }

  /* ---------- work in IST ---------- */
  const tz = "Asia/Kolkata";
  const todayISO = new Date(now).toLocaleDateString("en-CA", { timeZone: tz }); // YYYY‑MM‑DD

  /* ---------- derive programme day ---------- */
  const programmeStartMid = new Date(`${PROGRAM_START}T00:00:00${IST_OFFSET}`).getTime();
  const todayMid          = new Date(`${todayISO}T00:00:00${IST_OFFSET}`).getTime();
  let dayIndex = Math.floor((todayMid - programmeStartMid) / dayMillis) + 1;

  // clamp: before programme → Day 1, after programme → last day
  if (dayIndex < 1) dayIndex = 1;
  if (dayIndex > PROGRAM_DAYS) dayIndex = PROGRAM_DAYS;

  /* ---------- session start & end for this day ---------- */
  const sessionStart = programmeStartMid + (dayIndex - 1) * dayMillis +
    timeStrToOffsetMillis(START_HHMM);
  const sessionEnd   = programmeStartMid + (dayIndex - 1) * dayMillis +
    timeStrToOffsetMillis(END_HHMM);

  const withinWindow = now >= sessionStart && now <= sessionEnd;

  /* ---------- countdown target ---------- */
  let target = sessionStart;
  if (now > sessionStart && now <= sessionEnd) {
    target = now;            // already started, show 0
  } else if (now > sessionEnd) {
    if (dayIndex < PROGRAM_DAYS) {
      target = sessionStart + dayMillis;
    } else {
      target = sessionEnd;   // programme over
    }
  }

  const diffSec = Math.max(0, Math.floor((target - now) / 1000));
  const dd = String(Math.floor(diffSec / 86400)).padStart(2, "0");
  const hh = String(Math.floor((diffSec % 86400) / 3600)).padStart(2, "0");
  const mm = String(Math.floor((diffSec % 3600) / 60)).padStart(2, "0");
  const ss = String(diffSec % 60).padStart(2, "0");

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-6 text-white">
      {/* title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#00D1FF] mt-8 mb-2 text-center">
        {session.title}
      </h1>

      {/* programme info */}
      <p className="text-sm text-gray-300">
        5 Days • 23 – 27 June 2025
      </p>
      <p className="text-sm text-gray-300 mb-6">
        Session Time: 06:45 PM – 08:30 PM
      </p>

      {/* speaker image */}
      <img
        src={session.speakerImage}
        alt="Speaker"
        className="w-44 h-44 object-cover rounded-full border-4 border-[#FFD700] shadow-lg mb-4"
      />

      {/* speaker info */}
      <div className="text-center mb-6">
        {session.speakerTitle && (
          <p className="text-[#FFD700] text-sm font-semibold uppercase tracking-widest">
            {session.speakerTitle}
          </p>
        )}
        {session.speakerName && (
          <p className="text-lg font-bold mt-1">{session.speakerName}</p>
        )}
        {session.speakerDesignation && (
          <p className="text-sm text-gray-300 mt-1">{session.speakerDesignation}</p>
        )}
      </div>

      {/* day number */}
      <p className="uppercase text-sm text-gray-300 tracking-widest mb-2">
        Day&nbsp;{dayIndex}
      </p>

      {/* countdown */}
      {diffSec > 0 && (
        <div className="text-center mb-6">
          <div className="text-5xl font-mono text-[#FFD700]">
            {dd} : {hh} : {mm} : {ss}
          </div>
          <p className="text-xs text-gray-300 mt-2">
            Days&nbsp;&nbsp;Hours&nbsp;&nbsp;Minutes&nbsp;&nbsp;Seconds
          </p>
        </div>
      )}

      {/* join button */}
      <a
        href={withinWindow ? session.joinLink : "#"}
        onClick={(e) => !withinWindow && e.preventDefault()}
        aria-disabled={!withinWindow}
        className={`px-10 py-4 mb-6 inline-block text-xl font-semibold rounded-full transition-colors
          ${
            withinWindow
              ? "bg-[#00D1FF] text-black hover:bg-[#00D1FF]/90"
              : "bg-gray-500/60 text-gray-200 cursor-not-allowed"
          }`}
      >
        ➜ Join Live Session
      </a>

      {/* note */}
      <p className="text-xs text-red-400 text-center max-w-sm mb-6">
        Note: This page is only for Faculty Coordinators (don’t share it).
        Button activates at 06:45 PM and closes after the session ends.
      </p>

      {/* description */}
      <p className="text-sm text-gray-400 text-center max-w-md mb-4">
        {session.description}
      </p>

      {/* speaker bio */}
      {session.speakerBio && (
        <p className="text-sm text-gray-400 text-justify max-w-2xl">
          {session.speakerBio}
        </p>
      )}
    </div>
  );
};

/* helper: HH:MM → millis past midnight */
function timeStrToOffsetMillis(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return (h * 60 + m) * 60 * 1000;
}

export default SessionPage;
