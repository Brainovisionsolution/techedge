// src/pages/ProgramDetails.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Users, Award, Download, FileText, Brain } from 'lucide-react';

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
      chiefGuests: [
        {
          name: 'I V S Ranganath',
          title: 'Head – HR (India), Shriram Bioseed Genetics – DCM Shriram Ltd.',
          photo: '/logos/ChiefGuest.jpg',
          bio: `I V S Ranganath is a seasoned HR leader with 20+ years of cross‑industry experience spanning manufacturing, FMCG, telecom, engineering, and agriculture. Currently serving as Head – HR (India) at Shriram Bioseed Genetics (DCM Shriram Ltd.), he is widely recognized for pioneering agile, human‑centric HR strategies.`
        },
       {
  name: 'Mr. Bala Prasad Peddigari',
  title: 'Chief Innovation Officer and Global Head – Technology Advisory Services, TSS Business Group',
  photo: '/logos/ChiefGuest1.jpg',
  bio: `We are honored to welcome Mr. Bala Prasad Peddigari, Chief Innovation Officer and Global Head – Technology Advisory Services, Technology, Software and Services Business Group.

Mr. Bala Prasad has been a guiding light for digital transformation in leading enterprises. His expertise in future technologies from AI and cloud to enterprise strategy and innovation ecosystems has left a significant mark on the global tech landscape.`
}
      ],
      leadTrainer: {
        name: 'N. Narayana Swamy',
        title: 'Technical Head & Director Of Operations',
        photo: '/logos/swami.jpg',
        bio: `Organized faculty development programs with Brainovision Solutions India Pvt. Ltd., attended by over 30,000+ participants and recognized in the India Book of Records for its scale and reach. His expertise in event coordination has earned multiple awards, including the Bharat Education Excellence Awards.`
      },
      coreTeam: [
        {
          name: 'R. Mounasri',
          title: 'Director Of Client Relations',
          photo: '/logos/mounasri.jpg'
        },
        {
          name: 'N. Narayana Swamy',
          title: 'Technical Head & Director Of Operations',
          photo: '/logos/swami.jpg'
        }
      ],
      syllabus: [
        'DAY 1. AI-Powered Application Development for Innovation',
        'DAY 2. Google & Microsoft Tools for Real-World Efficiency',
        'DAY 3. Low-Code/No-Code Approach for Broader Accessibility',
        'DAY 4. Industry-Relevant Skills for Career Growth',
        'DAY 5. Practical, Hands-on Learning for Immediate Application'
      ]
    },
    certificates: {
      college: '/logos/Host College Appreciation.png',
      department: '/logos/Faculty Participation.png',
      student: '/logos/Faculty Coordinator.png',
      faculty: '/logos/Student Participation.png'
    },
    registrationSheets: {
      colleges: 'https://docs.google.com/spreadsheets/d/1lcqGC9ziGn8POfGWdFUkzAgJm1ASw_2Vgn25GtthftA/edit?gid=0',
      students: 'https://docs.google.com/spreadsheets/d/1ATTtDXMh7gL0x3pVj6P_jGLELK8I6u_Q/edit?gid=216271657'
    }
  }
};

const ProgramDetails3 = () => {
  const { id } = useParams();
  const program = programs[id as keyof typeof programs];


  return (
    <div className="pt-16 min-h-screen bg-[#1E1656] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#00D1FF] mb-6">{program.title}</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-3">
            <p className="flex items-center gap-3"><Calendar className="text-[#FFD700]" /> {program.dates}</p>
            <p className="flex items-center gap-3"><Clock className="text-[#FFD700]" /> {program.time}</p>
            <p className="flex items-center gap-3"><Users className="text-[#FFD700]" /> {program.audience}</p>
            <p className="flex items-center gap-3"><Award className="text-[#FFD700]" /> Participation Fee: ₹{program.fee}</p>
          </div>
          <div className="space-y-4">
            <button onClick={() => window.open(program.registrationLinks.college)} className="w-full bg-[#00D1FF] py-2 rounded">Host College Registration</button>
            <button onClick={() => window.open(program.registrationLinks.student)} className="w-full bg-[#FFD700] text-black py-2 rounded">Student Registration</button>
            <button onClick={() => window.open(program.brochureLink)} className="w-full bg-gradient-to-r from-[#00D1FF] to-[#FFD700] text-black py-2 rounded">Download Brochure</button>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#00D1FF] mb-4">Chief Guests</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {program.overview.chiefGuests.map((guest, idx) => (
              <div key={idx} className="bg-white/10 rounded-lg p-6 border border-[#00D1FF]/30">
                <div className="flex gap-4 items-center">
                  <img src={guest.photo} alt={guest.name} className="w-20 h-20 rounded-full object-cover border-2 border-[#FFD700]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#FFD700]">{guest.name}</h3>
                    <p className="text-[#00D1FF]">{guest.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{guest.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#00D1FF] mb-4">Lead Trainer</h2>
          <div className="bg-white/10 rounded-lg p-6 border border-[#00D1FF]/30 flex gap-6 items-center">
            <img src={program.overview.leadTrainer.photo} className="w-20 h-20 rounded-full object-cover border-2 border-[#FFD700]" />
            <div>
              <h3 className="text-xl font-semibold text-[#FFD700]">{program.overview.leadTrainer.name}</h3>
              <p className="text-[#00D1FF]">{program.overview.leadTrainer.title}</p>
              <p className="text-gray-300 mt-2">{program.overview.leadTrainer.bio}</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#00D1FF] mb-4">Core Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {program.overview.coreTeam.map((member, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 border border-[#00D1FF]/20 flex items-center gap-4">
                <img src={member.photo} alt={member.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#FFD700]" />
                <div>
                  <h3 className="text-lg font-semibold text-[#FFD700]">{member.name}</h3>
                  <p className="text-[#00D1FF]">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#00D1FF] mb-4">Program Syllabus</h2>
          <ul className="space-y-2">
            {program.overview.syllabus.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-300">
                <Brain className="text-[#FFD700]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#00D1FF] mb-4">Sample Certificates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(program.certificates).map(([key, url]) => (
              <div key={key} className="bg-white/10 rounded-lg p-4 border border-[#00D1FF]/20">
                <h3 className="text-lg font-semibold text-[#FFD700] mb-2">{key.replace(/^\w/, c => c.toUpperCase())} Certificate</h3>
                <img src={url} alt={key} className="rounded w-full" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#00D1FF] mb-4">Registrations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-[#FFD700] mb-2">College Registrations</h3>
              <iframe src={program.registrationSheets.colleges} className="w-full h-96 border border-[#00D1FF]/20 rounded" title="College Registrations"></iframe>
              <a href={`${program.registrationSheets.colleges}&export=download`} className="block mt-3 text-[#00D1FF] underline" target="_blank">Download Excel</a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#FFD700] mb-2">Student Registrations</h3>
              <iframe src={program.registrationSheets.students} className="w-full h-96 border border-[#00D1FF]/20 rounded" title="Student Registrations"></iframe>
              <a href={`${program.registrationSheets.students}&export=download`} className="block mt-3 text-[#00D1FF] underline" target="_blank">Download Excel</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProgramDetails3;
