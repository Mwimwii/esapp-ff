export const getMenuData: any[] = [
  // VB:REPLACE-START:MENU-CONFIG
  {
    title: 'Dashboards',
    key: '__dashboard',
    url: '/dashboard',
    icon: 'fe fe-home',
  },
  {
    title: 'L&K Management',
    key: 'pxo5b',
    url: '/lkm',
    icon: 'fe fe-book-open',
    children: [
      {
        title: 'Interview Guide',
        key: 'h7aad',
        url: '/lkm/interviews',
      },
      {
        title: 'My Stories',
        key: 'rniyi9',
        url: '/lkm/mystories',
      },
      {
        title: 'Stories of Change',
        key: 'tx7k6w',
        url: '/lkm/soc',
      },
    ],
  },
  {
    title: 'Matching Grant Facility',
    key: 'osk3u',
    url: '/mgf',
    icon: 'fe fe-briefcase',
    children: [
      {
        title: 'Organizations',
        key: 'exxjo5',
        url: '/mgf/org',
      },
      {
        title: 'Evaluations',
        key: 'pyo5qw',
        url: '/mgf/evaluations',
      },
      {
        title: 'Proposals',
        key: 'ou0wkk',
        url: '/mgf/proposals',
      },
      {
        title: 'Applications',
        key: '4hmw',
        url: '/mgf/applications',
      },
      {
        title: 'Applicants',
        key: '7019oh',
        url: '/mgf/applicants',
      },
      {
        title: 'Approvals',
        key: '7s4gfn',
        url: '/mgf/approvals',
      },
      {
        title: 'Concept Notes',
        key: 'hl3ks8',
        url: '/mgf/concept-notes',
      },
    ],
  },
  {
    title: 'Monitoring and Evaluation',
    key: 'o9b8f',
    url: '/me',
    icon: 'fe fe-activity',
    children: [
      {
        title: 'Camp Monthly Schedules',
        key: 'appnar',
        url: '/me/schedules',
      },
    ],
  },
  {
    title: 'Capacity Building',
    key: '65z1s9',
    url: '/cbb',
    icon: 'fe fe-package',
    children: [
      {
        title: 'FaaBS Training Topics',
        key: 'n2afl',
        url: '/cbb/topics',
      },
      {
        title: 'FaaBS Training Attendance',
        key: 'ih5ba',
        url: '/cbb/attendance',
      },
    ],
  },
  {
    title: 'Market Data',
    key: '80pi8',
    url: '/market',
    icon: 'fe fe-bar-chart-2',
    children: [
      {
        title: 'Commodity Prices',
        key: 'ss6dve',
        url: '/prices',
      },
    ],
  },
  {
    title: 'Reports',
    key: 'cwm04g',
    url: '/reports',
    icon: 'fe fe-file-text',
    children: [
      {
        title: 'Training attendance cumulative',
        key: 'rfl2mw',
        url: '/cumulative',
      },
    ],
  },
  {
    title: 'User Administration',
    key: '2hfvfk',
    url: '/user',
    icon: 'fe fe-users',
    children: [
      {
        title: 'My Profile',
        key: 'oalt1lm',
        url: '/user/profile',
      },
    ],
  },

  // VB:REPLACE-END:MENU-CONFIG
]
