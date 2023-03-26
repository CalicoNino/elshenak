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
    name: "React Native",
    icon: reactnative,
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Jenkins",
    icon: jenkins,
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
    company_name: "Enlighted Inc | Siemens",
    icon: enlightedinc,
    iconBg: "#F99E4c",
    date: "Jul 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Security Research Student",
    company_name: "Blackberry",
    icon: blackberry,
    iconBg: "#F99E4c",
    date: "Apr 2020 - Aug 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Security Development Student",
    company_name: "Blackberry | QNX",
    icon: qnx,
    iconBg: "#F99E4c",
    date: "Jan 2020 - Apr 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Student, Cybersecurity",
    company_name: "Canadian Natural Resources Limited",
    icon: cnrl,
    iconBg: "#F99E4c",
    date: "May 2019 - Aug 2019",
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
