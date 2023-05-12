import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  c,
  python,
  golang,
  git,
  figma,
  docker,
  blackberry,
  enlightedinc,
  carrent,
  jobit,
  tripguide,
  cnrl,
  qnx,
  apollo,
  csharp,
  aws,
  java,
  jenkins,
  latex,
  postgresql,
  terraform,
  vue,
  reactnative,
  graphql,
  awsCCP,
  awsSAP,
  hashicorp,
  inheritchain,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Apollo",
    icon: apollo,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const languages = [
  { name: "Python", icon: python },
  { name: "Go", icon: golang },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  { name: "C", icon: c },
  { name: "Java", icon: java },
  { name: "C#", icon: csharp },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "InheritChain",
    icon: inheritchain,
    iconBg: "#353535",
    date: "May 2023 - Present",
    points: [],
  },
  {
    title: "Full Stack Developer",
    company_name: "Enlighted Inc | Siemens",
    icon: enlightedinc,
    iconBg: "#F99E4c",
    date: "Jul 2021 - Present",
    points: [
      "Developed and launched a highly efficient Hybrid Workplace Assistant solution and full-stack web/mobile application with Slack Chatbot integration using an atomic design system. Leveraged Javascript/Typescript, Vue.js, Tailwind, GraphQL, AWS, Frontegg, Auth0 & OpenAI API to create intuitive, user-friendly applications that drove promising adoption with a quarterly increase of 15% in sign ups & user engagment.",
      "Architected and created a secure Backend For Frontend (BFF) design pattern using AWS API Gateway & AWS AppSync.",
      "Designed and implemented a Microservice Backend & an Event-Driven Architecture with a Recommendation Engine using AWS Lambda, EventBridge, DynamoDB & CDK. Reduced application response time by 40%.",
      "Created a UI component library leveraging Vue.js, Tailwind & Storybook, utilized internally to accelerate software application development.",
      "Spearheaded migrations from Jenkins/Bitbucket to GitLab CI & Terraform, optimizing CI/CD from an average of 20 mins to 6 mins.",
      "Developed highly responsive solutions for customer experience, leveraging feature flagging with LaunchDarkly, product insights with Pendo, and blue-green deployment CI/CD.",
      "Created and managed a Co-op program to accelerate hiring within the team and mentored 5 co-op students, providing guidance on technical tasks, communicating expectations, and providing feedback on their work.",
    ],
  },
  {
    title: "Security Research Student",
    company_name: "Blackberry",
    icon: blackberry,
    iconBg: "#F99E4c",
    date: "Apr 2020 - Aug 2020",
    points: [
      "Developed a Python exploit for FFMpeg utilizing a variable counter plugin to the LLVM compiler, exploiting the FFMpeg Buffer Overflow Vulnerability CVE-2016-10190. Researched variance in number of variable calls during vulnerable program exploitation.",
      "Conducted a comprehensive security analysis of the tool “Docker Slim” and documented findings in a report posted on the Development Wiki, providing guidance to Blackberry Developers based on research results obtained from analyzing sample dockers.",
    ],
  },
  {
    title: "Security Development Student",
    company_name: "Blackberry | QNX",
    icon: qnx,
    iconBg: "#F99E4c",
    date: "Jan 2020 - Apr 2020",
    points: [
      "Developed and executed Python unit test cases using Pytest framework for the core Security features of QNX Operating System, enhancing the reliability of the system utilized in over 150 million vehicles worldwide.",
      "Conducted extensive research to evaluate the benefits of the Cryptography Library OpenSSL over LibTomCrypt, leading to the successful integration of OpenSSL in C-based Security features and resulting in a 25% improvement in system performance.",
      "Implemented Jenkins Pipeline for automated unit testing and efficient CI/CD process, reducing deployment time by 30%.",
    ],
  },
  {
    title: "Student, Cybersecurity",
    company_name: "Canadian Natural Resources Limited",
    icon: cnrl,
    iconBg: "#d8d8d8",
    date: "May 2019 - Aug 2019",
    points: [
      "Implemented a Phishing Tool that sends fraudulent email campaigns against 15 000 employees as a part of phishing awareness training. Automated results into CSV reports. Built using Python and PHP, utilizing Active Directory and LDAP.",
      "Devised weekly Security Scans using Nessus Professional to ensure CIS compliance and identify vulnerabilities.",
      "Managed Forescout CounterACT and Palo Alto Panorama Firewall inorder to monitor and control internet traffic and to protect production systems.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const certs = [
  {
    name: "AWS CCP",
    image: awsCCP,
    url: "https://www.credly.com/badges/a680a28b-7ff9-4f65-b577-0fb76a9a6253",
  },
  {
    name: "Hashicorp",
    image: hashicorp,
    url: "https://www.credly.com/badges/bf2c7bc7-f8ba-41e5-80bc-86bc0a6c5aff",
  },
  {
    name: "AWS SAP",
    image: awsSAP,
    loading: true,
    url: "",
  },
];

export { certs, technologies, experiences, projects, languages };
