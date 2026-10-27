import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Monitor, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { getProgramStatus } from '../utils/programUtils';

export interface ProgramCardProps {
  id: string;
  title: string;
  status: 'completed' | 'active' | 'coming_soon' | 'upcoming';
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

const ProgramCard: React.FC<ProgramCardProps> = ({
  id,
  title,
  status: initialStatus,
  dates,
  time,
  audience,
  hostFee,
  participantFee,
  mode,
  programTag,
  tagline,
  duration,
  registrationLink
}) => {
  // Dynamically resolve status according to date given
  const currentStatus = getProgramStatus(dates, initialStatus);

  const statusBadges = {
    completed: {
      badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-xs',
      dotClass: 'bg-emerald-500',
      text: 'Successfully Completed',
      icon: CheckCircle2
    },
    upcoming: {
      badgeClass: 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white shadow-md shadow-orange-500/20',
      dotClass: 'bg-white animate-pulse',
      text: 'Upcoming — Open',
      icon: Sparkles
    },
    active: {
      badgeClass: 'bg-blue-600 text-white shadow-md shadow-blue-500/20 animate-pulse',
      dotClass: 'bg-white',
      text: 'Active Now',
      icon: Sparkles
    },
    coming_soon: {
      badgeClass: 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white shadow-md shadow-orange-500/20',
      dotClass: 'bg-white animate-pulse',
      text: 'Upcoming',
      icon: Sparkles
    }
  };

  const badgeConfig = statusBadges[currentStatus] || statusBadges.upcoming;
  const BadgeIcon = badgeConfig.icon;

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-orange-400 shadow-md hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between h-full">
      <div className="relative">
        {/* Dynamic Status Badge */}
        <div className="flex justify-between items-start mb-3 gap-2">
          {programTag ? (
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200/80 px-2.5 py-0.5 rounded-full">
              {programTag}
            </span>
          ) : (
            <span />
          )}
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${badgeConfig.badgeClass}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${badgeConfig.dotClass}`} />
            <BadgeIcon className="w-3.5 h-3.5" />
            {badgeConfig.text}
          </span>
        </div>

        {/* Program Title */}
        <h3 className="text-lg font-bold text-black group-hover:text-orange-600 transition-colors mb-2 leading-snug line-clamp-2 min-h-[3rem]">
          {title}
        </h3>

        {/* Tagline / Subtitle */}
        {tagline && (
          <p className="text-xs text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {tagline}
          </p>
        )}

        {/* Program Metadata List */}
        <div className="space-y-2.5 text-gray-700 text-sm mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-2.5">
            <Calendar className="h-4 w-4 text-orange-500 shrink-0" />
            <span className="font-medium text-gray-800">{dates}</span>
            {duration && (
              <span className="ml-auto text-[11px] font-semibold text-orange-600 bg-orange-100/60 px-2 py-0.5 rounded-md">
                {duration}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2.5">
            <Clock className="h-4 w-4 text-orange-500 shrink-0" />
            <span className="text-gray-700">{time}</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <Users className="h-4 w-4 text-orange-500 shrink-0" />
            <span className="text-gray-700 truncate" title={audience}>{audience}</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <Monitor className="h-4 w-4 text-orange-500 shrink-0" />
            <span className="text-gray-700">{mode}</span>
          </div>
        </div>

        {/* Fee Information */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">Host College Fee</span>
            <span className="text-sm font-bold text-gray-900">₹{hostFee}</span>
          </div>
          <div className="text-right">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400">Participant Fee</span>
            <span className="text-base font-extrabold text-orange-600">₹{participantFee}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 pt-3 border-t border-gray-100">
        {registrationLink ? (
          <div className="grid grid-cols-2 gap-2.5">
            <Link
              to={`/program/${id}`}
              className="w-full bg-white hover:bg-orange-50 text-gray-900 hover:text-orange-600 border border-gray-300 hover:border-orange-400 text-center py-2.5 rounded-lg text-sm font-semibold transition-all shadow-xs"
            >
              View Details
            </Link>
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-white text-center py-2.5 rounded-lg text-sm font-bold shadow-md shadow-orange-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
            >
              <span>Register</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          <Link
            to={`/program/${id}`}
            className="block w-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:to-amber-600 text-white text-center py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all font-semibold text-sm"
          >
            View Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;