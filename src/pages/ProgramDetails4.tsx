// src/pages/ProgramDetails.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Users, Award, Brain, ArrowLeft } from 'lucide-react';

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
        },
        {
          name: 'Gundala Nagaraju (Raju)',
          title: 'CEO | IT Business & Technology Leader, Hyderabad - India',
          photo: '/logos/ChiefGuest4.jpg',
          bio: `We are privileged to host Mr. Gundala Nagaraju (Raju), a seasoned IT Business & Technology Leader with extensive experience in bridging the gap between cutting-edge technology and business-driven solutions. He is also an Edupreneur, Adjunct Professor, Lead Auditor (ISO 42001:2023), and President – TAA IIT Kharagpur Hyderabad Chapter. He currently serves as CEO at SmartMieten Tech Pvt Ltd and holds credentials from IIM Calcutta. His presence brings tremendous value to our program.`
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
        'Day 5: Simple AI Coding & Creating Custom Tools'
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
      <div className="pt-24 pb-20 min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center text-gray-900 text-xl max-w-2xl bg-orange-50/50 p-8 rounded-3xl border border-orange-200">
          <p className="mb-4 font-semibold text-gray-800">
            The program you have selected is either <strong className="text-orange-600">completed</strong> or <strong className="text-orange-600">coming soon</strong>.
          </p>
          <p className="mb-6 text-sm text-gray-600">
            To explore our other flagship programs, click the button below.
          </p>
          <Link
            to="/program/essential-skills"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition duration-300 shadow-md"
          >
            Explore ESTP Program
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-orange-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Programs
        </Link>

        {/* Hero Card */}
        <div className="bg-gradient-to-br from-orange-50/70 via-amber-50/40 to-white border border-orange-200/80 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden mb-12">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-orange-600 bg-white border border-orange-200 px-3 py-1 rounded-full shadow-xs mb-3">
              Brainovision Flagship Program
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight mb-6">
              {program.title}
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-orange-200/60 mb-8">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Dates</span>
                <span className="text-sm sm:text-base font-bold text-orange-600 flex items-center gap-1.5 mt-1">
                  <Calendar className="w-4 h-4 text-orange-500 shrink-0" />
                  {program.dates}
                </span>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Timings</span>
                <span className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-1.5 mt-1">
                  <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                  {program.time}
                </span>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Audience</span>
                <span className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-1.5 mt-1 truncate" title={program.audience}>
                  <Users className="w-4 h-4 text-orange-500 shrink-0" />
                  {program.audience}
                </span>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Participation Fee</span>
                <span className="text-sm sm:text-base font-extrabold text-orange-600 flex items-center gap-1.5 mt-1">
                  <Award className="w-4 h-4 text-amber-500 shrink-0" />
                  ₹{program.fee}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.open(program.registrationLinks.college)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Host College Registration
              </button>
              <button
                onClick={() => window.open(program.registrationLinks.student)}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-black font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Participant Registration
              </button>
              <button
                onClick={() => window.open(program.brochureLink)}
                className="px-6 py-3 rounded-xl border border-gray-300 hover:border-orange-400 text-gray-800 hover:text-orange-600 font-semibold text-sm transition-all cursor-pointer"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Chief Guests */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-orange-500 to-amber-500" />
            <h2 className="text-2xl font-bold text-black">Chief Guests & Dignitaries</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {program.overview.chiefGuests.map((guest, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all">
                <div className="flex gap-4 items-center">
                  <img src={guest.photo} alt={guest.name} className="w-20 h-20 rounded-2xl object-cover border-2 border-orange-400 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-black">{guest.name}</h3>
                    <p className="text-xs font-semibold text-orange-600 leading-snug mt-1">{guest.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed">{guest.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Trainer */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-orange-500 to-amber-500" />
            <h2 className="text-2xl font-bold text-black">Lead Trainer</h2>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-6 items-center">
            <img src={program.overview.leadTrainer.photo} alt={program.overview.leadTrainer.name} className="w-24 h-24 rounded-2xl object-cover border-2 border-orange-400 shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-black">{program.overview.leadTrainer.name}</h3>
              <p className="text-sm font-semibold text-orange-600">{program.overview.leadTrainer.title}</p>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{program.overview.leadTrainer.bio}</p>
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-orange-500 to-amber-500" />
            <h2 className="text-2xl font-bold text-black">Program Coordination Team</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {program.overview.coreTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs hover:shadow-sm flex items-center gap-4">
                <img src={member.photo} alt={member.name} className="w-16 h-16 rounded-xl object-cover border-2 border-orange-300 shrink-0" />
                <div>
                  <h3 className="text-base font-bold text-black">{member.name}</h3>
                  <p className="text-xs font-medium text-orange-600 mt-0.5">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Syllabus */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-orange-500 to-amber-500" />
            <h2 className="text-2xl font-bold text-black">Program Syllabus & Day Schedule</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {program.overview.syllabus.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-orange-50/50 border border-orange-200/70">
                <Brain className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Certificates */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-orange-500 to-amber-500" />
            <h2 className="text-2xl font-bold text-black">Sample Certificates</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(program.certificates).map(([key, url]) => (
              <div key={key} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                  {key.replace(/^\w/, c => c.toUpperCase())} Certificate
                </h3>
                <img src={url} alt={key} className="rounded-xl w-full border border-gray-100" />
              </div>
            ))}
          </div>
        </section>

        {/* Registrations Embed */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-orange-500 to-amber-500" />
            <h2 className="text-2xl font-bold text-black">Registration Status Sheets</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 mb-3">College Registrations</h3>
              <iframe src={program.registrationSheets.colleges} className="w-full h-96 border border-gray-200 rounded-xl" title="College Registrations" />
              <a href={`${program.registrationSheets.colleges}&export=download`} className="inline-block mt-3 text-sm font-semibold text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">Download Spreadsheet</a>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 mb-3">Student Registrations</h3>
              <iframe src={program.registrationSheets.students} className="w-full h-96 border border-gray-200 rounded-xl" title="Student Registrations" />
              <a href={`${program.registrationSheets.students}&export=download`} className="inline-block mt-3 text-sm font-semibold text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">Download Spreadsheet</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProgramDetails4;

