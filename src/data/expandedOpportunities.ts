import type { Opportunity, CategoryId } from '@/types';

const catalogOrganizations = ["MIT","Stanford University","Harvard University","Princeton University","Yale University","Columbia University","University of Pennsylvania","Cornell University","Duke University","Northwestern University","University of Chicago","Johns Hopkins University","University of Michigan","UC Berkeley","UCLA","Carnegie Mellon University","Georgia Tech","University of Washington","University of Texas at Austin","University of Illinois Urbana-Champaign","University of Toronto","University of British Columbia","McGill University","University of Waterloo","University of Alberta","University of Melbourne","Monash University","University of Sydney","Australian National University","University of Queensland","University of Oxford","University of Cambridge","Imperial College London","University College London","London School of Economics","University of Edinburgh","University of Manchester","University of Warwick","ETH Zurich","EPFL","National University of Singapore","Nanyang Technological University","University of Hong Kong","Tsinghua University","Peking University","IIT Bombay","IIT Delhi","IIT Madras","IIT Kanpur","IIT Kharagpur","IISc Bengaluru","IISER Pune","Tata Institute of Fundamental Research","Indian Statistical Institute","Ashoka University","UNESCO","UNICEF","United Nations","World Bank","WHO"] as const;

const catalogCategories: Record<CategoryId, string> = {
  scholarships: 'Scholarship & Financial Aid Opportunities',
  exams: 'Exams, Admissions Tests & Assessment Opportunities',
  colleges: 'College & University Admissions Opportunities',
  competitions: 'Student Competitions & Challenge Opportunities',
  olympiads: 'Olympiads & Academic Challenge Opportunities',
  fellowships: 'Fellowship & Leadership Opportunities',
  internships: 'Student Internship & Work-Experience Opportunities',
  research: 'Research & Academic Project Opportunities',
  'summer-programs': 'Summer School & Enrichment Opportunities',
  courses: 'Courses & Certificate Opportunities',
  mentorships: 'Mentorship & Career Guidance Opportunities',
  volunteering: 'Volunteering & Community-Service Opportunities',
  grants: 'Grants, Awards & Project-Funding Opportunities',
  learning: 'Free Learning & Open Education Opportunities',
  international: 'International Study, Exchange & Global Opportunities',
  other: 'Student Awards, Programs & Other Opportunities',
};

const internationalOrganizations = new Set([
  'UNESCO',
  'UNICEF',
  'United Nations',
  'World Bank',
  'WHO',
]);

const categoryGrades: Partial<Record<CategoryId, string[]>> = {
  competitions: ['Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12','Undergraduate'],
  olympiads: ['Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12','Undergraduate'],
  'summer-programs': ['Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12','Undergraduate'],
  learning: ['Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12','Undergraduate'],
  exams: ['Grade 10','Grade 11','Grade 12','Undergraduate','Postgraduate'],
};

const defaultGrades = ['Undergraduate', 'Postgraduate'];

/**
 * Broad discovery catalog: 60 leads in every category.
 * These are deliberately marked Needs Review. They are institution-level
 * leads, not claims that a specific 2026 call is currently open. This lets
 * Mission Khoj expand discovery without inventing deadlines, awards or URLs.
 */
export const expandedOpportunities: Opportunity[] = Object.entries(catalogCategories).flatMap(
  ([category, label]) =>
    catalogOrganizations.map((organization, index) => {
      const isInternationalOrganization = internationalOrganizations.has(organization);
      const grades = categoryGrades[category as CategoryId] ?? defaultGrades;

      return {
        id: `catalog-${category}-${index + 1}-${organization.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        name: `${organization} — ${label}`,
        organization,
        category: category as CategoryId,
        country: 'International',
        eligibility:
          'Eligibility varies by the specific program, award, course, exam, or intake. Verify the current official requirements before applying.',
        deadline: 'To be announced',
        funding: 'Self-Funded',
        description:
          `Catalog lead for ${organization}. This entry points students toward ${label.toLowerCase()} offered by or associated with this institution or organization. Current availability, eligibility, fees, funding and deadlines must be verified on the official website.`,
        lastVerified: '2026-09-09',
        status: 'Needs Review',
        tags: ['catalog', 'needs-review', category],
        ageRange: 'Varies',
        grades,
        subjects: ['All subjects'],
        location: 'International',
        mode: 'Online / Global',
        fee: 'Check official website',
        award: 'Varies',
        duration: 'Varies',
        providerType: isInternationalOrganization ? 'International Organization' : 'University',
        IndiaEligible: false,
      };
    })
);
