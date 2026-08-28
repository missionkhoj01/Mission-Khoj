import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'scholarships',
    name: 'Scholarships',
    description: 'Merit-based, need-based and fully funded opportunities.',
    icon: 'GraduationCap',
    count: 12,
  },
  {
    id: 'competitions',
    name: 'Competitions',
    description: 'Olympiads, hackathons, essay competitions, STEM challenges and more.',
    icon: 'Trophy',
    count: 9,
  },
  {
    id: 'research',
    name: 'Research',
    description: 'Research programs, internships, science fairs and university opportunities.',
    icon: 'FlaskConical',
    count: 7,
  },
  {
    id: 'learning',
    name: 'Free Learning',
    description: 'Courses, certifications, university lectures and free learning resources.',
    icon: 'BookOpen',
    count: 14,
  },
  {
    id: 'international',
    name: 'International',
    description: 'Summer schools, exchanges, conferences and global youth programs.',
    icon: 'Globe2',
    count: 8,
  },
  {
    id: 'other',
    name: 'Other Opportunities',
    description: 'Fellowships, volunteering, leadership programs and more.',
    icon: 'Rocket',
    count: 6,
  },
];
