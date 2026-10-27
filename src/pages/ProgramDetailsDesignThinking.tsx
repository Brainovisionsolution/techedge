import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Users,
  Monitor,
  Award,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  Lightbulb,
  GraduationCap
} from 'lucide-react';

const ProgramDetailsDesignThinking: React.FC = () => {
  const focusAreas = [
    { title: 'Introduction to Design Thinking Methodology', desc: 'Core philosophical tenets, nonlinear 5-stage design cycles, and innovation mindsets.' },
    { title: 'Empathy & Human-Centered User Understanding', desc: 'Empathy mapping, immersive observation, contextual inquiry, and deep user interviewing.' },
    { title: 'Problem Identification & Framing', desc: 'Distinguishing core root problems from symptoms, uncovering unmet needs, and point-of-view statements.' },
    { title: 'The Define Stage: Synthesizing Insights', desc: 'Clustering qualitative insights into actionable problem spaces using "How Might We" frameworks.' },
    { title: 'Ideation Techniques & Creative Exploration', desc: 'Brainwriting, SCAMPER, lateral provocation, divergent thinking, and idea clustering.' },
    { title: 'Creative Problem Solving & Lateral Thinking', desc: 'Breaking cognitive biases, cross-industry analogies, and out-of-the-box solution matrices.' },
    { title: 'Rapid Prototyping & Low-Fidelity Testing', desc: 'Paper prototypes, wireframes, storyboard narratives, and physical low-fidelity modeling.' },
    { title: 'Testing, Validation & Iterative Refinement', desc: 'Structuring user feedback sessions, identifying validation failure points, and iterative pivoting.' },
    { title: 'Global Innovation Frameworks & Mindsets', desc: 'Stanford d.school, IDEO frameworks, Double Diamond methodology, and agile product development.' },
    { title: 'Real-World Industry & Social Case Studies', desc: 'Deconstruction of monumental design thinking triumphs in consumer tech, healthcare, and education.' },
    { title: 'Design Thinking for Education & Entrepreneurship', desc: 'Embedding human-centered design inside academic curriculum, incubation labs, and startup ideation.' }
  ];

  const learningOutcomes = [
    'Master the multi-stage Design Thinking methodology end-to-end.',
    'Identify, deconstruct, and define genuine real-world friction points.',
    'Generate innovative, user-centric solutions using structured ideation.',
    'Build low-cost, functional prototypes for testing concepts quickly.',
    'Implement agile, human-first problem-solving methodologies.',
    'Incorporate Design Thinking in academic curriculum, incubation, and projects.'
  ];

  const registrationUrl = 'https://rzp.io/rzp/hS9ioncd';

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 pb-20">
      {/* Top Banner & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-orange-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Programs
        </Link>

        {/* Hero Header */}
        <div className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-white border border-amber-200/80 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden mb-12">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-orange-600 bg-white border border-orange-200 shadow-xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Program 02 • National-Level Workshop
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight mb-4">
              National-Level Workshop on{' '}
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Design Thinking
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              Cultivate empathy-driven problem discovery, rapid low-fidelity prototyping, iterative design frameworks, and innovation in education and incubation.
            </p>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-amber-200/60">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Duration</span>
                <span className="text-base font-bold text-gray-900">2 Weeks</span>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Dates</span>
                <span className="text-base font-bold text-orange-600">28 Dec 2026 – 9 Jan 2027</span>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Timings</span>
                <span className="text-base font-bold text-gray-900">7:00 – 8:30 PM (IST)</span>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">Delivery Mode</span>
                <span className="text-base font-bold text-gray-900">Zoom & YouTube Live</span>
              </div>
            </div>

            {/* Registration CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-xl transition-all"
              >
                <span>Register for Design Thinking Workshop</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-xs sm:text-sm font-medium text-gray-600 self-center">
                Mode: <strong className="text-black">Virtual (Zoom & YouTube Live)</strong>
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Column: Key Focus Areas & Learning Outcomes */}
          <div className="lg:col-span-2 space-y-12">
            {/* Key Focus Areas */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-black">Key Focus Areas</h2>
                  <p className="text-xs text-gray-500">11 industry-calibrated modules covering human-first problem solving</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-gray-200 hover:border-orange-300 bg-white shadow-xs hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 leading-snug">{area.title}</h3>
                        <p className="text-xs text-gray-600 mt-1">{area.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What Participants Will Learn */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-black">What Participants Will Learn</h2>
                  <p className="text-xs text-gray-500">Practical innovation skills ready to be deployed across institutions</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {learningOutcomes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200"
                  >
                    <span className="w-7 h-7 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm font-medium text-gray-800 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Details, Fees & Registration */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-6 sticky top-24">
              <h3 className="text-lg font-bold text-black border-b border-gray-100 pb-3">
                Workshop Overview
              </h3>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">Dates</span>
                    <span className="font-bold text-black">28 Dec 2026 – 9 Jan 2027</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">Timings</span>
                    <span className="font-medium text-black">7:00 – 8:30 PM (IST)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">Audience</span>
                    <span className="font-medium text-black">Students, Faculty & Innovators</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Monitor className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider font-semibold">Platform</span>
                    <span className="font-medium text-black">Virtual (Zoom & YouTube Live)</span>
                  </div>
                </div>
              </div>

              {/* Fee Structure */}
              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Host College Fee:</span>
                  <span className="font-bold text-gray-900">₹9,999</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Participant Fee:</span>
                  <span className="text-lg font-black text-orange-600">₹49</span>
                </div>
              </div>

              {/* Register Button */}
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 hover:shadow-lg transition-all text-center"
              >
                <span>Register for Design Thinking Workshop</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Certification note */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-600">
                <Award className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Verified Certificate of Participation awarded upon workshop completion.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailsDesignThinking;
