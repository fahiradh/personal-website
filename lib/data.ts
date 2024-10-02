import {
    SiTypescript,
    SiJavascript,
    SiNextdotjs,
    SiPython,
    SiHtml5,
    SiCss3,
    SiSupabase,
    SiGit,
    SiDocker,
    SiBootstrap,
    SiTailwindcss,
    SiSpringboot,
    SiFigma,
    SiPostman,
    SiAngular,
    SiMysql,
    SiPostgresql,
    SiJunit5,
    SiSonarqube
  } from "react-icons/si";
  
  export const skills = [
    {
      icon: SiSpringboot,
      text: "Spring",
    },
    {
      icon: SiAngular,
      text: "Angular",
    },
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
      icon: SiPython,
      text: "Python",
    },
    {
      icon: SiPostgresql,
      text: "PostgreSQL",
    },
    {
      icon: SiMysql,
      text: "MySQL",
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
      icon: SiPostman,
      text: "Postman" 
    },
    {
      icon: SiJunit5,
      text: "JUnit" 
    },{
      icon: SiSonarqube,
      text: "SonarQube" 
    },
    {
      icon: SiFigma,
      text: "Figma" 
    }
  ];

  export const resume = "https://drive.google.com/file/d/18S6p9ytDVEfayHx2Na2Aa6XZHTJBAXUP/view?usp=sharing";
  
  export interface Project {
    title: string;
    description: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      title: "SIBIKU",
      description: "Mobile application for learning Indonesia sign language",
      link: "https://drive.google.com/file/d/1u9wF3J0i8HOShrKrAzDEzWD4mEjWF00Z/view",
    },
    {
      title: "Invoice Management System",
      description: "Software for managing invoices at Krida Technologies",
      link: "https://github.com/fahiradh/invoicesync",
    },
    {
      title: "Logistic Information System",
      description: "Software for arranging and managing logistics in warehouse",
      link: "https://github.com/fahiradh/silogistik",
    },
  ];
  
  export interface WorkExperience {
    company: string;
    position: string;
    years: string;
  }
  
  export const workExperiences: WorkExperience[] = [
    {
      company: "FPT Software Indonesia",
      position: "Software Engineer Intern",
      years: "Jun 2024 - Sept 2024",
    },
    {
      company: "Akulaku Indonesia",
      position: "Software Engineer Intern",
      years: "Mar 2024 - May 2024",
    },
    {
      company: "Krida Technologies",
      position: "Project Manager Contract",
      years: "Feb 2024 - Jun 2024",
    },
    {
      company: "WIR Group",
      position: "Backend Developer Intern",
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
    mainHeadline: "🧕 Fahira Adindiah",
    subHeadline: "like to craft software and involve in team projects",
  };
  
  export const websiteMetadata = {
    title: "Fahira Adindiah's",
    description: "👋 Hey, Random Person here. Welcome to my portflio/blog.",
  };