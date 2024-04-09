import {
    SiTypescript,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiHtml5,
    SiCss3,
    SiSupabase,
    SiGit,
    SiDocker,
    SiBootstrap,
    SiTailwindcss,
    SiSpringboot,
    SiGooglecolab,
    SiFigma,
    SiPostman
  } from "react-icons/si";
  import { BiLogoPostgresql } from "react-icons/bi";
  
  export const skills = [
    {
      icon: SiTypescript,
      text: "TypeScript",
    },
    {
      icon: SiJavascript,
      text: "JavaScript",
    },
    {
      icon: SiNextdotjs,
      text: "Next",
    },
    {
      icon: SiTailwindcss,
      text: "Tailwind",
    },
    {
      icon: SiHtml5,
      text: "HTML5",
    },
    {
      icon: SiCss3,
      text: "CSS3",
    },
    {
      icon: SiNodedotjs,
      text: "Node",
    },
    {
      icon: SiPython,
      text: "Python",
    },
    {
      icon: BiLogoPostgresql,
      text: "PostgreSQL",
    },
    {
      icon: SiSupabase,
      text: "Supabase",
    },
    {
      icon: SiGit,
      text: "Git",
    },
    {
      icon: SiDocker,
      text: "Docker",
    },
    {
      icon: SiBootstrap,
      text: "Bootstrap",
    },
    {
      icon: SiSpringboot,
      text: "SpringBoot",
    },
    {
      icon: SiGooglecolab,
      text: "Google Colab",
    },
    {
      icon: SiPostman,
      text: "Postman" 
    },
    {
      icon: SiFigma,
      text: "Figma" 
    }
  ];

  export const resume = "https://drive.google.com/file/d/14CArG3TtsMDJAtb4CtDN69ao8xM6tNEx/view?usp=sharing";
  
  export interface Project {
    title: string;
    description: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Invoice Management System (ongoing)",
      description: "Software for managing invoices at Krida Technologies",
      link: "https://github.com/fahiradh",
    },
    {
      title: "Logistic Information System",
      description: "Software for arranging and managing logistics in warehouse",
      link: "https://github.com/fahiradh/silogistik",
    },
    {
      title: "Apartment Listings Data Analysis",
      description: "Take insight from analyzing the apartment listings dataset",
      link: "https://drive.google.com/file/d/1HLH7IdiABrT3inLeHjBcPG-pOWgKvBbU/view?usp=sharing",
    },
    {
      title: "Kino App UI Design",
      description: "Design interactive UI for mobile personalized travel app",
      link: "https://drive.google.com/file/d/1PHBjbalTSv_IvC7WbgljClIMO_3i5rAG/view?usp=sharing",
    },
  ];
  
  export interface WorkExperience {
    company: string;
    position: string;
    description: string;
    years: string;
  }
  
  export const workExperiences: WorkExperience[] = [
    {
      company: "Akulaku Indonesia",
      position: "Software Engineer Intern",
      description: "Build internal portal software system for Akulaku Finance Indonesia",
      years: "Mar 2024 - May 2024",
    },
    {
      company: "Krida Technologies",
      position: "Project Manager Contract",
      description: "Build invoice management system",
      years: "Feb 2024 - Jun 2024",
    },
    {
      company: "WIR Group",
      position: "Odoo Developer Intern",
      description: "Developed odoo modules as user's needed",
      years: "Dec 2023 - Feb 2024",
    },
  ];
  
  export const aboutYou = {
    description:
      "👋 Hi, I'm Fahira Adindiah, a final-year Information Systems student at Faculty of Computer Science, University of Indonesia.",
    yearsOfExperience: "1+ years",
    location: "Jakarta, Indonesia",
    email: "halo.fahira@gmail.com",
  };
  
  export const logoText = "halo.fahira@gmail.com";
  
  export const marketingHeadlines = {
    mainHeadline: "Fahira Adindiah",
    subHeadline: "like to craft software and explore data",
  };
  
  export const websiteMetadata = {
    title: "Fahira Adindiah's",
    description: "👋 Hey, Random Person here. Welcome to my portflio/blog.",
  };