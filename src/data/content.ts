import type { StudentStory, DeadlineEntry, InstaPost } from '@/types';

export const stories: StudentStory[] = [
  {
    id: 'story-1',
    name: 'Aanya',
    country: 'India',
    opportunity: 'Young Researchers Summer Program',
    quote:
      "I didn't know this opportunity existed until I found it through Khoj. It completely changed what I want to study.",
    learned:
      'I learned how real research works — not just facts, but asking questions and being okay with not knowing the answer yet.',
    anonymous: false,
    demo: true,
  },
  {
    id: 'story-2',
    name: 'Daniel',
    country: 'Kenya',
    opportunity: 'Global Youth Science & Innovation Award',
    quote:
      'I almost didn’t apply because I thought international competitions weren’t for someone from my school. I was wrong.',
    learned:
      'The opportunity was less about winning and more about finally presenting an idea I cared about to people who took it seriously.',
    anonymous: false,
    demo: true,
  },
  {
    id: 'story-3',
    name: 'S.',
    country: 'Pakistan',
    opportunity: 'Future Scholars Merit Scholarship',
    quote:
      'The scholarship covered my final year. Without it, I’m not sure I would have stayed in school.',
    learned: 'I learned that help exists — you just have to find it in time.',
    anonymous: true,
    demo: true,
  },
];

export const deadlines: DeadlineEntry[] = [
  {
    id: 'dl-1',
    opportunityName: "Writers’ Circle Essay Competition",
    deadline: '2026-09-20',
    category: 'competitions',
    status: 'Verified',
  },
  {
    id: 'dl-2',
    opportunityName: 'Future Scholars Merit Scholarship',
    deadline: '2026-09-30',
    category: 'scholarships',
    status: 'Verified',
  },
  {
    id: 'dl-3',
    opportunityName: 'CodeForGood Student Hackathon',
    deadline: '2026-10-05',
    category: 'competitions',
    status: 'Verified',
  },
  {
    id: 'dl-4',
    opportunityName: 'Global Youth Science & Innovation Award',
    deadline: '2026-10-15',
    category: 'competitions',
    status: 'Verified',
  },
  {
    id: 'dl-5',
    opportunityName: 'Mathematics Olympiad Training Camp',
    deadline: '2026-10-28',
    category: 'competitions',
    status: 'Needs Review',
  },
  {
    id: 'dl-6',
    opportunityName: 'Young Researchers Summer Program',
    deadline: '2026-11-01',
    category: 'research',
    status: 'Verified',
  },
  {
    id: 'dl-7',
    opportunityName: 'Pathways Leadership Program',
    deadline: '2026-11-20',
    category: 'other',
    status: 'Verified',
  },
  {
    id: 'dl-8',
    opportunityName: 'Need-Based Student Aid Grant',
    deadline: '2026-12-01',
    category: 'scholarships',
    status: 'Verified',
  },
];

export const instaPosts: InstaPost[] = [
  { id: 'ig-1', caption: 'New scholarship added — fully funded, deadline Sept 30', tag: 'Scholarship', gradient: 'from-gold-700/40 to-ink-800' },
  { id: 'ig-2', caption: 'Hackathon this weekend — beginners welcome', tag: 'Competition', gradient: 'from-ink-700 to-ink-850' },
  { id: 'ig-3', caption: 'Free AI course with certificate — no deadline', tag: 'Free Learning', gradient: 'from-gold-800/30 to-ink-850' },
  { id: 'ig-4', caption: 'Research program applications open — grades 10–12', tag: 'Research', gradient: 'from-ink-750 to-ink-900' },
  { id: 'ig-5', caption: 'Essay competition — top essays published', tag: 'Writing', gradient: 'from-gold-600/30 to-ink-800' },
  { id: 'ig-6', caption: 'Summer program deadlines closing soon', tag: 'Deadlines', gradient: 'from-ink-800 to-gold-900/30' },
];
