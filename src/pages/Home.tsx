import React from 'react';
import ProgramCard from '../components/ProgramCard';
import { Brain, GraduationCap, Users, FileText, Send, Phone, CheckCircle2, ArrowRight, Trophy, Building, Globe2, Award, Laptop, BookOpen, Presentation, Target, Lightbulb, Rocket } from 'lucide-react';

const programs = [
  {
    id: 'java-fullstack',
    title: 'SHORT TERM TRAINING PROGRAM (STTP) ON JAVA FULL STACK BY USING REACT AND AI',
    status: 'completed',
    dates: '02nd to 24th JAN 2024',
    time: '07:00 PM to 09:00 PM',
    audience: 'Faculties & Students',
    hostFee: '14999',
    participantFee: '99',
    mode: 'Virtual (Zoom & YouTube Live)'
  },
  {
    id: 'ai-faculty',
    title: 'NATIONAL LEVEL FACULTY DEVELOPMENT PROGRAM (FDP) ON ARTIFICIAL INTELLIGENCE (AI)',
    status: 'active',
    dates: '17th - 21th, FEB 2025',
    time: '07:00 PM to 09:00 PM',
    audience: 'All Faculties',
    hostFee: '9999',
    participantFee: '1',
    mode: 'Virtual (Zoom & YouTube Live)'
  },
  {
    id: 'essential-skills',
    title: 'INTERNATIONAL LEVEL ESSENTIAL SKILLS TRAINING PROGRAM (ESTP) FOR STUDENTS & FACULTY',
    status: 'coming_soon',
    dates: '07th - 11th, APR 2025',
    time: '07:00 PM to 08:30 PM',
    audience: 'All Students & Faculties',
    hostFee: '19999',
    participantFee: '49',
    mode: 'Virtual (Zoom & YouTube Live)'
  },
  {
    id: 'career-dev',
    title: 'INTERNATIONAL LEVEL CAREER DEVELOPMENT PROGRAM ON SDG, ESG & INDUSTRY INNOVATIONS',
    status: 'coming_soon',
    dates: '18th - 23RD, AUG 2025',
    time: '07:00 PM to 08:30 PM',
    audience: 'All Students & Faculties',
    hostFee: '14999',
    participantFee: '99',
    mode: 'Virtual (Zoom & YouTube Live)'
  },
  {
    id: 'gen-ai',
    title: 'NATIONAL LEVEL STUDENT WORKSHOP ON GENERATIVE - AI',
    status: 'coming_soon',
    dates: '10th - 15th, NOV 2025',
    time: '07:00 PM to 08:30 PM',
    audience: 'All Students & Faculties',
    hostFee: '9999',
    participantFee: '9',
    mode: 'Virtual (Zoom & YouTube Live)'
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

const achievements = [
  {
    number: "50+",
    text: "Training Programs",
    icon: Brain
  },
  {
    number: "1000+",
    text: "Partner Colleges",
    icon: Building
  },
  {
    number: "100,000+",
    text: "Students Trained",
    icon: Users
  },
  {
    number: "20+",
    text: "Countries Reached",
    icon: Globe2
  }
];

const hostBenefits = [
  {
    icon: Trophy,
    title: "Recognition & Prestige",
    description: "Establish your institution as a Technical Education Innovation Hub"
  },
  {
    icon: Award,
    title: "Official Certificates",
    description: "Receive College and Department Appreciation Certificates"
  },
  {
    icon: Users,
    title: "Network Growth",
    description: "Enhanced Industry-Academia Collaboration opportunities"
  },
  {
    icon: Laptop,
    title: "Digital Presence",
    description: "Featured on our website and promotional materials"
  },
  {
    icon: BookOpen,
    title: "Knowledge Repository",
    description: "Access to recorded sessions and training materials"
  },
  {
    icon: Presentation,
    title: "Hosting Rights",
    description: "Exclusive rights to host future programs"
  }
];

const participantBenefits = [
  {
    icon: Brain,
    title: "Hands-on Experience",
    description: "Practical experience with cutting-edge technologies"
  },
  {
    icon: Award,
    title: "Certification",
    description: "Internationally recognized certificates"
  },
  {
    icon: Target,
    title: "Career Growth",
    description: "Enhanced employability and career prospects"
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with industry experts and peers"
  },
  {
    icon: Lightbulb,
    title: "Innovation Skills",
    description: "Learn the latest industry trends and innovations"
  },
  {
    icon: Rocket,
    title: "Project Experience",
    description: "Work on real-world projects and case studies"
  }
];

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[url('/logos/TechEdgeBootcampsBanner.png')] bg-cover bg-center opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          {/* Title First */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] via-[#00D1FF] to-[#00D1FF] text-transparent bg-clip-text">
              Tech Edge Bootcamps
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Join our AICTE, AIEFR, ANUVADINI, N.E.A.T approved training programs and workshops
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#programs" className="px-8 py-3 bg-[#00D1FF] text-black rounded-full hover:bg-[#00D1FF]/90 transition-colors font-semibold">
                View Programs
              </a>
              <a href="#edu-plan" className="px-8 py-3 bg-transparent border-2 border-[#00D1FF] text-[#00D1FF] rounded-full hover:bg-[#00D1FF] hover:text-black transition-colors font-semibold">
                EDU-PLAN @ ₹3999
              </a>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="/logos/aiefrlogo.png" alt="AIEFR" className="h-20 opacity-100" />
            <img src="/logos/anuvadini.png" alt="ANUVADINI" className="h-20 opacity-100" />
            <img src="/logos/bovyellow.png" alt="BRAIN O VISION" className="h-20 opacity-100" />
            <img src="/logos/neat.png" alt="N.E.A.T" className="h-20 opacity-100" />
            <img src="/logos/aicte.png" alt="AICTE" className="h-20 opacity-100" />
          </div>
        </div>
      </div>

      {/* About BrainoVision Section */}
      <section className="py-20 bg-[#1E1656]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#00D1FF] mb-12 text-center">About BrainoVision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                BrainoVision is a pioneering educational technology company dedicated to bridging the gap between academia and industry. We specialize in delivering high-quality training programs that empower students and faculty with cutting-edge skills and knowledge.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to transform education through innovative technology solutions and industry-aligned training programs. We collaborate with leading institutions and experts to create comprehensive learning experiences that prepare participants for the future of work.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-[#00D1FF]/20 text-center">
                  <achievement.icon className="h-12 w-12 text-[#FFD700] mx-auto mb-4" />
                  <div className="text-3xl font-bold text-[#00D1FF] mb-2">{achievement.number}</div>
                  <div className="text-gray-300">{achievement.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Process Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#00D1FF] mb-12 text-center">Program Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-[#1E1656]/50 backdrop-blur-md rounded-lg p-6 border border-[#00D1FF]/20 flex flex-col items-center text-center">
                  <step.icon className="h-12 w-12 text-[#FFD700] mb-4" />
                  <h3 className="text-xl font-bold text-[#00D1FF] mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#00D1FF] h-8 w-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#00D1FF] mb-12 text-center">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map(program => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-[#1E1656]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#00D1FF] mb-12 text-center">Benefits</h2>
          
          {/* Host College Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#FFD700] mb-8 text-center">For Host Colleges</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {hostBenefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-[#00D1FF]/20">
                  <benefit.icon className="h-8 w-8 text-[#00D1FF] mb-4" />
                  <h4 className="text-xl font-semibold text-[#FFD700] mb-2">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Participant Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-[#FFD700] mb-8 text-center">For Participants</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {participantBenefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-[#00D1FF]/20">
                  <benefit.icon className="h-8 w-8 text-[#00D1FF] mb-4" />
                  <h4 className="text-xl font-semibold text-[#FFD700] mb-2">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#00D1FF] mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1E1656]/50 backdrop-blur-md rounded-lg p-6 border border-[#00D1FF]/20">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Get in Touch</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center space-x-3">
                  <Send className="h-5 w-5 text-[#00D1FF]" />
                  <span>connect@brainovision.in</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#00D1FF]" />
                  <span>+91-90636 11159</span>
                </p>
              </div>
            </div>
            <div className="bg-[#1E1656]/50 backdrop-blur-md rounded-lg p-6 border border-[#00D1FF]/20">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-white/5 border border-[#00D1FF]/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#00D1FF]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-white/5 border border-[#00D1FF]/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#00D1FF]"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-[#00D1FF]/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#00D1FF]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#00D1FF] to-[#00D1FF]/70 text-black py-2 px-4 rounded-md hover:from-[#00D1FF]/90 hover:to-[#00D1FF]/60 transition-all font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
