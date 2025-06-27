import React, { useState, useEffect } from "react";

const CertificateChecker = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<null | {
    name: string;
    certificateLink: string;
  }>(null);
  const [loading, setLoading] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setShowCongrats(false);

    try {
      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbxVXt_auIbYiMmufAJf4uF6ihJ6RbZNMsnG_WcX4-Q6sZrgetQPW5RGZKVYy_cXi8IA3Q/exec?email=${encodeURIComponent(email)}`
      );

      const data = await response.json();
      if (data.success) {
        setResult({
          name: data.name,
          certificateLink: data.certificateLink,
        });
        setTimeout(() => setShowCongrats(true), 600); // Delay for animation
      } else {
        alert("❌ No certificate found.");
      }
    } catch (err) {
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1656] to-[#322C70] flex items-center justify-center px-4">
      <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#4A2CD4] mb-6">
          🎓 Certificate Download
        </h1>

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
            className="w-full bg-[#4A2CD4] text-white py-3 rounded-md hover:bg-[#3921A6] transition duration-200 font-semibold"
            disabled={loading}
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
      </div>

      {/* Fade-in animation styles */}
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
