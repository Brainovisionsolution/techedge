import React, { useState } from "react";

const CertificateChecker = () => {
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
        `https://script.google.com/macros/s/AKfycby0u5zwdujcgOH3aLMnsSz0lv1V6iLnHJyn66WFtjX4iNhkp1JZqCUpCKdKY7gY-Hc/exec?email=${encodeURIComponent(email)}`
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
    <div className="min-h-screen bg-gradient-to-br from-[#1E1656] to-[#322C70] px-4 py-10 flex flex-col items-center space-y-12">

      {/* Title */}
      <h1 className="mt-[100px] text-white text-4xl md:text-5xl font-bold text-center leading-tight animate-fadeIn">
        National-Level Workshop on Application Development <br className="hidden md:block" />
        with AI & Essential Skills (ESTP)
      </h1>

      <div className="flex flex-col md:flex-row gap-12 justify-center items-start w-full max-w-6xl">

        {/* Certificate Panel */}
        <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-full md:max-w-md">
          <h2 className="text-3xl font-bold text-center text-[#4A2CD4] mb-6">
            🎓 Certificate Download
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#4A2CD4] text-white py-3 rounded-md font-semibold hover:bg-[#3921A6] transition duration-200"
            >
              {loading ? "Downloading..." : "Download Certificate"}
            </button>
          </form>

          {result && (
            <div className="mt-6 text-center space-y-3 animate-fadeIn">
              <p className="text-green-600 font-medium">
                ✅ Certificate found for: {result.name}
              </p>
              <a
                href={result.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition duration-200"
                download
              >
                ⬇️ Download Certificate
              </a>
              {showCongrats && (
                <div className="mt-6 text-xl font-bold text-[#4A2CD4] animate-fadeIn">
                  🎉 Congratulations on your achievement!
                </div>
              )}
            </div>
          )}

          {notFound && (
            <p className="mt-6 text-red-500 text-center animate-fadeIn">
              ❌ Certificate not found. Please check the sheet below for your status.
            </p>
          )}
        </div>

        {/* Join Our Communities - Text Buttons */}
        <div className="w-full md:max-w-sm flex flex-col items-center justify-center">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-6 animate-fadeIn">
            🤝 Join Our Communities
          </h3>
          <div className="flex flex-wrap justify-center gap-4 animate-fadeIn">
            <a
              href="https://www.linkedin.com/in/praneethbabu2003"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#0A66C2] text-white rounded-full font-semibold hover:bg-[#084c99] transition duration-300"
            >
              🔗 LinkedIn (LI)
            </a>
            <a
              href="https://youtube.com/@praneethbabu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#FF0000] text-white rounded-full font-semibold hover:bg-[#cc0000] transition duration-300"
            >
              📺 YouTube (YT)
            </a>
            <a
              href="https://instagram.com/praneethbabu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full font-semibold hover:opacity-90 transition duration-300"
            >
              📸 Instagram (IG)
            </a>
            <a
              href="https://wa.me/919063611159"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#1ebc59] transition duration-300"
            >
              💬 WhatsApp (WA)
            </a>
          </div>
        </div>
      </div>

      {/* Google Sheet Embed */}
      <div className="w-full max-w-5xl mt-10 text-white">
        <h3 className="text-center text-xl font-semibold mb-4 text-yellow-400">
          📋 If you can't find your certificate above, please check your Host College Certificate Template Status Below :
        </h3>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-[#00D1FF]/20 h-[900px]">
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRD87_Sptnv3SkYR2Q2FnHcoW9-JA6E4_gylbz0G5u_HQf-qZleLJaYWZSale7uv0vRtlp4A7zMB1JK/pubhtml?gid=1247140652&amp;single=true&amp;widget=true&amp;headers=false"
            title="Certificate Status"
            className="w-full h-full"
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      {/* Fade In Animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default CertificateChecker;
