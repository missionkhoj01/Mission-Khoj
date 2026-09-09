import { opportunities as verifiedOpportunities } from '@/data/opportunities';
import { expandedOpportunities } from '@/data/expandedOpportunities';

/**
 * The full discovery catalog used by the site.
 * Verified/current records remain first; broad catalog leads follow them
 * and are clearly marked Needs Review.
 */
export const allOpportunities = [
  ...verifiedOpportunities,
  ...expandedOpportunities,
];
