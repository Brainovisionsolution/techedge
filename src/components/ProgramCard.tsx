import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Monitor } from 'lucide-react';

interface ProgramCardProps {
  id: string;
  title: string;
  status: 'completed' | 'active' | 'coming_soon';
  dates: string;
  time: string;
  audience: string;
  hostFee: string;
  participantFee: string;
  mode: string;
}

const ProgramCard = ({
  id,
  title,
  status,
  dates,
  time,
  audience,
  hostFee,
  participantFee,
  mode
}: ProgramCardProps) => {
  const statusColors = {
    completed: 'bg-green-500',
    active: 'bg-[#00D1FF]',
    coming_soon: 'bg-[#FFD700]'
  };

  const statusText = {
    completed: 'Successfully Completed',
    active: 'Active Now',
    coming_soon: 'Coming Soon'
  };

  return (
    <div className="bg-[#1E1656]/50 backdrop-blur-md rounded-lg p-6 border border-[#00D1FF]/20 hover:border-[#00D1FF]/50 transition-all">
      <div className="relative">
        <span className={`absolute -top-3 -right-3 ${statusColors[status]} text-black px-3 py-1 rounded-full text-sm font-medium`}>
          {statusText[status]}
        </span>
        <h3 className="text-xl font-bold text-[#00D1FF] mb-4">{title}</h3>
        <div className="space-y-3 text-gray-300">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-[#FFD700]" />
            <span>{dates}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-[#FFD700]" />
            <span>{time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-[#FFD700]" />
            <span>{audience}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Monitor className="h-5 w-5 text-[#FFD700]" />
            <span>{mode}</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-[#FFD700]">Host College Fee: ₹{hostFee}</p>
          <p className="text-[#FFD700]">Participant Fee: ₹{participantFee}</p>
        </div>
        <Link
          to={`/program/${id}`}
          className="mt-6 block w-full bg-gradient-to-r from-[#00D1FF] to-[#00D1FF]/70 text-black text-center py-2 rounded-md hover:from-[#00D1FF]/90 hover:to-[#00D1FF]/60 transition-all font-semibold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProgramCard;