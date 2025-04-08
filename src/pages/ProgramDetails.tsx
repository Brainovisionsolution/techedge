import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, Users, Award, Download, FileText, Brain, GraduationCap } from 'lucide-react';

const programs = {
  
  
  'essential-skills': {
    title: 'INTERNATIONAL LEVEL ESSENTIAL SKILLS TRAINING PROGRAM (ESTP) FOR STUDENTS & FACULTY',
    dates: 'April 28th – May 2nd, 2025',
    time: '07:00 PM to 08:30 PM',
    audience: 'All Students & Faculties',
    fee: '49',
    registrationLinks: {
      college: 'https://rzp.io/l/lvQf1hGN',
      student: 'https://rzp.io/rzp/Snn8yDq'
    },
    brochureLink: 'https://brainovision.in/host-college',
    overview: {
      chiefGuest: {
        name: 'Dr.Buddha Chandrasekhar',
        title: 'Chief Coordinating Officer - AICTE All India Council for Technical Education',
        photo: '/logos/budha.png',
        bio: 'Buddha Chandrasekhar is focused to make India as Education and Knowledge capital of the world by providing the best Education, Technology, skill, Internships, Entrepreneurship, Startup, and innovation eco-system to the youth of India. Buddha Chandrasekhar is a unique combination of Technologies, Ideas, Multi-domain business knowledge, Entrepreneur, Leader with a Go-getter attitude.'
      },
      leadTrainer: {
        name: 'N.Narayana Swamy',
        title: 'Technical Head & Director Of Operations',
        photo: '/logos/swami.jpg',
        bio: 'Organized faculty development programs with Brainovision Solutions India Pvt. Ltd., attended by over 30,000+ participants and recognized in the India Book of Records for its scale and reach. And also Organized an International Level Workshop for Students where 62,000+ Students are attended. His expertise in event coordination has earned multiple awards, including the Bharat Education Excellence Awards.'
      },
      coreTeam: [
        {
          name: 'R.Mounasri',
          title: 'Director Of Client Relations ',
          photo: '/logos/mounasri.jpg',
         
        },
        {
          name: 'N.Narayana Swamy',
          title: 'Technical Head & Director Of Operations',
          photo: '/logos/swami.jpg',
      
        }
      ],
      
      syllabus: [
        'DAY 1. AI-Powered Application Development for Innovation',
        'DAY 2. Google & Microsoft Tools for Real-World Efficiency',
        'DAY 3. Low-Code/No-Code Approach for Broader Accessibility',
        'DAY 4. Industry-Relevant Skills for Career Growth',
        'DAY 5. Practical, Hands-on Learning for Immediate Application',
      ]
    },
    certificates: {
      college: '/logos/Host College Appreciation.png ',
      department: '/logos/Faculty Participation.png',
      student: '/logos/Faculty Coordinator.png',
      faculty: '/logos/Student Participation.png'
    },
    registrationSheets: {
      colleges: 'https://docs.google.com/spreadsheets/d/skills-colleges/pubhtml',
      students: 'https://docs.google.com/spreadsheets/d/skills-students/pubhtml'
    }
  },
  
  
};

const ProgramDetails = () => {
  const { id } = useParams();
  const program = programs[id as keyof typeof programs];

  if (!program) {
    return (
      <div className="pt-16 min-h-screen bg-[#1E1656] flex items-center justify-center px-4">
        <div className="text-center text-[#00D1FF] text-xl max-w-2xl">
          <p className="mb-6">
            The program you have selected is either <strong>completed</strong> or <strong>coming soon</strong>.
          </p>
          <p className="mb-6">
            To enroll in the upcoming <strong>'International Level Essential Skills Training Program (ESTP) for Students & Faculty'</strong>, click the button below.
          </p>
          <a
            href="https://techedge.brainovision.in/program/essential-skills"
            className="inline-block bg-[#00D1FF] text-[#1E1656] font-semibold px-6 py-3 rounded-2xl hover:bg-[#00b0dd] transition duration-300"
          >
            Join Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-[#1E1656]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#1E1656]/50 backdrop-blur-md rounded-lg p-8 border border-[#00D1FF]/20">
          <h1 className="text-3xl font-bold text-[#00D1FF] mb-8">{program.title}</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Calendar className="h-5 w-5 text-[#FFD700]" />
                <span>{program.dates}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="h-5 w-5 text-[#FFD700]" />
                <span>{program.time}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Users className="h-5 w-5 text-[#FFD700]" />
                <span>{program.audience}</span>
              </div>
              <div className="flex items-center space-x-3 text-[#FFD700]">
                <Award className="h-5 w-5" />
                <span>Participation Fee: ₹{program.fee}</span>
              </div>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => window.open(program.registrationLinks.college, '_blank')} 
                className="w-full bg-[#00D1FF] text-black py-2 px-4 rounded-md hover:bg-[#00D1FF]/90 transition-colors flex items-center justify-center space-x-2 font-semibold">
                <FileText className="h-5 w-5" />
                <span>Host College Registration</span>
              </button>
              <button 
                onClick={() => window.open(program.registrationLinks.student, '_blank')}
                className="w-full bg-[#FFD700] text-black py-2 px-4 rounded-md hover:bg-[#FFD700]/90 transition-colors flex items-center justify-center space-x-2 font-semibold">
                <Users className="h-5 w-5" />
                <span>Student Registration</span>
              </button>
              <button 
                onClick={() => window.open(program.brochureLink, '_blank')}
                className="w-full bg-gradient-to-r from-[#00D1FF] to-[#FFD700] text-black py-2 px-4 rounded-md hover:from-[#00D1FF]/90 hover:to-[#FFD700]/90 transition-all flex items-center justify-center space-x-2 font-semibold">
                <Download className="h-5 w-5" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-[#00D1FF] mb-6">Chief Guest</h2>
              <div className="bg-white/5 rounded-lg p-6 border border-[#00D1FF]/20">
                <div className="flex items-center space-x-6">
                  <img
                    src={program.overview.chiefGuest.photo}
                    alt={program.overview.chiefGuest.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-[#FFD700]"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#FFD700]">{program.overview.chiefGuest.name}</h3>
                    <p className="text-[#00D1FF]">{program.overview.chiefGuest.title}</p>
                    <p className="text-gray-300 mt-2">{program.overview.chiefGuest.bio}</p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[#00D1FF] mb-6">Lead Trainer</h2>
              <div className="bg-white/5 rounded-lg p-6 border border-[#00D1FF]/20">
                <div className="flex items-center space-x-6">
                  <img
                    src={program.overview.leadTrainer.photo}
                    alt={program.overview.leadTrainer.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-[#FFD700]"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#FFD700]">{program.overview.leadTrainer.name}</h3>
                    <p className="text-[#00D1FF]">{program.overview.leadTrainer.title}</p>
                    <p className="text-gray-300 mt-2">{program.overview.leadTrainer.bio}</p>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-[#00D1FF] mb-6">Core Team</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {program.overview.coreTeam.map((member, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-6 border border-[#00D1FF]/20">
                    <div className="flex items-center space-x-4">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-[#FFD700]"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-[#FFD700]">{member.name}</h3>
                        <p className="text-[#00D1FF]">{member.title}</p>
                       
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

           

            <section>
              <h2 className="text-2xl font-bold text-[#00D1FF] mb-6">Program Syllabus</h2>
              <div className="bg-white/5 rounded-lg p-6 border border-[#00D1FF]/20">
                <ul className="space-y-3">
                  {program.overview.syllabus.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      <Brain className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D1FF] mb-6">Sample Certificates</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-[#00D1FF]/20">
                    <h3 className="text-lg font-semibold text-[#FFD700] mb-4">Host College Appreciation</h3>
                    <img src={program.certificates.college} alt="College Certificate" className="w-full rounded-lg" />
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-[#00D1FF]/20">
                    <h3 className="text-lg font-semibold text-[#FFD700] mb-4">Faculty Participation</h3>
                    <img src={program.certificates.department} alt="Department Certificate" className="w-full rounded-lg" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-[#00D1FF]/20">
                    <h3 className="text-lg font-semibold text-[#FFD700] mb-4">Faculty Coordinator</h3>
                    <img src={program.certificates.student} alt="Student Certificate" className="w-full rounded-lg" />
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-[#00D1FF]/20">
                    <h3 className="text-lg font-semibold text-[#FFD700] mb-4">Student Participation</h3>
                    <img src={program.certificates.faculty} alt="Faculty Certificate" className="w-full rounded-lg" />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00D1FF] mb-6">Registrations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#FFD700] mb-4">College Registrations</h3>
                  <div className="bg-white/5 rounded-lg p-4 border border-[#00D1FF]/20 h-96">
                    <iframe
                      src={program.registrationSheets.colleges}
                      className="w-full h-full"
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Student Registrations</h3>
                  <div className="bg-white/5 rounded-lg p-4 border border-[#00D1FF]/20 h-96">
                    <iframe
                      src={program.registrationSheets.students}
                      className="w-full h-full"
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramDetails;