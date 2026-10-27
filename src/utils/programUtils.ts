/**
 * Computes program status ('completed' | 'upcoming' | 'active') dynamically based on dates string.
 * Supports date formats such as:
 * - "23 Nov – 5 Dec 2026"
 * - "28 Dec 2026 – 9 Jan 2027"
 * - "02nd to 24th JAN 2025"
 * - "17th - 21th, FEB 2025"
 * - "June 23rd to June 27th, 2025"
 */
export function getProgramStatus(dates: string, fallbackStatus?: string): 'completed' | 'upcoming' | 'active' {
  if (!dates) return (fallbackStatus as any) || 'upcoming';

  try {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Check for 4-digit years in the string
    const yearMatches = dates.match(/\b(202\d)\b/g);

    const monthMap: Record<string, number> = {
      jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
      jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
    };

    const lower = dates.toLowerCase();
    const monthOccurrences: { month: number; index: number }[] = [];

    for (const [m, idx] of Object.entries(monthMap)) {
      let pos = lower.indexOf(m);
      while (pos !== -1) {
        monthOccurrences.push({ month: idx, index: pos });
        pos = lower.indexOf(m, pos + 1);
      }
    }

    monthOccurrences.sort((a, b) => a.index - b.index);

    if (yearMatches && yearMatches.length > 0) {
      const endYear = parseInt(yearMatches[yearMatches.length - 1], 10);
      const startYear = parseInt(yearMatches[0], 10);

      if (endYear < currentYear) {
        return 'completed';
      }
      if (startYear > currentYear) {
        return 'upcoming';
      }

      // If within current year range, check specific dates
      if (monthOccurrences.length > 0) {
        const lastMonth = monthOccurrences[monthOccurrences.length - 1].month;
        const currentMonth = now.getMonth();

        if (endYear === currentYear && lastMonth < currentMonth) {
          return 'completed';
        }
        if (startYear === currentYear && monthOccurrences[0].month > currentMonth) {
          return 'upcoming';
        }

        // Parse days
        const numbers = dates.match(/\b(\d{1,2})(?:st|nd|rd|th)?\b/gi);
        if (numbers && numbers.length > 0) {
          const days = numbers
            .map(n => parseInt(n.replace(/\D/g, ''), 10))
            .filter(n => n >= 1 && n <= 31);

          if (days.length > 0) {
            const endDay = days[days.length - 1];
            const startDay = days[0];
            const startMonth = monthOccurrences[0].month;

            const startDate = new Date(startYear, startMonth, startDay, 0, 0, 0);
            const endDate = new Date(endYear, lastMonth, endDay, 23, 59, 59);

            if (now.getTime() > endDate.getTime()) {
              return 'completed';
            } else if (now.getTime() < startDate.getTime()) {
              return 'upcoming';
            } else {
              return 'active';
            }
          }
        }
      }
    } else {
      // No year mentioned in string
      if (monthOccurrences.length > 0) {
        const lastMonth = monthOccurrences[monthOccurrences.length - 1].month;
        if (lastMonth < now.getMonth()) {
          return 'completed';
        }
      }
    }
  } catch (err) {
    console.error('Date parsing error:', err);
  }

  if (fallbackStatus === 'completed' || fallbackStatus === 'upcoming' || fallbackStatus === 'active') {
    return fallbackStatus;
  }

  return 'upcoming';
}
