// src/pages/ProgramDetails.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Users, Award, Download, FileText, Brain } from 'lucide-react';

const programs = {
  'career-dev': {
    title: 'National Level Faculty Development Program (FDP) on Generative AI',
    dates: '4th August  – 8th August 2025',
    time: '07:00 PM to 08:00 PM (IST)',
    audience: 'Faculty, Researchers, and Academicians',
    fee: '9',
    registrationLinks: {
      college: 'https://rzp.io/l/lvQf1hGN',
      student: 'https://rzp.io/rzp/jkT2kL0u'
    },
    brochureLink: 'https://drive.google.com/file/d/1GzURkIiI2jrSHGGMRVuAuILE_Uq0IFN3/view?pli=1',
    overview: {
      chiefGuests: [
        
  {
    name: 'Mr. Rajiv Atluri',
    title: 'Center Head HR, TA & Operations – India Center at GERAB NATIONAL ENTERPRISES LLC',
    photo: '/logos/chiefguest3.png',
    bio: `We are honored to welcome Mr. Rajiv Atluri — Strategic Advisor, Mentor, and Philanthropist — as our esteemed guest at the 1-Week National Level FDP on Generative AI. With 18+ years of experience in Business Operations, HR, and Talent Acquisition, he has worked with renowned organizations like Monster.com and Times Group. A double post-graduate from IIM-Ranchi, Mr. Atluri’s insights into leadership and talent development will greatly enrich the program.`
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
          name: 'P.Tejaswi',
          title: 'Program Head - Techedge Bootcamps',
          photo: '/logos/teja.jpg'
        },
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
'Day 1: Introduction to Generative AI & Its Academic Relevance',
'Day 2: Using GenAI for Teaching & Content Creation',
'Day 3: Using GenAI for Research: Idea Generation, Literature Review, and Paper Structuring',
'Day 4: Image, Presentation & Document Generation with GenAI',
'Day 5: Simple AI Coding & Creating Custom Tools'
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
      students: 'https://docs.google.com/spreadsheets/d/1ZfGWDd0q4p9oiEMqlh1i_L53cs9w8FKYqjTdfnY9xPc/edit?usp=sharing'
    }
  }
};

const ProgramDetails4 = () => {
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
            <button onClick={() => window.open(program.registrationLinks.student)} className="w-full bg-[#FFD700] text-black py-2 rounded">Participant Registration</button>
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

export default ProgramDetails4;



