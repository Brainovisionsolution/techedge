// ─ src/pages/SessionPage.tsx ─
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Video, Clock, Calendar, AlertCircle } from "lucide-react";

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
    speakerImage: "/logos/ChiefGuest1.jpg",
    speakerTitle: "Chief Guest",
    speakerName: "Mr. Bala Peddigari",
    speakerDesignation:
      "Chief Innovation Officer and Global Head – Technology Advisory Services, TSS Business Group",
    speakerBio: "",
    joinLink:
      "https://brainovision.org/live-class/national-level-workshop-estp-j5-2025/sh15290-ohiwba/xdq-a6x/waiting",
    description:
      "Access to the session will be available after the countdown ends.",
  },
};

/* ------------ programme constants ------------ */
const START_HHMM = "18:55";           // 06:45 PM IST
const END_HHMM = "20:30";             // 08:30 PM IST
const PROGRAM_START = "2025-06-23";   // Day 1
const PROGRAM_DAYS = 5;               // 23 – 27 June 2025
const IST_OFFSET = "+05:30";
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
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-md p-8 rounded-3xl bg-orange-50/50 border border-orange-200">
          <p className="text-xl font-bold text-gray-900 mb-2">Session Not Found</p>
          <p className="text-sm text-gray-600 mb-6">The live session requested could not be identified.</p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-6 py-3 rounded-xl shadow-md"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const tz = "Asia/Kolkata";
  const todayISO = new Date(now).toLocaleDateString("en-CA", { timeZone: tz });
  const programmeStartMid = new Date(`${PROGRAM_START}T00:00:00${IST_OFFSET}`).getTime();
  const todayMid = new Date(`${todayISO}T00:00:00${IST_OFFSET}`).getTime();
  let dayIndex = Math.floor((todayMid - programmeStartMid) / dayMillis) + 1;
  if (dayIndex < 1) dayIndex = 1;
  if (dayIndex > PROGRAM_DAYS) dayIndex = PROGRAM_DAYS;

  const sessionStart = programmeStartMid + (dayIndex - 1) * dayMillis + timeStrToOffsetMillis(START_HHMM);
  const sessionEnd = programmeStartMid + (dayIndex - 1) * dayMillis + timeStrToOffsetMillis(END_HHMM);
  const withinWindow = now >= sessionStart && now <= sessionEnd;

  let target = sessionStart;
  if (now > sessionStart && now <= sessionEnd) {
    target = now;
  } else if (now > sessionEnd) {
    target = dayIndex < PROGRAM_DAYS ? sessionStart + dayMillis : sessionEnd;
  }

  const diffSec = Math.max(0, Math.floor((target - now) / 1000));
  const dd = String(Math.floor(diffSec / 86400)).padStart(2, "0");
  const hh = String(Math.floor((diffSec % 86400) / 3600)).padStart(2, "0");
  const mm = String(Math.floor((diffSec % 3600) / 60)).padStart(2, "0");
  const ss = String(diffSec % 60).padStart(2, "0");

  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-4 sm:p-6 text-gray-900 pt-24 pb-16">
      {/* Back button */}
      <div className="w-full max-w-4xl mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Programs
        </Link>
      </div>

      <span className="inline-block text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-3">
        Interactive Live Classroom
      </span>

      <h1 className="text-2xl sm:text-4xl font-extrabold text-black text-center mb-3 max-w-2xl">
        {session.title}
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-600 mb-6">
        <span className="flex items-center gap-1.5 font-medium">
          <Calendar className="w-4 h-4 text-orange-500" />
          5 Days • 23 – 27 June 2025
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
        <span className="flex items-center gap-1.5 font-medium">
          <Clock className="w-4 h-4 text-orange-500" />
          06:55 PM – 08:30 PM (IST)
        </span>
      </div>

      <div className="relative mb-4">
        <img
          src={session.speakerImage}
          alt="Speaker"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-orange-400 shadow-md"
        />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold uppercase px-3 py-0.5 rounded-full shadow-xs">
          Live Host
        </div>
      </div>

      <div className="text-center mb-6 max-w-md">
        {session.speakerTitle && (
          <p className="text-orange-600 text-xs font-extrabold uppercase tracking-widest">
            {session.speakerTitle}
          </p>
        )}
        {session.speakerName && (
          <p className="text-lg font-bold text-black mt-1">{session.speakerName}</p>
        )}
        {session.speakerDesignation && (
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">{session.speakerDesignation}</p>
        )}
      </div>

      <span className="inline-block text-xs font-bold uppercase tracking-widest text-gray-700 bg-gray-100 px-4 py-1 rounded-full mb-4">
        Day {dayIndex}
      </span>

      {/* Countdown Block */}
      {diffSec > 0 && (
        <div className="flex gap-2 sm:gap-4 mb-8 text-center">
          {[
            { label: "Days", value: dd },
            { label: "Hours", value: hh },
            { label: "Minutes", value: mm },
            { label: "Seconds", value: ss },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center bg-orange-50/70 border border-orange-200 rounded-2xl px-3 py-2 sm:px-5 sm:py-3 shadow-xs min-w-[64px] sm:min-w-[80px]"
            >
              <div className="text-2xl sm:text-4xl font-mono font-extrabold text-black">
                {value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-orange-600 mt-0.5 tracking-wider uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Join Button */}
      <a
        href={withinWindow ? session.joinLink : "#"}
        onClick={(e) => !withinWindow && e.preventDefault()}
        aria-disabled={!withinWindow}
        className={`px-8 sm:px-10 py-3.5 sm:py-4 mb-4 inline-flex items-center gap-2 text-sm sm:text-base font-bold rounded-full transition-all ${
          withinWindow
            ? "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg cursor-pointer"
            : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
        }`}
      >
        <Video className="w-5 h-5" />
        Join Live Session
      </a>

      <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-center max-w-md mb-6">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
        <span>
          Note: This portal is reserved for Faculty Coordinators. The join link automatically activates at 06:55 PM IST.
        </span>
      </div>

      <p className="text-xs text-gray-500 text-center max-w-md mb-4">{session.description}</p>

      {session.speakerBio && (
        <p className="text-xs text-gray-600 text-justify max-w-xl leading-relaxed">{session.speakerBio}</p>
      )}
    </div>
  );
};

function timeStrToOffsetMillis(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return (h * 60 + m) * 60 * 1000;
}

export default SessionPage;
