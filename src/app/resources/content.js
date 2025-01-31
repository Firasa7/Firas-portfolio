import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Firas",
  lastName: "Abdelgadir",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Cyber Security Student",
  avatar: "/images/IMG_6831.jpg",
  //location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic"], // optional: Leave the array empty if you don't want to display languages
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
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Firasa7?tab=overview&from=2025-01-01&to=2025-01-26",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/firas-abdelgadir/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:fyabdelgadir0@frostburg.edu",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <> Firas Abdelgadir</>,
  subline: (
    <>
      I'm a computer technician and a senior Cybersecurity undergrad student at <InlineCode>Frostburg State university</InlineCode>, where I serve as president
      <br /> of the cyber security club and a D2 athlete on the soccer team. Check out my project articles: <a href="https://medium.com/me/stories/public" target="_blank" rel="noopener noreferrer">projects</a>

    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
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
        I am a senior cyber security student with a passion for threat hunting. I'm currently pursuing a soc analyst position to kick off
        my professional career as I graduate in may. I currently hold a 3.5 cumulative gpa as a student athlete at Frostburg State University,
        based in Maryland.

      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Frostburg State University",
        timeframe: "2023 - Present",
        role: "Computer Technician",
        achievements: [
          <>
            Configured and maintained a network of multiple computer systems (dual boot systems) for the university e-sports team
          </>,
          <>
            Installed and made sure all the games were kept up to date through admin privileges
          </>,
        ],
        images: []

        ,
      },

    ],

  },
    // NEW: PROJECT EXPERIENCE SECTION, matching the "work" format
    projects: {
      display: true, // set to false to hide
      title: "Project Experience",
      experiences: [
        {
          // Using "company" but really it's the project name
          company: "Splunk SIEM Implementation for Cybersecurity ",
          timeframe: "November 2024",
          role: (
            <a
              href="https://medium.com/@FirasA7/building-a-splunk-siem-environment-for-log-monitoring-and-threat-detection-8266b592b42c"
              target="_blank"
              rel="noopener noreferrer"
            >
              project article
            </a>
          ),
          achievements: [
            <>
              Set up Splunk Enterprise as the main system for collecting 
              and monitoring logs
            </>,
            <>
              Managed Splunk Forwarders on several servers to ensure 
              consistent data flow and accuracy
            </>,
            <>
              Applied advanced Splunk queries and visual tools to identify 
              security trends and actionable insights
            </>,
            <>
              Designed custom dashboards for monitoring server actions, 
              analyzing access attempts, and identifying unusual activities
            </>,
          ],
          images: [],
        },
        {
          company: "Secure Database Implementation Project (MySQL) ",
          timeframe: "December 2023",
          role: (
            <a
              href="https://medium.com/@FirasA7/hospital-information-system-with-mysql-a-database-project-541e2e3bd886"
              target="_blank"
              rel="noopener noreferrer"
            >
              project article
            </a>
          ),
          achievements: [
            <>Designed and implemented a secure database environment using MySQL</>,
            <>Created and maintained tables for a Hospital Information System, managing data on patients, doctors, etc </>,
            <>Implemented access control with defined roles and privileges for users </>,
            <>Employed security measures to protect against SQL injection attacks, ensuring data integrity and confidentiality  </>,
          ],
          images: [],
        },
      ],
    },
  

  studies: {
    display: false, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Frostburg State University ",
        timeframe: "May 2025",
        description: [
          
          
          <> 
        
          </>
        ]
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Splunk | InfluxDB | MySQL | Python | Linux | Wireshark | Java  ",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
        
        ],
      },
      {
        title: "Windows 11 | Windows firewall | Windows defender",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
         
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/gal1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gal3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gal2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gal4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gal5.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gal6.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gal7.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gal8.jpg",
      alt: "image",
      orientation: "vertical",
    },
    /*{
      src: "/images/gallery/gal9.jpg",
      alt: "image",
      orientation: "vertical",
    },*/
    /*{
      src: "/images/gallery/gal10.jpg",
      alt: "image",
      orientation: "vertical",
    },*/
    {
      src: "/images/gallery/gal9.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gal11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    /*{
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },*/
    /*{
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },*/
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
