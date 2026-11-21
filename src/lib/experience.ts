import type { Experience } from './types';

export const experience: Experience[] = [
  {
    header: 'Nov 2026 - Now',
    title: 'Software Developer · Aurelis',
    description:
      'Custom software for clients as a small Toronto agency, so I work across the entire stack, from dattabase to what the client sees. Currently shipping an Agentic AI mentor app.',
  },
  {
    header: '3 co-op terms',
    title: 'Application Developer · Kenna',
    minor: 'Previously BI Software Developer and Data Reporting Assistant',
    description:
      "Worked mainly on BASF's AgPro platform. Fixed a slow React screen by restructuring components and adding memoization, and built features across the Node/Express API and SQL server",
    tags: ['react', 'node', 'express', 'sql-server', 'aws'],
  },
  {
    header: 'Education',
    title: 'Bachelor of Computing · University of Guelph',
    description:
      "Minor in Mathematics, 4.0 GPA, Dean's Honours List every year",
  },
];
