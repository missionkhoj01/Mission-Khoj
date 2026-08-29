import type { Opportunity } from '@/types';

export const opportunities: Opportunity[] = [
  /* =========================================================
     SCHOLARSHIPS
  ========================================================= */

  {
    id: 'national-scholarship-portal',
    name: 'National Scholarship Portal',
    organization: 'Government of India',
    category: 'scholarships',
    country: 'India',
    location: 'India',
    eligibility:
      'Indian students who meet the eligibility requirements of individual scholarship schemes.',
    deadline: 'To be announced',
    funding: 'Fully Funded',
    description:
      'Official Government of India platform bringing together multiple scholarship schemes for eligible students.',
    sourceUrl: 'https://scholarships.gov.in/',
    officialWebsite: 'https://scholarships.gov.in/',
    applicationUrl: 'https://scholarships.gov.in/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['government', 'india', 'scholarship', 'financial-aid'],
    featured: true,
    type: 'Scholarship Portal',
    subcategory: 'Government Scholarships',
    grades: [
      'Grade 8',
      'Grade 9',
      'Grade 10',
      'Grade 11',
      'Grade 12',
      'Undergraduate',
      'Postgraduate',
    ],
    subjects: ['All Subjects'],
    mode: 'Online',
    providerType: 'Government',
    IndiaEligible: true,
  },

  {
    id: 'inspire-scholarship',
    name: 'INSPIRE Scholarship for Higher Education',
    organization: 'Department of Science & Technology',
    category: 'scholarships',
    country: 'India',
    location: 'India',
    eligibility:
      'Students meeting the current INSPIRE eligibility requirements and pursuing eligible science courses.',
    deadline: 'To be announced',
    funding: 'Stipend',
    description:
      'Government scholarship support for students pursuing higher education in basic and natural sciences.',
    sourceUrl: 'https://online-inspire.gov.in/',
    officialWebsite: 'https://online-inspire.gov.in/',
    applicationUrl: 'https://online-inspire.gov.in/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['inspire', 'science', 'government', 'scholarship'],
    type: 'Scholarship',
    subcategory: 'Science Scholarship',
    grades: ['Grade 12', 'Undergraduate'],
    subjects: [
      'Physics',
      'Chemistry',
      'Mathematics',
      'Biology',
      'Natural Sciences',
    ],
    mode: 'Online',
    providerType: 'Government',
    IndiaEligible: true,
  },

  {
    id: 'reliance-foundation-undergraduate',
    name: 'Reliance Foundation Undergraduate Scholarships',
    organization: 'Reliance Foundation',
    category: 'scholarships',
    country: 'India',
    location: 'India',
    eligibility:
      'Indian undergraduate students meeting the scholarship cycle requirements.',
    deadline: 'To be announced',
    funding: 'Fully Funded',
    description:
      'Undergraduate scholarship supporting students across India with financial assistance and development opportunities.',
    sourceUrl: 'https://www.scholarships.reliancefoundation.org/',
    officialWebsite: 'https://www.scholarships.reliancefoundation.org/',
    applicationUrl: 'https://www.scholarships.reliancefoundation.org/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['reliance', 'undergraduate', 'scholarship', 'india'],
    featured: true,
    type: 'Scholarship',
    subcategory: 'Undergraduate',
    grades: ['Undergraduate'],
    subjects: ['All Subjects'],
    mode: 'Online',
    providerType: 'Foundation',
    IndiaEligible: true,
  },

  /* =========================================================
     EXAMS
  ========================================================= */

  {
    id: 'jee-main',
    name: 'JEE Main',
    organization: 'National Testing Agency',
    category: 'exams',
    country: 'India',
    location: 'India',
    eligibility:
      'Students meeting the current JEE Main eligibility and qualification requirements.',
    deadline: 'To be announced',
    funding: 'Paid',
    description:
      'National engineering entrance examination used for admission to participating institutions and as a pathway to JEE Advanced.',
    sourceUrl: 'https://jeemain.nta.nic.in/',
    officialWebsite: 'https://jeemain.nta.nic.in/',
    applicationUrl: 'https://jeemain.nta.nic.in/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['jee', 'engineering', 'entrance-exam', 'india'],
    featured: true,
    type: 'Entrance Exam',
    subcategory: 'Engineering',
    grades: ['Grade 12'],
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    mode: 'Online',
    providerType: 'Government',
    IndiaEligible: true,
  },

  {
    id: 'neet-ug',
    name: 'NEET (UG)',
    organization: 'National Testing Agency',
    category: 'exams',
    country: 'India',
    location: 'India',
    eligibility:
      'Students meeting the current undergraduate medical entrance requirements.',
    deadline: 'To be announced',
    funding: 'Paid',
    description:
      'National entrance examination for undergraduate medical education in India.',
    sourceUrl: 'https://neet.nta.nic.in/',
    officialWebsite: 'https://neet.nta.nic.in/',
    applicationUrl: 'https://neet.nta.nic.in/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['neet', 'medical', 'medicine', 'entrance-exam'],
    featured: true,
    type: 'Entrance Exam',
    subcategory: 'Medical',
    grades: ['Grade 12'],
    subjects: ['Physics', 'Chemistry', 'Biology'],
    mode: 'Online',
    providerType: 'Government',
    IndiaEligible: true,
  },

  {
    id: 'cuet-ug',
    name: 'CUET (UG)',
    organization: 'National Testing Agency',
    category: 'exams',
    country: 'India',
    location: 'India',
    eligibility:
      'Students meeting the current CUET undergraduate requirements.',
    deadline: 'To be announced',
    funding: 'Paid',
    description:
      'Common University Entrance Test used by participating institutions for undergraduate admissions.',
    sourceUrl: 'https://cuet.nta.nic.in/',
    officialWebsite: 'https://cuet.nta.nic.in/',
    applicationUrl: 'https://cuet.nta.nic.in/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['cuet', 'university', 'admission', 'entrance-exam'],
    type: 'Entrance Exam',
    subcategory: 'University Admission',
    grades: ['Grade 12'],
    subjects: ['Multiple Subjects'],
    mode: 'Online',
    providerType: 'Government',
    IndiaEligible: true,
  },

  {
    id: 'jee-advanced',
    name: 'JEE Advanced',
    organization: 'IITs',
    category: 'exams',
    country: 'India',
    location: 'India',
    eligibility:
      'Candidates meeting the current JEE Advanced qualification and eligibility criteria.',
    deadline: 'To be announced',
    funding: 'Paid',
    description:
      'Advanced engineering entrance examination used for admission to undergraduate programs at the Indian Institutes of Technology.',
    sourceUrl: 'https://jeeadv.ac.in/',
    officialWebsite: 'https://jeeadv.ac.in/',
    applicationUrl: 'https://jeeadv.ac.in/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['jee', 'iit', 'engineering', 'entrance-exam'],
    featured: true,
    type: 'Entrance Exam',
    subcategory: 'Engineering',
    grades: ['Grade 12'],
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    mode: 'Online',
    providerType: 'Government',
    IndiaEligible: true,
  },

  {
    id: 'clat',
    name: 'Common Law Admission Test (CLAT)',
    organization: 'Consortium of National Law Universities',
    category: 'exams',
    country: 'India',
    location: 'India',
    eligibility:
      'Students meeting the current undergraduate CLAT eligibility requirements.',
    deadline: 'To be announced',
    funding: 'Paid',
    description:
      'National-level law entrance examination for participating National Law Universities.',
    sourceUrl: 'https://consortiumofnlus.ac.in/',
    officialWebsite: 'https://consortiumofnlus.ac.in/',
    applicationUrl: 'https://consortiumofnlus.ac.in/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['clat', 'law', 'entrance-exam', 'nlus'],
    type: 'Entrance Exam',
    subcategory: 'Law',
    grades: ['Grade 12'],
    subjects: ['English', 'Legal Reasoning', 'Logical Reasoning'],
    mode: 'Online',
    providerType: 'University',
    IndiaEligible: true,
  },

  {
    id: 'sat',
    name: 'SAT',
    organization: 'College Board',
    category: 'exams',
    country: 'International',
    location: 'Global',
    eligibility:
      'Students applying to institutions that accept SAT scores.',
    deadline: 'Rolling',
    funding: 'Paid',
    description:
      'Standardized college admissions test accepted by universities in many countries.',
    sourceUrl: 'https://satsuite.collegeboard.org/sat',
    officialWebsite: 'https://satsuite.collegeboard.org/sat',
    applicationUrl: 'https://satsuite.collegeboard.org/sat',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['sat', 'college-admissions', 'international'],
    type: 'Standardized Test',
    subcategory: 'University Admission',
    grades: ['Grade 11', 'Grade 12'],
    subjects: ['Mathematics', 'Reading', 'Writing'],
    mode: 'Online / Global',
    providerType: 'Other',
    IndiaEligible: true,
  },

  /* =========================================================
     COLLEGES
  ========================================================= */

  {
    id: 'iit-undergraduate-admissions',
    name: 'IIT Undergraduate Admissions',
    organization: 'Indian Institutes of Technology',
    category: 'colleges',
    country: 'India',
    location: 'India',
    eligibility:
      'Students meeting JEE Advanced, Class 12 and centralized counselling requirements.',
    deadline: 'To be announced',
    funding: 'Self-Funded',
    description:
      'Undergraduate admission pathway to the Indian Institutes of Technology.',
    sourceUrl: 'https://jeeadv.ac.in/',
    officialWebsite: 'https://jeeadv.ac.in/',
    applicationUrl: 'https://josaa.nic.in/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['iit', 'engineering', 'admission', 'india'],
    featured: true,
    type: 'College Admission',
    subcategory: 'Engineering',
    grades: ['Grade 12'],
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    mode: 'Online',
    providerType: 'Government',
    IndiaEligible: true,
  },

  {
    id: 'iiser-admissions',
    name: 'IISER Admissions',
    organization: 'Indian Institutes of Science Education and Research',
    category: 'colleges',
    country: 'India',
    location: 'India',
    eligibility:
      'Students meeting the current IISER admission criteria.',
    deadline: 'To be announced',
    funding: 'Self-Funded',
    description:
      'Undergraduate science education and research admission opportunities at IISER campuses.',
    sourceUrl: 'https://www.iiseradmission.in/',
    officialWebsite: 'https://www.iiseradmission.in/',
    applicationUrl: 'https://www.iiseradmission.in/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['iiser', 'science', 'research', 'admission'],
    featured: true,
    type: 'College Admission',
    subcategory: 'Science',
    grades: ['Grade 12'],
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    mode: 'Online',
    providerType: 'Government',
    IndiaEligible: true,
  },

  /* =========================================================
     COMPETITIONS
  ========================================================= */

  {
    id: 'breakthrough-junior-challenge',
    name: 'Breakthrough Junior Challenge',
    organization: 'Breakthrough Prize',
    category: 'competitions',
    country: 'International',
    location: 'Global',
    eligibility:
      'Students within the competition age and participation requirements.',
    deadline: 'To be announced',
    funding: 'Fully Funded',
    description:
      'Global science video competition challenging students to explain scientific concepts creatively.',
    sourceUrl: 'https://breakthroughjuniorchallenge.org/',
    officialWebsite: 'https://breakthroughjuniorchallenge.org/',
    applicationUrl: 'https://breakthroughjuniorchallenge.org/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['science', 'video', 'competition', 'global'],
    featured: true,
    type: 'Competition',
    subcategory: 'Science Communication',
    ageRange: '13–18',
    grades: [
      'Grade 8',
      'Grade 9',
      'Grade 10',
      'Grade 11',
      'Grade 12',
    ],
    subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
    mode: 'Online / Global',
    providerType: 'Foundation',
    IndiaEligible: true,
  },

  {
    id: 'immerse-essay-competition',
    name: 'Immerse Education Essay Competition',
    organization: 'Immerse Education',
    category: 'competitions',
    country: 'International',
    location: 'Global',
    eligibility:
      'School students meeting the current competition requirements.',
    deadline: 'To be announced',
    funding: 'Partially Funded',
    description:
      'International academic essay competition covering a wide range of subjects.',
    sourceUrl: 'https://www.immerse.education/essay-competition/',
    officialWebsite: 'https://www.immerse.education/essay-competition/',
    applicationUrl: 'https://www.immerse.education/essay-competition/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['essay', 'writing', 'competition', 'academic'],
    type: 'Competition',
    subcategory: 'Essay',
    grades: [
      'Grade 8',
      'Grade 9',
      'Grade 10',
      'Grade 11',
      'Grade 12',
    ],
    subjects: ['Humanities', 'Social Sciences', 'STEM', 'Writing'],
    mode: 'Online / Global',
    providerType: 'Company',
    IndiaEligible: true,
  },

  /* =========================================================
     OLYMPIADS
  ========================================================= */

  {
    id: 'international-mathematical-olympiad',
    name: 'International Mathematical Olympiad',
    organization: 'International Mathematical Olympiad',
    category: 'olympiads',
    country: 'International',
    location: 'Global',
    eligibility:
      'School students selected through national mathematical olympiad systems.',
    deadline: 'To be announced',
    funding: 'Fully Funded',
    description:
      'International mathematics competition for high-school students.',
    sourceUrl: 'https://www.imo-official.org/',
    officialWebsite: 'https://www.imo-official.org/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['mathematics', 'olympiad', 'international'],
    type: 'Olympiad',
    subcategory: 'Mathematics',
    grades: [
      'Grade 8',
      'Grade 9',
      'Grade 10',
      'Grade 11',
      'Grade 12',
    ],
    subjects: ['Mathematics'],
    mode: 'Online / Global',
    providerType: 'International Organization',
    IndiaEligible: true,
  },

  {
    id: 'international-physics-olympiad',
    name: 'International Physics Olympiad',
    organization: 'International Physics Olympiad',
    category: 'olympiads',
    country: 'International',
    location: 'Global',
    eligibility:
      'Secondary-school students selected through national physics olympiad systems.',
    deadline: 'To be announced',
    funding: 'Fully Funded',
    description:
      'International physics competition for secondary-school students.',
    sourceUrl: 'https://www.ipho-new.org/',
    officialWebsite: 'https://www.ipho-new.org/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['physics', 'olympiad', 'science', 'international'],
    type: 'Olympiad',
    subcategory: 'Physics',
    grades: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
    subjects: ['Physics'],
    mode: 'Online / Global',
    providerType: 'International Organization',
    IndiaEligible: true,
  },

  {
    id: 'international-informatics-olympiad',
    name: 'International Olympiad in Informatics',
    organization: 'International Olympiad in Informatics',
    category: 'olympiads',
    country: 'International',
    location: 'Global',
    eligibility:
      'School students selected through national informatics olympiad systems.',
    deadline: 'To be announced',
    funding: 'Fully Funded',
    description:
      'International programming and algorithmic problem-solving competition for school students.',
    sourceUrl: 'https://ioinformatics.org/',
    officialWebsite: 'https://ioinformatics.org/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['programming', 'coding', 'algorithms', 'olympiad'],
    type: 'Olympiad',
    subcategory: 'Computer Science',
    grades: [
      'Grade 8',
      'Grade 9',
      'Grade 10',
      'Grade 11',
      'Grade 12',
    ],
    subjects: ['Computer Science', 'Programming', 'Algorithms'],
    mode: 'Online / Global',
    providerType: 'International Organization',
    IndiaEligible: true,
  },

  /* =========================================================
     FELLOWSHIPS
  ========================================================= */

  {
    id: 'global-youth-mobilization',
    name: 'Global Youth Mobilization Opportunities',
    organization: 'Global Youth Mobilization',
    category: 'fellowships',
    country: 'International',
    location: 'Global',
    eligibility:
      'Eligibility varies by individual youth program and application cycle.',
    deadline: 'To be announced',
    funding: 'Partially Funded',
    description:
      'Youth programs supporting leadership, social impact and community engagement.',
    sourceUrl: 'https://www.globalyouthmobilization.org/',
    officialWebsite: 'https://www.globalyouthmobilization.org/',
    lastVerified: '2026-08-29',
    status: 'Needs Review',
    tags: ['youth', 'leadership', 'fellowship', 'social-impact'],
    type: 'Fellowship',
    subcategory: 'Youth Leadership',
    grades: ['Grade 11', 'Grade 12', 'Undergraduate'],
    subjects: ['Leadership', 'Social Impact'],
    mode: 'Online / Global',
    providerType: 'International Organization',
    IndiaEligible: true,
  },

  /* =========================================================
     INTERNSHIPS
  ========================================================= */

  {
    id: 'google-student-research',
    name: 'Google Student Research Opportunities',
    organization: 'Google Research',
    category: 'internships',
    country: 'International',
    location: 'Global',
    eligibility:
      'Eligibility varies by individual student research opportunity.',
    deadline: 'Rolling',
    funding: 'Paid',
    description:
      'Student research and internship opportunities associated with Google Research.',
    sourceUrl:
      'https://research.google/programs-and-events/student-engagement/',
    officialWebsite:
      'https://research.google/programs-and-events/student-engagement/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['google', 'research', 'internship', 'technology'],
    type: 'Internship',
    subcategory: 'Research',
    grades: ['Grade 12', 'Undergraduate', 'Postgraduate'],
    subjects: ['Computer Science', 'Artificial Intelligence', 'Technology'],
    mode: 'Online / Global',
    providerType: 'Company',
    IndiaEligible: true,
  },

  /* =========================================================
     RESEARCH
  ========================================================= */

  {
    id: 'openlearn-research-methods',
    name: 'Understanding Research Methods',
    organization: 'The Open University',
    category: 'research',
    country: 'International',
    location: 'Online',
    eligibility:
      'Open to learners interested in research methods.',
    deadline: 'Rolling',
    funding: 'Free',
    description:
      'Free learning resource introducing research methods and approaches to conducting research.',
    sourceUrl: 'https://www.open.edu/openlearn/',
    officialWebsite: 'https://www.open.edu/openlearn/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['research', 'methods', 'free-course', 'academic-skills'],
    type: 'Research Course',
    subcategory: 'Research Methods',
    grades: ['Grade 11', 'Grade 12', 'Undergraduate', 'Postgraduate'],
    subjects: ['Research', 'Academic Skills'],
    mode: 'Online',
    providerType: 'University',
    IndiaEligible: true,
  },

  /* =========================================================
     SUMMER PROGRAMS
  ========================================================= */

  {
    id: 'immerse-summer-programs',
    name: 'Immerse Education Summer Programs',
    organization: 'Immerse Education',
    category: 'summer-programs',
    country: 'International',
    location: 'United Kingdom / Global',
    eligibility:
      'School students meeting program-specific age and eligibility requirements.',
    deadline: 'To be announced',
    funding: 'Self-Funded',
    description:
      'Academic summer programs covering subjects including medicine, engineering, business, law and humanities.',
    sourceUrl: 'https://www.immerse.education/',
    officialWebsite: 'https://www.immerse.education/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['summer-school', 'academic', 'international'],
    type: 'Summer Program',
    subcategory: 'Academic Enrichment',
    grades: [
      'Grade 8',
      'Grade 9',
      'Grade 10',
      'Grade 11',
      'Grade 12',
    ],
    subjects: ['Medicine', 'Engineering', 'Business', 'Law', 'Humanities'],
    mode: 'Offline',
    providerType: 'Company',
    IndiaEligible: true,
  },

  /* =========================================================
     COURSES
  ========================================================= */

  {
    id: 'openlearn-free-courses',
    name: 'OpenLearn Free Courses',
    organization: 'The Open University',
    category: 'courses',
    country: 'International',
    location: 'Online',
    eligibility:
      'Open to learners; individual course requirements vary.',
    deadline: 'Rolling',
    funding: 'Free',
    description:
      'Free online courses across science, technology, business, humanities, education and other subjects.',
    sourceUrl: 'https://www.open.edu/openlearn/free-courses',
    officialWebsite: 'https://www.open.edu/openlearn/free-courses',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['free', 'courses', 'online-learning', 'openlearn'],
    featured: true,
    type: 'Online Course',
    subcategory: 'Free Learning',
    grades: [
      'Grade 8',
      'Grade 9',
      'Grade 10',
      'Grade 11',
      'Grade 12',
      'Undergraduate',
      'Postgraduate',
    ],
    subjects: ['Science', 'Technology', 'Business', 'Humanities', 'Education'],
    mode: 'Online',
    providerType: 'University',
    IndiaEligible: true,
  },

  {
    id: 'khan-academy',
    name: 'Khan Academy',
    organization: 'Khan Academy',
    category: 'courses',
    country: 'International',
    location: 'Online',
    eligibility:
      'Open learning platform for students and independent learners.',
    deadline: 'Rolling',
    funding: 'Free',
    description:
      'Free educational lessons, practice exercises and learning resources.',
    sourceUrl: 'https://www.khanacademy.org/',
    officialWebsite: 'https://www.khanacademy.org/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['free', 'learning', 'mathematics', 'science'],
    type: 'Learning Platform',
    subcategory: 'Free Learning',
    grades: [
      'Grade 8',
      'Grade 9',
      'Grade 10',
      'Grade 11',
      'Grade 12',
    ],
    subjects: [
      'Mathematics',
      'Science',
      'Computer Science',
      'Economics',
    ],
    mode: 'Online',
    providerType: 'NGO',
    IndiaEligible: true,
  },

  /* =========================================================
     MENTORSHIPS
  ========================================================= */

  {
    id: 'youth-mentorship-programs',
    name: 'Youth Mentorship Opportunities',
    organization: 'Global Youth Programs',
    category: 'mentorships',
    country: 'International',
    location: 'Global',
    eligibility:
      'Eligibility varies according to the individual mentoring program.',
    deadline: 'Rolling',
    funding: 'Free',
    description:
      'Mentorship and guidance opportunities helping young people explore education, careers and leadership.',
    sourceUrl: 'https://www.globalyouthmobilization.org/',
    officialWebsite: 'https://www.globalyouthmobilization.org/',
    lastVerified: '2026-08-29',
    status: 'Needs Review',
    tags: ['mentorship', 'career', 'youth', 'leadership'],
    type: 'Mentorship',
    subcategory: 'Career Guidance',
    grades: [
      'Grade 9',
      'Grade 10',
      'Grade 11',
      'Grade 12',
      'Undergraduate',
    ],
    subjects: ['Career', 'Leadership', 'Education'],
    mode: 'Online',
    providerType: 'International Organization',
    IndiaEligible: true,
  },

  /* =========================================================
     VOLUNTEERING
  ========================================================= */

  {
    id: 'un-volunteers',
    name: 'UN Volunteers',
    organization: 'United Nations Volunteers',
    category: 'volunteering',
    country: 'International',
    location: 'Global',
    eligibility:
      'Eligibility varies by individual volunteer assignment.',
    deadline: 'Rolling',
    funding: 'Free',
    description:
      'Volunteer opportunities supporting United Nations development and humanitarian work.',
    sourceUrl: 'https://app.unv.org/',
    officialWebsite: 'https://www.unv.org/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['un', 'volunteering', 'global', 'social-impact'],
    type: 'Volunteering',
    subcategory: 'International Development',
    grades: ['Undergraduate', 'Postgraduate'],
    subjects: ['Development', 'Humanitarian Work', 'Social Impact'],
    mode: 'Online / Global',
    providerType: 'International Organization',
    IndiaEligible: true,
  },

  /* =========================================================
     GRANTS
  ========================================================= */

  {
    id: 'student-project-grants',
    name: 'Student Project Grant Opportunities',
    organization: 'Global Youth Programs',
    category: 'grants',
    country: 'International',
    location: 'Global',
    eligibility:
      'Eligibility varies by individual student project grant.',
    deadline: 'To be announced',
    funding: 'Fully Funded',
    description:
      'Funding opportunities for student-led projects, community initiatives and educational ideas.',
    sourceUrl: 'https://www.globalyouthmobilization.org/',
    officialWebsite: 'https://www.globalyouthmobilization.org/',
    lastVerified: '2026-08-29',
    status: 'Needs Review',
    tags: ['grants', 'student-project', 'social-impact'],
    type: 'Grant',
    subcategory: 'Student Projects',
    grades: ['Grade 11', 'Grade 12', 'Undergraduate'],
    subjects: ['Entrepreneurship', 'Social Impact', 'Community'],
    mode: 'Online / Global',
    providerType: 'Foundation',
    IndiaEligible: true,
  },

  /* =========================================================
     INTERNATIONAL
  ========================================================= */

  {
    id: 'erasmus-plus',
    name: 'Erasmus+ Opportunities',
    organization: 'European Union',
    category: 'international',
    country: 'International',
    location: 'Europe / Global',
    eligibility:
      'Eligibility varies by Erasmus+ action and participating organization.',
    deadline: 'To be announced',
    funding: 'Fully Funded',
    description:
      'European Union education, training, youth and mobility opportunities.',
    sourceUrl: 'https://erasmus-plus.ec.europa.eu/',
    officialWebsite: 'https://erasmus-plus.ec.europa.eu/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['erasmus', 'europe', 'exchange', 'international'],
    type: 'International Program',
    subcategory: 'Exchange',
    grades: ['Grade 11', 'Grade 12', 'Undergraduate', 'Postgraduate'],
    subjects: ['Education', 'Youth', 'Training'],
    mode: 'Online / Global',
    providerType: 'International Organization',
    IndiaEligible: true,
  },

  /* =========================================================
     LEARNING
  ========================================================= */

  {
    id: 'khan-academy-learning',
    name: 'Khan Academy Free Learning',
    organization: 'Khan Academy',
    category: 'learning',
    country: 'International',
    location: 'Online',
    eligibility:
      'Open to students and independent learners.',
    deadline: 'Rolling',
    funding: 'Free',
    description:
      'Free lessons, exercises and learning resources across core academic subjects.',
    sourceUrl: 'https://www.khanacademy.org/',
    officialWebsite: 'https://www.khanacademy.org/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['free', 'learning', 'math', 'science'],
    type: 'Learning Platform',
    subcategory: 'Academic Learning',
    grades: [
      'Grade 8',
      'Grade 9',
      'Grade 10',
      'Grade 11',
      'Grade 12',
    ],
    subjects: ['Mathematics', 'Science', 'Computer Science'],
    mode: 'Online',
    providerType: 'NGO',
    IndiaEligible: true,
  },

  /* =========================================================
     OTHER
  ========================================================= */

  {
    id: 'google-digital-learning',
    name: 'Google Digital Learning Resources',
    organization: 'Google',
    category: 'other',
    country: 'International',
    location: 'Online',
    eligibility:
      'Open to learners; individual resources may have different requirements.',
    deadline: 'Rolling',
    funding: 'Free',
    description:
      'Digital learning resources and training opportunities for students and learners.',
    sourceUrl: 'https://grow.google/intl/en_in/',
    officialWebsite: 'https://grow.google/intl/en_in/',
    lastVerified: '2026-08-29',
    status: 'Verified',
    tags: ['google', 'digital-skills', 'technology', 'free'],
    type: 'Learning Program',
    subcategory: 'Digital Skills',
    grades: [
      'Grade 9',
      'Grade 10',
      'Grade 11',
      'Grade 12',
      'Undergraduate',
    ],
    subjects: ['Technology', 'Digital Skills', 'Career'],
    mode: 'Online',
    providerType: 'Company',
    IndiaEligible: true,
  },
];
