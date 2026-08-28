export const siteConfig = {
  name: 'Mission Khoj',
  hindiName: 'मिशन खोज',
  tagline: "Discover What's Possible.",
  description:
    'We help students discover scholarships, competitions, research programs, learning opportunities and more — opportunities that often exist beyond the classroom.',
  email: 'hello@missionkhoj.org',
  instagramHandle: '@missionkhoj',
  instagramUrl: 'https://instagram.com/missionkhoj',
  instagramFollowUrl: 'https://instagram.com/missionkhoj',
  foundedYear: 2026,
  stats: [
    { label: 'Opportunities discovered', value: '500+', placeholder: true },
    { label: 'Students helped', value: '50+', placeholder: true },
    { label: 'Categories', value: '10+', placeholder: true },
    { label: 'Free', value: '100%', placeholder: false },
  ],
  nav: [
    { label: 'Opportunities', href: '#opportunities' },
    { label: 'Opportunity Finder', href: '#finder' },
    { label: 'Ask Khoj', href: '#ask' },
    { label: 'Guides', href: '#guides' },
    { label: 'Stories', href: '#stories' },
    { label: 'About', href: '#about' },
  ],
};

export type SiteConfig = typeof siteConfig;
