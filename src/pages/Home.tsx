import React, { useState, useEffect, useRef } from 'react';
import ProgramCard from '../components/ProgramCard';
import {
  Brain,
  GraduationCap,
  Users,
  FileText,
  Send,
  Phone,
  CheckCircle2,
  ArrowRight,
  Trophy,
  Building,
  Globe2,
  Award,
  Laptop,
  BookOpen,
  Presentation,
  Target,
  Lightbulb,
  Rocket,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  Sparkles,
  Mail,
  MapPin,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { getProgramStatus } from '../utils/programUtils';

type ProgramStatus = "completed" | "active" | "coming_soon" | "upcoming";

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
  programTag?: string;
  tagline?: string;
  duration?: string;
  registrationLink?: string;
}

const programs: Program[] = [
  {
    id: 'genai-fdp-2026',
    title: 'National-Level FDP on Generative AI & Intelligent Agents',
    programTag: 'Program 01 • Faculty Development Program',
    tagline: 'Master modern Large Language Models, Intelligent Multi-Agent Systems, prompt crafting, AI-assisted content production, and responsible pedagogical tools.',
    duration: '2 Weeks',
    status: 'upcoming',
    dates: '23 Nov – 5 Dec 2026',
    time: '7:00 – 8:30 PM',
    audience: 'Faculty, Researchers & Academicians',
    hostFee: '14999',
    participantFee: '99',
    mode: 'Virtual (Zoom & YouTube Live)',
    registrationLink: 'https://rzp.io/rzp/It7X7uT'
  },
  {
    id: 'design-thinking-workshop-2026',
    title: 'National-Level Workshop on Design Thinking',
    programTag: 'Program 02 • National-Level Workshop',
    tagline: 'Cultivate empathy-driven problem discovery, rapid low-fidelity prototyping, iterative design frameworks, and innovation in education and incubation.',
    duration: '2 Weeks',
    status: 'upcoming',
    dates: '28 Dec 2026 – 9 Jan 2027',
    time: '7:00 – 8:30 PM',
    audience: 'Students, Faculty & Innovators',
    hostFee: '9999',
    participantFee: '49',
    mode: 'Virtual (Zoom & YouTube Live)',
    registrationLink: 'https://rzp.io/rzp/hS9ioncd'
  },
  {
    id: 'java-fullstack',
    title: 'SHORT TERM TRAINING PROGRAM (STTP) ON JAVA FULL STACK BY USING REACT AND AI',
    programTag: 'National-Level STTP',
    status: 'completed',
    dates: '02nd to 24th JAN 2025',
    time: '07:00 PM to 09:00 PM',
    audience: 'Faculties & Students',
    hostFee: '14999',
    participantFee: '99',
    mode: 'Virtual (Zoom & YouTube Live)'
  },
  {
    id: 'ai-faculty',
    title: 'NATIONAL LEVEL FACULTY DEVELOPMENT PROGRAM (FDP) ON ARTIFICIAL INTELLIGENCE (AI)',
    programTag: 'National-Level FDP',
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
    programTag: 'National-Level ESTP',
    status: 'completed',
    dates: 'June 23rd to June 27th, 2025',
    time: '07:00 PM to 08:30 PM',
    audience: 'All Students & Faculties',
    hostFee: '2999',
    participantFee: '99',
    mode: 'Virtual (Zoom & YouTube Live)'
  },
  {
    id: 'career-dev',
    title: 'National Level Faculty Development Program (FDP) on Generative AI',
    programTag: 'National-Level FDP',
    status: 'completed',
    dates: '4th - 8th, AUG 2025',
    time: '07:00 PM to 08:00 PM',
    audience: 'Faculty, Researchers, and Academicians',
    hostFee: '1999',
    participantFee: '9',
    mode: 'Virtual (Zoom & YouTube Live)'
  },
  {
    id: 'gen-ai',
    title: 'International Career Development Program on SDG, ESG, and Industry Innovations',
    programTag: 'International Career Dev',
    status: 'completed',
    dates: '15th - 19th, SEP 2025',
    time: '07:00 PM to 08:00 PM',
    audience: 'Students, Professionals, Researchers, and Educators globally',
    hostFee: '1999',
    participantFee: '9',
    mode: 'Virtual (Zoom & YouTube Live)'
  }
];

const processSteps = [
  {
    step: "01",
    title: "College Registration",
    description: "Colleges register as recognized host institutions to empower campus students.",
    icon: GraduationCap,
    tag: "Host Institution"
  },
  {
    step: "02",
    title: "Student Enrollment",
    description: "Students & faculty register easily for specialized technical bootcamps.",
    icon: Users,
    tag: "Open Access"
  },
  {
    step: "03",
    title: "Program Delivery",
    description: "Hands-on live interactive sessions conducted via Zoom & YouTube Live.",
    icon: Brain,
    tag: "Live Workshops"
  },
  {
    step: "04",
    title: "Certification",
    description: "Receive AICTE, AIEFR, ANUVADINI & N.E.A.T approved recognized certificates.",
    icon: FileText,
    tag: "Govt. Approved"
  }
];

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  color: string;
  glow: string;
}

const statsData: StatItem[] = [
  {
    target: 650,
    suffix: "+",
    label: "Hackathons & Workshops",
    icon: Trophy,
    color: "from-amber-400 to-orange-500",
    glow: "hover:shadow-orange-500/25"
  },
  {
    target: 1000,
    suffix: "+",
    label: "Partner Colleges",
    icon: Building,
    color: "from-yellow-400 to-amber-500",
    glow: "hover:shadow-amber-500/25"
  },
  {
    target: 100000,
    suffix: "+",
    label: "Students Trained",
    icon: Users,
    color: "from-orange-500 to-amber-400",
    glow: "hover:shadow-orange-500/25"
  },
  {
    target: 50000,
    suffix: "+",
    label: "Faculty Trained",
    icon: GraduationCap,
    color: "from-amber-500 to-yellow-400",
    glow: "hover:shadow-yellow-500/25"
  },
  {
    target: 30,
    suffix: "+",
    label: "Working Technologies",
    icon: Globe2,
    color: "from-yellow-400 to-orange-500",
    glow: "hover:shadow-amber-500/25"
  }
];

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    title: 'Hackathons & Coding',
    tag: '650+ Hackathons',
    animClass: 'animate-float-slow'
  },
  {
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    title: 'Campus Tech Seminars',
    tag: '1,000+ Colleges',
    animClass: 'animate-float-alt'
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    title: 'AI & Bootcamps',
    tag: '100K+ Students',
    animClass: 'animate-float-alt'
  },
  {
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    title: 'Hands-on Workshops',
    tag: 'Real-world Tech',
    animClass: 'animate-float-slow'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80',
    title: 'Faculty Training Programs',
    tag: '50K+ Faculty',
    animClass: 'animate-float-slow'
  },
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    title: 'Innovation & Awards',
    tag: '30+ Technologies',
    animClass: 'animate-float-alt'
  }
];

const AnimatedCounter = ({ target, suffix = '', duration = 1800, shouldStart = false }: { target: number; suffix?: string; duration?: number; shouldStart?: boolean }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (shouldStart && !hasAnimated) {
      setHasAnimated(true);
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [shouldStart, hasAnimated, target, duration]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

interface BenefitItem {
  icon: React.ElementType;
  title: string;
  description: string;
  tag: string;
  image: string;
}

const hostBenefits: BenefitItem[] = [
  {
    icon: Trophy,
    title: "Recognition & Prestige",
    tag: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    description: "Establish your institution as a Technical Education Innovation Hub recognized nationally across academic bodies."
  },
  {
    icon: Award,
    title: "Official Certificates",
    tag: "Accredited Awards",
    image: "/logos/Host College Appreciation.png",
    description: "Receive College and Department Appreciation Certificates endorsed by leading industry and academic councils."
  },
  {
    icon: Users,
    title: "Network Growth",
    tag: "Industry-Academia",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    description: "Unlock enhanced Industry-Academia collaboration opportunities and expand strategic faculty connections."
  },
  {
    icon: Laptop,
    title: "Digital Presence",
    tag: "National Reach",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "Featured prominently on our website, partner showcases, and national promotional press releases."
  },
  {
    icon: BookOpen,
    title: "Knowledge Repository",
    tag: "Faculty LMS",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    description: "Permanent faculty access to recorded masterclasses, curriculum decks, code repos, and training materials."
  },
  {
    icon: Presentation,
    title: "Hosting Rights",
    tag: "Priority Conclave",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    description: "Exclusive priority rights to host future national hackathons, faculty development bootcamps, and workshops."
  }
];

const participantBenefits: BenefitItem[] = [
  {
    icon: Brain,
    title: "Hands-on Experience",
    tag: "Practical Labs",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    description: "Practical experience with cutting-edge technologies, live industry frameworks, and guided code labs."
  },
  {
    icon: Award,
    title: "Certification",
    tag: "Verified Credential",
    image: "/logos/Student Participation.png",
    description: "Internationally recognized, verifiable digital certificates that accelerate academic & placement portfolios."
  },
  {
    icon: Target,
    title: "Career Growth",
    tag: "Career Launchpad",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "Enhanced employability and career prospects with high-value technical skill mastery for top placements."
  },
  {
    icon: Users,
    title: "Networking",
    tag: "Global Community",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    description: "Connect with prominent industry experts, tech leaders, enterprise architects, and ambitious peers nationwide."
  },
  {
    icon: Lightbulb,
    title: "Innovation Skills",
    tag: "Lateral Thinking",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    description: "Learn the latest industry trends, rapid prototyping, empathy discovery, and structured ideation workflows."
  },
  {
    icon: Rocket,
    title: "Project Experience",
    tag: "Live Capstone",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    description: "Work on real-world projects and case studies tackling industry challenges with measurable production outcomes."
  }
];

const Home = () => {
  const [programFilter, setProgramFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  const [benefitFilter, setBenefitFilter] = useState<'all' | 'colleges' | 'participants'>('all');
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Professional Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    role: 'Host College Partnership',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const [processInView, setProcessInView] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);

  const upcomingCount = programs.filter(p => {
    const s = getProgramStatus(p.dates, p.status);
    return s === 'upcoming' || s === 'active';
  }).length;

  const completedCount = programs.filter(p => {
    const s = getProgramStatus(p.dates, p.status);
    return s === 'completed';
  }).length;

  const filteredPrograms = programs.filter(program => {
    const status = getProgramStatus(program.dates, program.status);
    if (programFilter === 'all') return true;
    if (programFilter === 'upcoming') return status === 'upcoming' || status === 'active';
    if (programFilter === 'completed') return status === 'completed';
    return true;
  });

  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const processObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    if (processRef.current) {
      processObserver.observe(processRef.current);
    }

    return () => {
      statsObserver.disconnect();
      processObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white border-b border-orange-100">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[url('/logos/TechEdgeBootcampsBanner.png')] bg-cover bg-center opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          {/* Title First */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-black mb-6 tracking-tight">
              <span className="text-black">Tech Edge </span>
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Bootcamps
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-800 font-medium mb-8 max-w-3xl mx-auto">
              Join our <span className="text-black font-semibold">AICTE, AIEFR, ANUVADINI, N.E.A.T</span> approved training programs and workshops
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <a
                href="#programs"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-500 text-black rounded-full font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all"
              >
                View Programs
              </a>
              <a
                href="https://rzp.io/l/lvQf1hGN"
                className="px-8 py-3 bg-white border-2 border-black text-black hover:bg-black hover:text-amber-400 rounded-full font-bold transition-all shadow-sm"
              >
                EDU-PLAN @ ₹1999
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
      <section className="py-20 bg-white border-b border-orange-100 relative overflow-hidden">
        {/* Subtle warm ambient background blur */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-orange-100/50 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              <span className="text-black">About </span>
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                BrainoVision
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Preserved text + clean unboxed stats in black */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
                  BrainoVision is a pioneering educational technology company dedicated to bridging the gap between academia and industry. We specialize in delivering high-quality training programs that empower students and faculty with cutting-edge skills and knowledge.
                </p>
                <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
                  Our mission is to transform education through innovative technology solutions and industry-aligned training programs. We collaborate with leading institutions and experts to create comprehensive learning experiences that prepare participants for the future of work.
                </p>
              </div>

              {/* Animated Stats below the text (NO BOXES, numbers in BLACK only) */}
              <div ref={statsRef} className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-600">
                    Our Proven Impact & Scale
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-7 gap-x-6">
                  {statsData.map((stat, index) => (
                    <div key={index} className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2">
                        <stat.icon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <span className="text-3xl sm:text-4xl font-black text-black tracking-tight">
                          <AnimatedCounter target={stat.target} suffix={stat.suffix} shouldStart={statsInView} />
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Exactly ONE rectangular image */}
            <div className="relative group">
              {/* Subtle decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/15 to-amber-500/15 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 aspect-[16/10] w-full bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                  alt="BrainoVision Bootcamps and Hackathons"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-black text-xs font-bold shadow-md mb-2">
                    BrainoVision Bootcamps
                  </span>
                  <p className="text-base sm:text-lg font-bold text-white drop-shadow">
                    Empowering 100,000+ Students & Faculties Nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Process Section */}
      <section ref={processRef} className="py-24 bg-white border-b border-orange-100 relative overflow-hidden">
        {/* Subtle background ambient blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-gradient-to-r from-orange-100/40 via-amber-100/40 to-yellow-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Progressive Workflow
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-center mb-4">
              <span className="text-black">Program </span>
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              A progressive 4-stage journey connecting institutions, educators, and students from registration to recognized certification.
            </p>
          </div>

          {/* Desktop Process View with Progressive SVG Path Drawing (Hills & Mountains) */}
          <div className="hidden md:block relative pb-16">
            {/* SVG Connecting Hills & Mountains Path between stages */}
            <svg
              className="absolute top-2 left-0 w-full h-56 pointer-events-none z-0"
              viewBox="0 0 1000 220"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="progLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ea580c" />
                  <stop offset="30%" stopColor="#f59e0b" />
                  <stop offset="70%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
                <linearGradient id="mountainFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </linearGradient>
                <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 1. Distant Mountain Silhouette Peaks in Background */}
              <path
                d="M 60 170 Q 220 30, 375 70 Q 500 20, 625 155 Q 750 15, 940 120"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5 5"
                fill="none"
                opacity="0.25"
              />

              {/* 2. Soft Mountain Slope Shading under the path */}
              <path
                d="M 125 140 C 215 140, 285 50, 375 50 C 465 50, 535 140, 625 140 C 715 140, 785 40, 875 40 L 875 220 L 125 220 Z"
                fill="url(#mountainFillGrad)"
              />

              {/* 3. Underlying dashed mountain track line */}
              <path
                d="M 125 140 C 215 140, 285 50, 375 50 C 465 50, 535 140, 625 140 C 715 140, 785 40, 875 40"
                stroke="#fed7aa"
                strokeWidth="3.5"
                strokeDasharray="6 6"
                fill="none"
              />

              {/* 4. Progressive drawing line climbing up hills and down valleys */}
              {processInView && (
                <path
                  d="M 125 140 C 215 140, 285 50, 375 50 C 465 50, 535 140, 625 140 C 715 140, 785 40, 875 40"
                  pathLength="100"
                  stroke="url(#progLineGrad)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  fill="none"
                  className="animate-draw-line-hills"
                />
              )}

              {/* 5. Glowing gliding particle riding the mountain wave */}
              {processInView && (
                <circle r="6" fill="#f59e0b" filter="url(#lineGlow)">
                  <animateMotion
                    path="M 125 140 C 215 140, 285 50, 375 50 C 465 50, 535 140, 625 140 C 715 140, 785 40, 875 40"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </svg>

            {/* 4 Stage Cards Grid with Staggered Mountain Elevation (Ups & Downs) */}
            <div className="grid grid-cols-4 gap-8 relative z-10 pt-4">
              {processSteps.map((step, index) => {
                // Ups and downs elevation classes:
                // Stage 01: Valley Base (low: translateY 14)
                // Stage 02: Hill Peak (high: translateY -3)
                // Stage 03: Valley Dip (low: translateY 14)
                // Stage 04: Mountain Summit (high: translateY -5)
                const isPeak = index % 2 === 1;
                const isSummit = index === 3;

                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center group transition-transform duration-500 ${
                      isSummit
                        ? 'md:-translate-y-5'
                        : isPeak
                        ? 'md:-translate-y-3'
                        : 'md:translate-y-14'
                    }`}
                  >
                    {/* Stage Icon Node */}
                    <div className="relative mb-6">
                      <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/25 to-amber-500/25 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 text-black flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ring-4 ring-white relative z-10 ${
                          isSummit ? 'shadow-amber-500/35 ring-amber-100' : 'shadow-orange-500/25'
                        }`}
                      >
                        <step.icon className="w-7 h-7" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black text-white text-[11px] font-black flex items-center justify-center border-2 border-white shadow-sm z-20">
                        {step.step}
                      </div>

                      {/* Small Mountain/Valley Indicator Tag */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-black text-white whitespace-nowrap shadow-sm z-20">
                        {isSummit ? 'Summit 🏔️' : isPeak ? 'Hill Peak' : 'Valley'}
                      </div>
                    </div>

                    {/* Card Content on White Background */}
                    <div
                      className={`w-full bg-white rounded-2xl p-6 border shadow-xl transition-all duration-300 text-center flex-1 flex flex-col items-center group-hover:-translate-y-2 ${
                        isSummit
                          ? 'border-amber-300 shadow-amber-500/15 hover:border-amber-400 hover:shadow-2xl'
                          : 'border-gray-100 shadow-gray-200/50 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-500/15'
                      }`}
                    >
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-600 mb-3 border border-orange-100">
                        Stage {step.step}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-black mb-2 group-hover:text-orange-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <span className="mt-auto inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-100">
                        {step.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Process View with Switchback Winding Mountain Trail Line */}
          <div className="md:hidden relative">
            <svg
              className="absolute top-6 bottom-6 left-8 w-8 h-[calc(100%-3rem)] pointer-events-none z-0"
              viewBox="0 0 32 1000"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="progLineGradVert" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ea580c" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
              </defs>
              {/* Winding mountain switchback trail */}
              <path
                d="M 16 0 Q 30 120, 16 250 Q 2 370, 16 500 Q 30 620, 16 750 Q 2 870, 16 1000"
                stroke="#fed7aa"
                strokeWidth="3"
                strokeDasharray="6 6"
                fill="none"
              />
              {processInView && (
                <path
                  d="M 16 0 Q 30 120, 16 250 Q 2 370, 16 500 Q 30 620, 16 750 Q 2 870, 16 1000"
                  stroke="url(#progLineGradVert)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  className="animate-draw-line-vertical"
                />
              )}
            </svg>

            <div className="space-y-6 relative z-10 pl-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 text-black flex items-center justify-center shadow-md shadow-orange-500/20 ring-4 ring-white flex-shrink-0 relative z-10">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-5 border border-gray-100 shadow-md">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-50 text-orange-600 border border-orange-100">
                        Stage {step.step}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400">
                        {step.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-black mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-white border-b border-orange-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200/80 mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Empowering Higher Education
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Programs
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Explore national faculty development programs, hands-on student bootcamps, and innovation workshops.
            </p>

            {/* Filter Pills */}
            <div className="mt-8 inline-flex items-center p-1.5 bg-gray-100 rounded-full border border-gray-200">
              <button
                onClick={() => setProgramFilter('all')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  programFilter === 'all'
                    ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white shadow-md shadow-orange-500/20'
                    : 'text-gray-700 hover:text-black hover:bg-white/70'
                }`}
              >
                All Programs ({programs.length})
              </button>
              <button
                onClick={() => setProgramFilter('upcoming')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  programFilter === 'upcoming'
                    ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white shadow-md shadow-orange-500/20'
                    : 'text-gray-700 hover:text-black hover:bg-white/70'
                }`}
              >
                Upcoming ({upcomingCount})
              </button>
              <button
                onClick={() => setProgramFilter('completed')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  programFilter === 'completed'
                    ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white shadow-md shadow-orange-500/20'
                    : 'text-gray-700 hover:text-black hover:bg-white/70'
                }`}
              >
                Completed ({completedCount})
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredPrograms.map(program => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white border-b border-orange-100/60 relative overflow-hidden">
        {/* Subtle warm ambient glow */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200/80 mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Institutional & Student Growth
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
              Exclusive{' '}
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Empowering partner institutions with national prestige and equipping participants with career-defining skills and recognized credentials.
            </p>

            {/* Filter Pills */}
            <div className="mt-8 inline-flex items-center p-1.5 bg-gray-100 rounded-full border border-gray-200">
              <button
                onClick={() => setBenefitFilter('all')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  benefitFilter === 'all'
                    ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white shadow-md shadow-orange-500/20'
                    : 'text-gray-700 hover:text-black hover:bg-white/70'
                }`}
              >
                All Benefits (12)
              </button>
              <button
                onClick={() => setBenefitFilter('colleges')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  benefitFilter === 'colleges'
                    ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white shadow-md shadow-orange-500/20'
                    : 'text-gray-700 hover:text-black hover:bg-white/70'
                }`}
              >
                For Host Colleges (6)
              </button>
              <button
                onClick={() => setBenefitFilter('participants')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  benefitFilter === 'participants'
                    ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white shadow-md shadow-orange-500/20'
                    : 'text-gray-700 hover:text-black hover:bg-white/70'
                }`}
              >
                For Participants (6)
              </button>
            </div>
          </div>

          {/* Host Colleges Subsection */}
          {(benefitFilter === 'all' || benefitFilter === 'colleges') && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1.5 h-7 rounded-full bg-gradient-to-b from-orange-500 to-amber-500" />
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    For Host Colleges
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Institutional empowerment, accreditation recognition, and national outreach
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {hostBenefits.map((benefit, index) => {
                  const IconComp = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-gray-200/90 hover:border-orange-400 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between h-full"
                    >
                      {/* Image container */}
                      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                        <img
                          src={benefit.image}
                          alt={benefit.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                        
                        {/* Tag */}
                        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-gray-900 font-bold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs border border-gray-100">
                          {benefit.tag}
                        </span>

                        {/* Icon Badge */}
                        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white flex items-center justify-center shadow-md shadow-orange-500/25">
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-lg font-bold text-black group-hover:text-orange-600 transition-colors mb-2 leading-snug">
                            {benefit.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Participant Benefits Subsection */}
          {(benefitFilter === 'all' || benefitFilter === 'participants') && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1.5 h-7 rounded-full bg-gradient-to-b from-amber-500 to-yellow-500" />
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    For Participants
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Students & faculty professional growth, verified credentials, and industry mastery
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {participantBenefits.map((benefit, index) => {
                  const IconComp = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-gray-200/90 hover:border-orange-400 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between h-full"
                    >
                      {/* Image container */}
                      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                        <img
                          src={benefit.image}
                          alt={benefit.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                        
                        {/* Tag */}
                        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-gray-900 font-bold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs border border-gray-100">
                          {benefit.tag}
                        </span>

                        {/* Icon Badge */}
                        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white flex items-center justify-center shadow-md shadow-orange-500/25">
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-lg font-bold text-black group-hover:text-orange-600 transition-colors mb-2 leading-snug">
                            {benefit.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-orange-100/60 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200/80 mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Direct Communication
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
              Get in{' '}
              <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Have questions about host college onboarding, faculty development programs, or student certifications? Our academic support desk is here to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Contact Channels & Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Info Cards */}
              <div className="bg-white rounded-3xl border border-gray-200/90 shadow-md p-6 sm:p-8 space-y-6">
                <h3 className="text-xl font-bold text-black border-b border-gray-100 pb-3 flex items-center gap-2">
                  <Building className="w-5 h-5 text-orange-500" />
                  Academic Partnerships Office
                </h3>

                <div className="space-y-5">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/70 text-orange-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">Official Email</span>
                      <a
                        href="mailto:connect@brainovision.in"
                        className="text-base font-bold text-gray-900 hover:text-orange-600 transition-colors"
                      >
                        connect@brainovision.in
                      </a>
                      <span className="block text-xs text-gray-500 mt-0.5">Prompt response within 2–4 hours</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">Direct Helpline</span>
                      <a
                        href="tel:+919063611159"
                        className="text-base font-bold text-gray-900 hover:text-orange-600 transition-colors"
                      >
                        +91-90636 11159
                      </a>
                      <span className="block text-xs text-gray-500 mt-0.5">Mon – Sat, 9:00 AM – 7:00 PM (IST)</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/70 text-orange-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">Headquarters</span>
                      <p className="text-sm font-semibold text-gray-900 leading-snug">
                        Brainovision Solutions India Pvt. Ltd.
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Madhapur, HITEC City, Hyderabad, Telangana 500081, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/919063611159?text=Hi!%20I'm%20interested%20in%20knowing%20more%20about%20TechEdge%20Bootcamps."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:+919063611159"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-100 hover:bg-orange-50 hover:text-orange-600 border border-gray-200 text-gray-800 font-bold text-xs transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call Helpline
                  </a>
                </div>
              </div>

              {/* Social Connect Card */}
              <div className="bg-gradient-to-br from-orange-50/60 via-amber-50/40 to-white rounded-3xl border border-orange-200/80 p-6 shadow-sm">
                <span className="block text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">Connect Across Platforms</span>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Join 100,000+ students and 50,000+ faculty on our official social community channels.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/brainovision/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-orange-600 hover:border-orange-300 hover:shadow-md flex items-center justify-center transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/Brainovisions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-orange-600 hover:border-orange-300 hover:shadow-md flex items-center justify-center transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.youtube.com/@brainovision"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-orange-600 hover:border-orange-300 hover:shadow-md flex items-center justify-center transition-all"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href="https://whatsapp.com/channel/0029VasS8Af8vd1WyBKELA0N"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Channel"
                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-gray-700 hover:text-orange-600 hover:border-orange-300 hover:shadow-md flex items-center justify-center transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Professional Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-gray-200/90 shadow-lg p-8 sm:p-10 relative overflow-hidden">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-2xl font-black text-black">
                      Send an Inquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Fill out the form below and our academic relationship officer will reach out promptly.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Online & Ready
                  </span>
                </div>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-black">{contactForm.name || 'Valued Partner'}</strong>. Your message regarding <span className="font-semibold text-orange-600">{contactForm.role}</span> has been logged. Our academic team will respond to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setContactForm({
                          name: '',
                          email: '',
                          phone: '',
                          college: '',
                          role: 'Host College Partnership',
                          message: ''
                        });
                      }}
                      className="mt-6 px-6 py-2.5 rounded-xl border border-orange-500 text-orange-600 hover:bg-orange-50 font-bold text-sm transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    {/* Role / Inquiry Selector */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        I am inquiring about:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[
                          'Host College Partnership',
                          'Student Registration',
                          'Faculty FDP Inquiry',
                          'Hackathon Conclave',
                          'MoU Signing',
                          'Other'
                        ].map((roleOption) => (
                          <button
                            type="button"
                            key={roleOption}
                            onClick={() => setContactForm({ ...contactForm, role: roleOption })}
                            className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-left truncate ${
                              contactForm.role === roleOption
                                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-transparent shadow-xs'
                                : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-orange-50 hover:text-black hover:border-orange-300'
                            }`}
                          >
                            {roleOption}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Dr. / Prof. / Mr. / Ms."
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm text-gray-900 bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@college.edu.in"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm text-gray-900 bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone & College Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm text-gray-900 bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Institution / Organization
                        </label>
                        <input
                          type="text"
                          placeholder="College / University Name"
                          value={contactForm.college}
                          onChange={(e) => setContactForm({ ...contactForm, college: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm text-gray-900 bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Message / Query Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please share details regarding your preferred program dates, estimated student numbers, or specific institutional requirements..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm text-gray-900 bg-white transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Official Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {/* Trust Footnote */}
                    <div className="pt-2 flex items-center justify-center gap-2 text-xs text-gray-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Your information is strictly protected. AICTE, AIEFR & N.E.A.T accredited partner.</span>
                    </div>
                  </form>
                )}
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
