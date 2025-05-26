import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Users, Award, Download, FileText, Brain, GraduationCap } from 'lucide-react';

const programs = {
  'essential-skills': {
    title: 'NATIONAL LEVEL ESSENTIAL SKILLS TRAINING PROGRAM (ESTP) FOR STUDENTS & FACULTY',
    dates: 'June 23rd to June 27th, 2025',
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
        bio: 'Organized faculty development programs with Brainovision Solutions India Pvt. Ltd., attended by over 30,000+ participants and recognized in the India Book of Records for its scale and reach. And also Organized an International Level Workshop for Students where 62,000+ Students are attended. His expertise in event coordination has earned multiple awards, including the Bharat Education Excellence Awards.'
      },
      coreTeam: [
        {
          name: 'R.Mounasri',
          title: 'Director Of Client Relations',
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
      college: '/logos/Host College Appreciation.png',
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
          <Link
            to="/program/essential-skills"
            className="inline-block bg-[#00D1FF] text-[#1E1656] font-semibold px-6 py-3 rounded-2xl hover:bg-[#00b0dd] transition duration-300"
          >
            Join Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-[#1E1656]">
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/919063611159?text=Hello%20Tech%20Edge%20Bootcamps,%20I%20would%20like%20to%20know%20more%20about%20your%20programs."
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
          src={'https://docs.google.com/spreadsheets/d/1lcqGC9ziGn8POfGWdFUkzAgJm1ASw_2Vgn25GtthftA/edit?pli=1&gid=0'}
          className="w-full h-full"
          frameBorder="0"
          title="College Registrations"
        ></iframe>
      </div>
      <div className="mt-4 text-right">
        <a
          href="https://docs.google.com/spreadsheets/d/1lcqGC9ziGn8POfGWdFUkzAgJm1ASw_2Vgn25GtthftA/export?format=xlsx&gid=0"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-[#00D1FF] text-white rounded hover:bg-[#00a8d9] transition"
        >
          Download Excel
        </a>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Student Registrations</h3>
      <div className="bg-white/5 rounded-lg p-4 border border-[#00D1FF]/20 h-96">
        <iframe
          src={'https://docs.google.com/spreadsheets/d/1ATTtDXMh7gL0x3pVj6P_jGLELK8I6u_Q/edit?gid=216271657'}
          className="w-full h-full"
          frameBorder="0"
          title="Student Registrations"
        ></iframe>
      </div>
      <div className="mt-4 text-right">
        <a
          href="https://docs.google.com/spreadsheets/d/1ATTtDXMh7gL0x3pVj6P_jGLELK8I6u_Q/export?format=xlsx&gid=216271657"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-[#00D1FF] text-white rounded hover:bg-[#00a8d9] transition"
        >
          Download Excel
        </a>
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
