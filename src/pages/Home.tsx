import React from 'react';
import ProgramCard from '../components/ProgramCard';
import { Brain, GraduationCap, Users, FileText, Send, Phone, CheckCircle2, ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 'java-fullstack',
    title: 'SHORT TERM TRAINING PROGRAM (STTP) ON JAVA FULL STACK BY USING REACT AND AI',
    status: 'completed',
    dates: '02nd to 24th JAN 2024',
    time: '07:00 PM to 09:00 PM',
    audience: 'Faculties & Students',
    hostFee: '14999',
    participantFee: '99'
  },
  {
    id: 'ai-faculty',
    title: 'NATIONAL LEVEL FACULTY DEVELOPMENT PROGRAM (FDP) ON ARTIFICIAL INTELLIGENCE (AI)',
    status: 'completed',
    dates: '17th - 21th, FEB 2025',
    time: '07:00 PM to 09:00 PM',
    audience: 'All Faculties',
    hostFee: '9999',
    participantFee: '1'
  },
  {
    id: 'essential-skills',
    title: 'INTERNATIONAL LEVEL ESSENTIAL SKILLS TRAINING PROGRAM (ESTP) FOR STUDENTS & FACULTY',
    status: 'active',
    dates: '07th - 11th, APR 2025',
    time: '07:00 PM to 08:30 PM',
    audience: 'All Students & Faculties',
    hostFee: '19999',
    participantFee: '49'
  },
  {
    id: 'career-dev',
    title: 'INTERNATIONAL LEVEL CAREER DEVELOPMENT PROGRAM ON SDG, ESG & INDUSTRY INNOVATIONS',
    status: 'coming_soon',
    dates: '18th - 23RD, AUG 2025',
    time: '07:00 PM to 08:30 PM',
    audience: 'All Students & Faculties',
    hostFee: '14999',
    participantFee: '99'
  },
  {
    id: 'gen-ai',
    title: 'NATIONAL LEVEL STUDENT WORKSHOP ON GENERATIVE - AI',
    status: 'coming_soon',
    dates: '10th - 15th, NOV 2025',
    time: '07:00 PM to 08:30 PM',
    audience: 'All Students & Faculties',
    hostFee: '9999',
    participantFee: '9'
  }
];

const processSteps = [
  {
    title: "College Registration",
    description: "Colleges register as host institutions",
    icon: GraduationCap
  },
  {
    title: "Student Enrollment",
    description: "Students register for the program",
    icon: Users
  },
  {
    title: "Program Delivery",
    description: "Live sessions via Zoom & YouTube",
    icon: Brain
  },
  {
    title: "Certification",
    description: "Receive recognized certificates",
    icon: FileText
  }
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="h-32 bg-white/10 backdrop-blur-md border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
              <div className="flex space-x-8">
                <img src="project/logoss\aiefrlogo.png" alt="AIEFR" className="h-16" />
                <img src="project\logoss\anuvadini.png" alt="ANUVADINI" className="h-16" />
                <img src="project\logoss\bovyellow.png" alt="BRAIN O VISION" className="h-16" />
                <img src="project\logoss\neat.png" alt="N.E.A.T" className="h-16" />
                <img src="project\logoss\2.png" alt="AICTE" className="h-16" />
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100%-8rem)] flex items-center">
            <div className="w-full text-center">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">
                Tech Edge Bootcamps
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Join our AICTE, AIEFR, ANUVADINI, N.E.A.T approved training programs and workshops
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#programs" className="px-8 py-3 bg-cyan-400 text-black rounded-full hover:bg-cyan-300 transition-colors font-semibold">
                  View Programs
                </a>
                <a href="#edu-plan" className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-colors font-semibold">
                  EDU-PLAN @ ₹3999
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Process Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Program Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 flex flex-col items-center text-center">
                  <step.icon className="h-12 w-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-cyan-400 h-8 w-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Programs Section */}
        <section id="programs" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map(program => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">For Host Colleges</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <GraduationCap className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <span>Recognition as a Technical Education Innovation Hub</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <span>College and Department Appreciation Certificates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <span>Enhanced Industry-Academia Collaboration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">For Participants</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <Brain className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <span>Hands-on Experience with Latest Technologies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <span>Internationally Recognized Certificates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <span>Networking Opportunities with Industry Experts</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center space-x-3">
                <Send className="h-5 w-5 text-yellow-400" />
                <span>connect@brainovision.in</span>
              </p>
              <p className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span>+91-90636 11159</span>
              </p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-300 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;