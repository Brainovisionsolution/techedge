import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, AlertCircle, Download, ExternalLink, HelpCircle } from "lucide-react";

const FACULTY_MODE = {
  label: "Faculty Coordinators",
  heading:
    "National Level Faculty Development Program (FDP) on Generative AI",
  apiURL:
    "https://script.google.com/macros/s/AKfycbx7HoPh8JW78KVBpZdoDNKYZBFGtzJXDYkDnNCCsaq3v7AMwbwhBudU4M1BLtUffW3M/exec",
  sheetURL: "",
};

const FacultyCertificateChecker = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<null | {
    name: string;
    certificateLink: string;
  }>(null);
  const [loading, setLoading] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setNotFound(false);
    setShowCongrats(false);

    try {
      const response = await fetch(
        `${FACULTY_MODE.apiURL}?email=${encodeURIComponent(email)}`
      );
      const data = await response.json();

      if (data.success) {
        setResult({
          name: data.name,
          certificateLink: data.certificateLink,
        });
        setTimeout(() => setShowCongrats(true), 600);
      } else {
        setNotFound(true);
      }
    } catch (err) {
      alert("⚠️ Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 pt-24 pb-16 flex flex-col items-center space-y-10 relative">
      {/* Back button */}
      <div className="w-full max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Programs
        </Link>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-3">
          Faculty Development Program
        </span>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight">
          {FACULTY_MODE.heading}
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Official Credential Verification & Certificate Retrieval Portal
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-5xl">
        {/* Certificate Panel */}
        <div className="bg-white text-gray-900 p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-md w-full md:max-w-md flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4 text-2xl">
              🎓
            </div>
            <h2 className="text-2xl font-extrabold text-center text-black mb-1">
              Certificate Download
            </h2>
            <p className="text-xs text-center text-gray-500 mb-6">
              Enter your registered faculty email to download your certified completion credential.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                  Registered Faculty Email
                </label>
                <input
                  type="email"
                  placeholder="faculty@college.edu.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-500 text-gray-900 transition-all text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-white py-3.5 rounded-xl font-bold shadow-md transition-all cursor-pointer disabled:opacity-50 text-sm"
              >
                {loading ? "Searching Records..." : "Search & Download Certificate"}
              </button>
            </form>

            {result && (
              <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <p className="text-emerald-700 font-bold text-sm flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Certificate found for: {result.name}
                </p>
                <a
                  href={result.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all"
                  download
                >
                  <Download className="w-4 h-4" /> Download Certificate
                </a>
                {showCongrats && (
                  <div className="text-sm font-extrabold text-orange-600 pt-1">
                    🎉 Congratulations on completing the FDP!
                  </div>
                )}
              </div>
            )}

            {notFound && (
              <div className="mt-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-center">
                <p className="text-red-600 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                  Certificate not found for this email. Please check spelling or submit an inquiry.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Join Communities */}
        <div className="bg-gradient-to-br from-orange-50/60 via-amber-50/40 to-white rounded-3xl border border-orange-200/80 p-8 sm:p-10 shadow-sm w-full md:max-w-md flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4 text-2xl">
              🤝
            </div>
            <h3 className="text-2xl font-extrabold text-black text-center mb-1">
              Join Our Communities
            </h3>
            <p className="text-xs text-center text-gray-600 mb-6">
              Connect with over 100,000+ educators, engineers, and mentors nationwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://in.linkedin.com/company/brainovision"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 hover:border-blue-400 text-gray-800 rounded-xl font-bold text-xs shadow-xs hover:shadow-sm transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#0A66C2]"></span>
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@brainovision"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 hover:border-red-400 text-gray-800 rounded-xl font-bold text-xs shadow-xs hover:shadow-sm transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF0000]"></span>
                YouTube
              </a>
              <a
                href="https://www.instagram.com/brainovision/#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 hover:border-pink-400 text-gray-800 rounded-xl font-bold text-xs shadow-xs hover:shadow-sm transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#E1306C]"></span>
                Instagram
              </a>
              <a
                href="https://wa.me/919063611159"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 hover:border-green-400 text-gray-800 rounded-xl font-bold text-xs shadow-xs hover:shadow-sm transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-orange-200/60 text-center">
            <span className="text-xs text-gray-500 font-medium">Need immediate verification assistance?</span>
            <p className="text-xs font-bold text-orange-600 mt-1">Direct Helpline: +91 90636 11159</p>
          </div>
        </div>
      </div>

      {/* Certificate Issue Form */}
      <div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfLmUn0uUmVnmwI-t4sJHb3Z4bL8ozBwXFDof8oz9rhFb4wvQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 font-bold py-3 px-6 rounded-2xl shadow-xs transition-all text-sm"
        >
          <HelpCircle className="w-4 h-4 text-amber-700" />
          Have any certificate-related issues? Submit query form here
          <ExternalLink className="w-3.5 h-3.5 text-amber-700" />
        </a>
      </div>
    </div>
  );
};

export default FacultyCertificateChecker;

