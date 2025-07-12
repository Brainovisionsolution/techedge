// 2️⃣  ProgramDetails.jsx
import { useParams } from 'react-router-dom';
import ProgramDetails1 from './ProgramDetails1';
import ProgramDetails2 from './ProgramDetails2';
import ProgramDetails3 from './ProgramDetails3';
import ProgramDetails4 from './ProgramDetails4';
import ProgramDetails5 from './ProgramDetails5';

export default function ProgramDetails() {
  const { id } = useParams();

  switch (id) {
    case 'java-fullstack':
      return <ProgramDetails1 />;
    case 'ai-faculty':
      return <ProgramDetails2 />;
    case 'essential-skills':
      return <ProgramDetails3 />;
    case 'career-dev':
      return <ProgramDetails4 />;
    case 'gen-ai':
      return <ProgramDetails5 />;   // or ProgramDetails5, etc.
    default:
      return <h2 className="text-white text-center mt-10">Program not found</h2>;
  }
}

