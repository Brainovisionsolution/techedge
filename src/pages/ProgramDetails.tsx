import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, Users, Award, Download, FileText, Brain, GraduationCap } from 'lucide-react';

const programs = {
  'java-fullstack': {
    title: 'SHORT TERM TRAINING PROGRAM (STTP) ON JAVA FULL STACK BY USING REACT AND AI',
    dates: '02nd to 24th JAN 2024',
    time: '07:00 PM to 09:00 PM',
    audience: 'Faculties & Students',
    fee: '99',
    overview: {
      chiefGuest: {
        name: 'Dr. James Anderson',
        title: 'Director, Institute of Advanced Computing',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
        bio: 'Dr. Anderson is a pioneer in Full Stack Development with over 20 years of experience in academia and industry.'
      },
      coreTeam: [
        {
          name: 'Prof. Sarah Williams',
          title: 'Program Coordinator',
          photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
          bio: 'Prof. Williams specializes in Java Enterprise applications and cloud architecture.'
        },
        {
          name: 'Dr. Michael Chen',
          title: 'Technical Lead',
          photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
          bio: 'Dr. Chen has extensive experience in React and modern web development.'
        }
      ],
      leadTrainer: {
        name: 'Mr. David Kumar',
        title: 'Senior Full Stack Developer',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
        bio: 'Mr. Kumar is an expert in Java Full Stack development with expertise in Spring Boot and React.'
      },
      syllabus: [
        'Java Fundamentals and Advanced Concepts',
        'Spring Boot and Microservices',
        'React.js and Modern Frontend Development',
        'Database Design with PostgreSQL',
        'AI Integration in Web Applications',
        'Cloud Deployment and DevOps'
      ]
    },
    certificates: {
      college: 'https://example.com/java-college-cert.jpg',
      department: 'https://example.com/java-dept-cert.jpg',
      student: 'https://example.com/java-student-cert.jpg',
      faculty: 'https://example.com/java-faculty-cert.jpg'
    },
    registrationSheets: {
      colleges: 'https://docs.google.com/spreadsheets/d/java-colleges/pubhtml',
      students: 'https://docs.google.com/spreadsheets/d/java-students/pubhtml'
    }
  },
  'ai-faculty': {
    title: 'NATIONAL LEVEL FACULTY DEVELOPMENT PROGRAM (FDP) ON ARTIFICIAL INTELLIGENCE (AI)',
    dates: '17th - 21th, FEB 2025',
    time: '07:00 PM to 09:00 PM',
    audience: 'All Faculties',
    fee: '1',
    overview: {
      chiefGuest: {
        name: 'Dr. Elena Rodriguez',
        title: 'Director, AI Research Institute',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
        bio: 'Dr. Rodriguez is a renowned AI researcher with numerous publications in top-tier journals.'
      },
      coreTeam: [
        {
          name: 'Prof. Alex Thompson',
          title: 'AI Program Director',
          photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
          bio: 'Prof. Thompson leads cutting-edge research in machine learning and deep learning.'
        },
        {
          name: 'Dr. Lisa Wang',
          title: 'Technical Coordinator',
          photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          bio: 'Dr. Wang specializes in natural language processing and computer vision.'
        }
      ],
      leadTrainer: {
        name: 'Dr. Raj Patel',
        title: 'AI Research Scientist',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        bio: 'Dr. Patel has extensive experience in implementing AI solutions for real-world problems.'
      },
      syllabus: [
        'Introduction to Artificial Intelligence',
        'Machine Learning Fundamentals',
        'Deep Learning and Neural Networks',
        'Natural Language Processing',
        'Computer Vision Applications',
        'AI Ethics and Future Trends'
      ]
    },
    certificates: {
      college: 'https://example.com/ai-college-cert.jpg',
      department: 'https://example.com/ai-dept-cert.jpg',
      student: 'https://example.com/ai-student-cert.jpg',
      faculty: 'https://example.com/ai-faculty-cert.jpg'
    },
    registrationSheets: {
      colleges: 'https://docs.google.com/spreadsheets/d/ai-colleges/pubhtml',
      students: 'https://docs.google.com/spreadsheets/d/ai-students/pubhtml'
    }
  },
  'essential-skills': {
    title: 'INTERNATIONAL LEVEL ESSENTIAL SKILLS TRAINING PROGRAM (ESTP) FOR STUDENTS & FACULTY',
    dates: '07th - 11th, APR 2025',
    time: '07:00 PM to 08:30 PM',
    audience: 'All Students & Faculties',
    fee: '49',
    overview: {
      chiefGuest: {
        name: 'Dr. Robert Miller',
        title: 'Global Skills Development Director',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        bio: 'Dr. Miller is an expert in professional development and essential skills training.'
      },
      coreTeam: [
        {
          name: 'Prof. Emma Davis',
          title: 'Skills Program Coordinator',
          photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
          bio: 'Prof. Davis specializes in communication and leadership development.'
        },
        {
          name: 'Dr. Thomas Brown',
          title: 'Technical Skills Lead',
          photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
          bio: 'Dr. Brown focuses on digital literacy and technical skill development.'
        }
      ],
      leadTrainer: {
        name: 'Ms. Jennifer Lee',
        title: 'Professional Development Expert',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
        bio: 'Ms. Lee has trained professionals across multiple industries in essential skills.'
      },
      syllabus: [
        'Communication Skills',
        'Critical Thinking',
        'Problem Solving',
        'Digital Literacy',
        'Leadership Skills',
        'Time Management'
      ]
    },
    certificates: {
      college: 'https://example.com/skills-college-cert.jpg',
      department: 'https://example.com/skills-dept-cert.jpg',
      student: 'https://example.com/skills-student-cert.jpg',
      faculty: 'https://example.com/skills-faculty-cert.jpg'
    },
    registrationSheets: {
      colleges: 'https://docs.google.com/spreadsheets/d/skills-colleges/pubhtml',
      students: 'https://docs.google.com/spreadsheets/d/skills-students/pubhtml'
    }
  },
  'career-dev': {
    title: 'INTERNATIONAL LEVEL CAREER DEVELOPMENT PROGRAM ON SDG, ESG & INDUSTRY INNOVATIONS',
    dates: '18th - 23RD, AUG 2025',
    time: '07:00 PM to 08:30 PM',
    audience: 'All Students & Faculties',
    fee: '99',
    overview: {
      chiefGuest: {
        name: 'Dr. Maria Garcia',
        title: 'Director, Sustainable Development Institute',
        photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        bio: 'Dr. Garcia is a leading expert in sustainable development and ESG practices.'
      },
      coreTeam: [
        {
          name: 'Prof. Daniel Wilson',
          title: 'SDG Program Director',
          photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
          bio: 'Prof. Wilson specializes in implementing SDG goals in business practices.'
        },
        {
          name: 'Dr. Sophie Taylor',
          title: 'ESG Coordinator',
          photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
          bio: 'Dr. Taylor has extensive experience in ESG reporting and compliance.'
        }
      ],
      leadTrainer: {
        name: 'Mr. Andrew Chang',
        title: 'Industry Innovation Expert',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        bio: 'Mr. Chang helps organizations implement sustainable innovation practices.'
      },
      syllabus: [
        'Understanding SDGs',
        'ESG Framework and Implementation',
        'Industry 4.0 Technologies',
        'Sustainable Business Practices',
        'Innovation Management',
        'Future of Work'
      ]
    },
    certificates: {
      college: 'https://example.com/career-college-cert.jpg',
      department: 'https://example.com/career-dept-cert.jpg',
      student: 'https://example.com/career-student-cert.jpg',
      faculty: 'https://example.com/career-faculty-cert.jpg'
    },
    registrationSheets: {
      colleges: 'https://docs.google.com/spreadsheets/d/career-colleges/pubhtml',
      students: 'https://docs.google.com/spreadsheets/d/career-students/pubhtml'
    }
  },
  'gen-ai': {
    title: 'NATIONAL LEVEL STUDENT WORKSHOP ON GENERATIVE - AI',
    dates: '10th - 15th, NOV 2025',
    time: '07:00 PM to 08:30 PM',
    audience: 'All Students & Faculties',
    fee: '9',
    overview: {
      chiefGuest: {
        name: 'Dr. Samuel Kim',
        title: 'Director, GenAI Research Lab',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        bio: 'Dr. Kim is a pioneer in generative AI research and applications.'
      },
      coreTeam: [
        {
          name: 'Prof. Rachel Green',
          title: 'AI Workshop Coordinator',
          photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          bio: 'Prof. Green specializes in large language models and AI applications.'
        },
        {
          name: 'Dr. Kevin Zhang',
          title: 'Technical Lead',
          photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
          bio: 'Dr. Zhang has extensive experience in implementing GenAI solutions.'
        }
      ],
      leadTrainer: {
        name: 'Ms. Laura Martinez',
        title: 'GenAI Implementation Expert',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
        bio: 'Ms. Martinez helps organizations leverage generative AI technologies.'
      },
      syllabus: [
        'Introduction to Generative AI',
        'Large Language Models',
        'Image Generation and Processing',
        'Prompt Engineering',
        'GenAI Applications',
        'Ethics and Future of GenAI'
      ]
    },
    certificates: {
      college: 'https://example.com/genai-college-cert.jpg',
      department: 'https://example.com/genai-dept-cert.jpg',
      student: 'https://example.com/genai-student-cert.jpg',
      faculty: 'https://example.com/genai-faculty-cert.jpg'
    },
    registrationSheets: {
      colleges: 'https://docs.google.com/spreadsheets/d/genai-colleges/pubhtml',
      students: 'https://docs.google.com/spreadsheets/d/genai-students/pubhtml'
    }
  }
};

const ProgramDetails = () => {
  const { id } = useParams();
  const program = programs[id as keyof typeof programs];

  if (!program) {
    return (
      <div className="pt-16 min-h-screen bg-[#1E1656] flex items-center justify-center">
        <div className="text-[#00D1FF] text-xl">Program not found</div>
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
              <button className="w-full bg-[#00D1FF] text-black py-2 px-4 rounded-md hover:bg-[#00D1FF]/90 transition-colors flex items-center justify-center space-x-2 font-semibold">
                <FileText className="h-5 w-5" />
                <span>Host College Registration</span>
              </button>
              <button className="w-full bg-[#FFD700] text-black py-2 px-4 rounded-md hover:bg-[#FFD700]/90 transition-colors flex items-center justify-center space-x-2 font-semibold">
                <Users className="h-5 w-5" />
                <span>Student Registration</span>
              </button>
              <button className="w-full bg-gradient-to-r from-[#00D1FF] to-[#FFD700] text-black py-2 px-4 rounded-md hover:from-[#00D1FF]/90 hover:to-[#FFD700]/90 transition-all flex items-center justify-center space-x-2 font-semibold">
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
                        <p className="text-gray-300 mt-2">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
                    <h3 className="text-lg font-semibold text-[#FFD700] mb-4">College Certificate</h3>
                    <img src={program.certificates.college} alt="College Certificate" className="w-full rounded-lg" />
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-[#00D1FF]/20">
                    <h3 className="text-lg font-semibold text-[#FFD700] mb-4">Department Certificate</h3>
                    <img src={program.certificates.department} alt="Department Certificate" className="w-full rounded-lg" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-[#00D1FF]/20">
                    <h3 className="text-lg font-semibold text-[#FFD700] mb-4">Student Certificate</h3>
                    <img src={program.certificates.student} alt="Student Certificate" className="w-full rounded-lg" />
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-[#00D1FF]/20">
                    <h3 className="text-lg font-semibold text-[#FFD700] mb-4">Faculty Certificate</h3>
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