import { Logo } from "@once-ui-system/core";
import { title } from "process";

const person = {
  firstName: "Sangham",
  lastName: "Sarkar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Developer",
  avatar: "/images/avatar.jpg",
  email: "sanghamsarkar.work@gmail.com",
  location: "Asia/Kolkata", 
  languages: ["English", "hindi", "bengali"], 
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sangham-sarkar",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sangham-sarkar",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Search Country</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Sangham, a frontend developer by day building seamless user interfaces — and a maker by night, 
      <br /> crafting projects I'm passionate about.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a creative problem-solver who loves turning ideas into fast,
        responsive web experiences. From building clean UIs to writing smart backend logic, 
        I thrive on learning, adapting, and creating meaningful digital products.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Sky Point",
        timeframe: "July 2025 - Present",
        role: "AI Data Curation and RLHF Intern",
        achievements: [
          <>
            Engineered and maintained scalable data transformation pipelines using DBT and advanced SQL,
            ensuring a reliable and efficient flow of data for model training and analytics.
          </>,
          <>
            Contributed to projects on "Genie Space," 
            the company's proprietary AI development platform, assisting in the management and versioning of large-scale 
            training datasets.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "Rooman Technologies",
        timeframe: "Sep 2024 - Feb 2025",
        role: "Cloud Application Developer Intern",
        achievements: [
          <>
            Completed 400+ hours of structured training as part of the NSDC initiative in collaboration with IBM and IIT Guwahati, 
            focusing on Cloud Computing, Python, AWS, and professional development.
          </>,
          <>
            Developed and deployed web-based applications using Python, AWS, and MongoDB,
            gaining hands-on experience in cloud infrastructure and backend development.
          </>,
          <>
            Collaborated in a project-based learning environment, applying academic knowledge to real-world scenarios while strengthening teamwork, 
            problem-solving, and technical communication skills.
          </>,
        ],
        images: [
        ],
      },
      
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "CMRIT",
        description: <>Studied Electronic and Communication Engineering.</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Proficient in building high-fidelity, interactive prototypes in Figma to validate user experiences and accelerate developer handoff.</>,
        images: [
        ],
      },
      {
        title: "Next.js",
        description: <>Architecting robust, full-stack solutions on the Next.js framework for modern user experiences.</>,
        images: [
        ],
      },
      {
        title: "React",
        // description: <>Crafting dynamic, component-driven UIs with React</>,
        images: [
        ],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
