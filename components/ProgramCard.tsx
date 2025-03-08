import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users } from 'lucide-react';

interface ProgramCardProps {
  id: string;
  title: string;
  status: 'completed' | 'active' | 'coming_soon';
  dates: string;
  time: string;
  audience: string;
  hostFee: string;
  participantFee: string;
}

const ProgramCard = ({
  id,
  title,
  status,
  dates,
  time,
  audience,
  hostFee,
  participantFee
}: ProgramCardProps) => {
  const statusColors = {
    completed: 'bg-green-500',
    active: 'bg-blue-500',
    coming_soon: 'bg-yellow-500'
  };

  const statusText = {
    completed: 'Successfully Completed',
    active: 'Active Now',
    coming_soon: 'Coming Soon'
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-yellow-400/50 transition-all">
      <div className="relative">
        <span className={`absolute -top-3 -right-3 ${statusColors[status]} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {statusText[status]}
        </span>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="space-y-3 text-gray-300">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>{dates}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>{time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>{audience}</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-yellow-400">Host College Fee: ₹{hostFee}</p>
          <p className="text-yellow-400">Participant Fee: ₹{participantFee}</p>
        </div>
        <Link
          to={`/program/${id}`}
          className="mt-6 block w-full bg-yellow-400 text-black text-center py-2 rounded-md hover:bg-yellow-300 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProgramCard;