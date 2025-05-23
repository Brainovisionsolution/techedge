import React from 'react';
import ProgramCard from '../components/ProgramCard';
import { Brain, GraduationCap, Users, FileText, Send, Phone, CheckCircle2, ArrowRight, Trophy, Building, Globe2, Award, Laptop, BookOpen, Presentation, Target, Lightbulb, Rocket } from 'lucide-react';

type ProgramStatus = "completed" | "active" | "coming_soon";

interface Program {
  id: string;
  title: string;
  status: ProgramStatus;
  dates: string;
  time: string;
  audience: string;
  hostFee: string;
  participantFee: string;
  mode: string;
}

const programs: Program[] = [
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
    status: 'completed',
    dates: '17th - 21th, FEB 2025',
    time: '07:00 PM to 09:00 PM',
    audience: 'All Faculties',
    hostFee: '9999',
    participantFee: '1',
    mode: 'Virtual (Zoom & YouTube Live)'
  },
  {
    id: 'essential-skills',
    title: 'NATIONAL LEVEL ESSENTIAL SKILLS TRAINING PROGRAM (ESTP) FOR STUDENTS & FACULTY',
    status: 'active',
    dates: ' June 23rd to June 27th, 2025',
    time: '07:00 PM to 08:30 PM',
    audience: 'All Students & Faculties',
    hostFee: '2999',
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
    number: "650+",
    text: "Workshops & Hackathons",
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
    number: "30+",
    text: "Working Technologies",
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
              <a href="https://rzp.io/l/lvQf1hGN" className="px-8 py-3 bg-transparent border-2 border-[#00D1FF] text-[#00D1FF] rounded-full hover:bg-[#00D1FF] hover:text-black transition-colors font-semibold">
                EDU-PLAN @ ₹2999
              </a>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="/logos/aiefrlogonew.png" alt="AIEFR" className="h-20 opacity-100" />
            <img src="/logos/anuvadini.png" alt="ANUVADINI" className="h-20 opacity-100" />
            <img src="/logos/bovlogonew.png" alt="BRAIN O VISION" className="h-20 opacity-100" />
            <img src="/logos/neat.png" alt="N.E.A.T" className="h-20 opacity-100" />
            <img src="/logos/aictelogonew.png" alt="AICTE" className="h-20 opacity-100" />
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
      <section id="contact" className="py-20 w-full">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#00D1FF] mb-12 text-center">Contact Us</h2>
          
          <div className="flex justify-center">
            <div className="bg-[#1E1656]/50 backdrop-blur-md rounded-lg p-6 border border-[#00D1FF]/20 w-full max-w-xl">
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
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/919063611159?text=Hi!%20I'm%20interested%20in%20knowing%20more%20about%20TechEdge%20Bootcamps.%20Could%20you%20please%20share%20the%20details%20with%20me%3F%20Thanks!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-lg animate-bounce"
          aria-label="Contact via WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29 3.617c-.545 0-1.08-.152-1.597-.477-.446-.292-1.006-.735-1.538-1.238l-.016-.015c-.368-.35-.67-.667-.909-.932-.42-.47-.752-1.04-.752-1.597 0-.53.214-.98.64-1.298.375-.277.86-.433 1.32-.433.223 0 .44.04.65.117.414.152.784.44 1.098.86l.933 1.204c.197.252.42.537.617.82.173.248.39.56.55.822.17.273.272.512.272.71 0 .223-.074.41-.223.56-.148.148-.346.222-.593.222z" />
            <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.768 0-3.46-.41-5-1.15-.31-.16-.53-.24-.69-.24-.19 0-.39.08-.56.25l-1.89 1.84c-.17.17-.33.25-.5.25-.08 0-.17-.02-.24-.06-.22-.09-.36-.27-.36-.57v-2.71c0-.22.11-.43.29-.56.85-.62 1.5-1.39 1.89-2.26.47-.99.71-2.04.71-3.11 0-4.42-3.58-8-8-8zm0 1a9 9 0 0 0-9 9 9 9 0 0 0 9 9c1.65 0 3.2-.38 4.6-1.06l.3-.17.28.14.06.03v1.94l1.84-1.8.08-.08v-3.29l-.09-.16-.21-.12a8.9 8.9 0 0 1-4.6-7.83c0-4.96 4.04-9 9-9 4.96 0 9 4.04 9 9 0 4.96-4.04 9-9 9z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Home;
