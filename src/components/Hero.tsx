import React from 'react';
import { ArrowRight, Calendar, Clock, Users, DollarSign, Building, CheckCircle, GraduationCap, Award, BookOpen, Trophy, ArrowRight as ArrowRightIcon } from 'lucide-react';
import { programs } from '../data/programs';

const Hero = () => {
  const hostBenefits = [
    { icon: Trophy, text: "AICTE, AIEFR, ANUVADINI, N.E.A.T and BRAINOVISION approved Certificate" },
    { icon: Award, text: "College Appreciation Certificate" },
    { icon: GraduationCap, text: "Department Appreciation Certificate" },
    { icon: DollarSign, text: "Revenue sharing opportunities" },
    { icon: Users, text: "Networking with industry experts" },
    { icon: BookOpen, text: "Access to all future programs" }
  ];

  const participantBenefits = [
    { icon: Award, text: "Student Participation Certificate" },
    { icon: Trophy, text: "Faculty Participation Certificate" },
    { icon: DollarSign, text: "Chance to win CASH PRIZES" },
    { icon: BookOpen, text: "Industry-relevant skills" },
    { icon: Users, text: "Networking opportunities" },
    { icon: GraduationCap, text: "Career growth opportunities" }
  ];

  const registrationSteps = [
    { number: 1, title: "Choose Program", description: "Select the training program that best suits your needs" },
    { number: 2, title: "EDU-PLAN Registration", description: "Register with our special EDU-PLAN for ₹3999/- to access all programs" },
    { number: 3, title: "Payment", description: "Complete the payment using the provided QR code" },
    { number: 4, title: "Confirmation", description: "Receive confirmation and access details via email" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb')] bg-cover bg-center opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <img src="https://brainovision.in/images/aiefr-logo.png" alt="AIEFR" className="h-12 opacity-90" />
            <img src="https://brainovision.in/images/anuvadini-logo.png" alt="ANUVADINI" className="h-12 opacity-90" />
            <img src="https://brainovision.in/images/brainovision-logo.png" alt="BRAIN O VISION" className="h-12 opacity-90" />
            <img src="https://brainovision.in/images/neat-logo.png" alt="N.E.A.T" className="h-12 opacity-90" />
            <img src="https://brainovision.in/images/aicte-logo.png" alt="AICTE" className="h-12 opacity-90" />
          </div>

          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-400 mb-6">
              Tech Edge Bootcamps
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our AICTE, AIEFR, ANUVADINI, N.E.A.T approved training programs and workshops
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#programs"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center gap-2 group"
              >
                View Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#edu-plan"
                className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-colors"
              >
                EDU-PLAN @ ₹1999
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div id="programs" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="relative bg-blue-900/40 backdrop-blur-sm border border-blue-700/50 rounded-xl overflow-hidden group"
            >
              {program.status === 'completed' && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Completed
                </div>
              )}
              {program.status === 'upcoming' && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {program.title}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-3 text-cyan-400" />
                    <span>{program.dates}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-3 text-cyan-400" />
                    <span>{program.timings}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-3 text-cyan-400" />
                    <span>{program.eligibility.join(', ')}</span>
                  </div>
                </div>
                <div className="space-y-2 border-t border-blue-700/50 pt-4">
                  <div className="flex items-center justify-between text-gray-300">
                    <div className="flex items-center">
                      <Building className="w-5 h-5 mr-2 text-cyan-400" />
                      <span>Host College Fee:</span>
                    </div>
                    <span className="text-yellow-400 font-bold">₹{program.hostCollegeFee.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-cyan-400" />
                      <span>Student Fee:</span>
                    </div>
                    <span className="text-yellow-400 font-bold">₹{program.participationFee.toLocaleString()}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={program.registrationLink}
                    className="block w-full text-center py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Host College Benefits */}
          <div className="bg-blue-900/40 backdrop-blur-sm border border-blue-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 mb-6">
              Benefits for Host Colleges
            </h2>
            <div className="space-y-4">
              {hostBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 text-gray-300">
                  <benefit.icon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Participant Benefits */}
          <div className="bg-blue-900/40 backdrop-blur-sm border border-blue-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 mb-6">
              Benefits for Participants
            </h2>
            <div className="space-y-4">
              {participantBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 text-gray-300">
                  <benefit.icon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Registration Process */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-blue-900/40 backdrop-blur-sm border border-blue-700/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 mb-8 text-center">
            Registration Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {registrationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-800/50 rounded-lg p-6 h-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4 text-white font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < registrationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRightIcon className="w-6 h-6 text-cyan-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EDU-PLAN Section */}
      <div id="edu-plan" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-blue-900/40 backdrop-blur-sm border border-blue-700/50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400 mb-6">
            NEW EDU-PLAN
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get access to all programs at One Time Fee of
            <span className="text-3xl font-bold text-yellow-400 ml-2">₹3999/-</span>
          </p>
          <div className="flex justify-center">
            <img
              src="https://brainovision.in/images/qr-code.png"
              alt="Registration QR Code"
              className="w-48 h-48"
            />
          </div>
          <p className="mt-6 text-cyan-400">
            <a href="https://brainovision.in/tech-edge-bootcamps" className="hover:underline">
              https://brainovision.in/tech-edge-bootcamps
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
