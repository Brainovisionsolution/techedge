import React from "react";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "919063611159";
  const message = "Hi Brainovision, I’m interested in your AI solutions.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967... (your full path here)" />
        <path d="M12.04 2.003c-5.523 0-10 4.477-10 10... (your full path here)" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
