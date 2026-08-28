export const siteConfig = {
  name: 'Mission Khoj',
  hindiName: 'मिशन खोज',
  tagline: "Discover What's Possible.",
  description:
    'We help students discover scholarships, competitions, research programs, learning opportunities and more — opportunities that often exist beyond the classroom.',
  email: 'hello@missionkhoj.org',

  instagramHandle: '@mission_khoj',
  instagramUrl: 'https://www.instagram.com/mission_khoj/',
  instagramFollowUrl: 'https://www.instagram.com/mission_khoj/',

  foundedYear: 2026,

  stats: [
    { label: 'Opportunities discovered', value: '500+', placeholder: false },
    { label: 'Students helped', value: '50+', placeholder: false },
    { label: 'Categories', value: '10+', placeholder: false },
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
