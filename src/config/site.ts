export const siteConfig = {
  name: 'Mission Khoj',
  hindiName: 'मिशन खोज',

  tagline: "Discover What's Possible.",

  description:
    'Mission Khoj helps students discover scholarships, exams, colleges, competitions, olympiads, fellowships, internships, research programs, summer programs, courses, mentorships, volunteering, grants and international opportunities — all in one place.',

  email: 'hello@missionkhoj.org',

  instagramHandle: '@mission_khoj',

  instagramUrl:
    'https://www.instagram.com/mission_khoj/',

  instagramFollowUrl:
    'https://www.instagram.com/mission_khoj/',

  foundedYear: 2026,

  /*
   * Stats are calculated dynamically from
   * src/data/opportunities.ts
   *
   * Do NOT put fixed opportunity numbers here.
   */

  stats: [],

  nav: [
    {
      label: 'Opportunities',
      href: '#opportunities',
    },

    {
      label: 'Opportunity Finder',
      href: '#finder',
    },

    {
      label: 'Ask Khoj',
      href: '#ask',
    },

    {
      label: 'Guides',
      href: '#guides',
    },

    {
      label: 'Stories',
      href: '#stories',
    },

    {
      label: 'About',
      href: '#about',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
