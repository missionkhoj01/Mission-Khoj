export type CategoryId =
  | 'scholarships'
  | 'competitions'
  | 'research'
  | 'learning'
  | 'international'
  | 'other';

export type FundingType =
  | 'Fully Funded'
  | 'Partially Funded'
  | 'Paid'
  | 'Free'
  | 'Stipend'
  | 'Self-Funded';

export type OppStatus = 'Verified' | 'Needs Review' | 'Expired';

export interface Opportunity {
  id: string;
  name: string;
  organization: string;
  category: CategoryId;
  country: string;
  eligibility: string;
  deadline: string;
  funding: FundingType;
  description: string;
  sourceUrl?: string;
  lastVerified: string;
  status: OppStatus;
  tags: string[];
  featured?: boolean;
}

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  icon: string;
  count: number;
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  body: GuideSection[];
}

export interface GuideSection {
  heading: string;
  body: string[];
}

export interface StudentStory {
  id: string;
  name: string;
  country: string;
  opportunity: string;
  quote: string;
  learned: string;
  anonymous?: boolean;
  demo?: boolean;
}

export interface DeadlineEntry {
  id: string;
  opportunityName: string;
  deadline: string;
  category: CategoryId;
  status: OppStatus;
}

export interface InstaPost {
  id: string;
  caption: string;
  tag: string;
  gradient: string;
}
