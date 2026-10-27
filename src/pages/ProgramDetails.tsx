// 2️⃣  ProgramDetails.jsx
import { useParams } from 'react-router-dom';
import ProgramDetails1 from './ProgramDetails1';
import ProgramDetails2 from './ProgramDetails2';
import ProgramDetails3 from './ProgramDetails3';
import ProgramDetails4 from './ProgramDetails4';
import ProgramDetails5 from './ProgramDetails5';
import ProgramDetailsGenAI from './ProgramDetailsGenAI';
import ProgramDetailsDesignThinking from './ProgramDetailsDesignThinking';

export default function ProgramDetails() {
  const { id } = useParams();

  switch (id) {
    case 'genai-fdp':
    case 'genai-fdp-2026':
      return <ProgramDetailsGenAI />;
    case 'design-thinking':
    case 'design-thinking-workshop':
    case 'design-thinking-workshop-2026':
      return <ProgramDetailsDesignThinking />;
    case 'java-fullstack':
      return <ProgramDetails1 />;
    case 'ai-faculty':
      return <ProgramDetails2 />;
    case 'essential-skills':
      return <ProgramDetails3 />;
    case 'career-dev':
      return <ProgramDetails4 />;
    case 'gen-ai':
      return <ProgramDetails5 />;
    default:
      return <h2 className="text-gray-900 text-center mt-20 text-xl font-bold">Program not found</h2>;
  }
}
