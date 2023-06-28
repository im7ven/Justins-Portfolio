import { ReactNode } from "react";
import { ImCss3 } from "react-icons/im";
import { IoLogoHtml5 } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { SiTypescript, SiJavascript } from "react-icons/si";
import moshified from "../../images/Moshified2.webp";
import ageCalc from "../../images/age-calc.webp";
import jobListing from "../../images/job-listing.webp";
import gameHub from "../../images/gamehub.webp";

interface Project {
  icon: ReactNode[];
  image: string;
  maxChars: number;
  heading: string;
  children: string;
  repoPath: string;
  sitePath: string;
}

const htmlCssJs: ReactNode[] = [
  <IoLogoHtml5 size="30px" color="#e34c26" />,
  <ImCss3 size="30px" color="dodgerblue" />,
  <SiJavascript size="30px" color="#f0db4f" />,
];

const reactTypescript: ReactNode[] = [
  <GrReactjs size="30px" color="dodgerblue" />,
  <SiTypescript size="30px" color="dodgerblue" />,
];

export const projects: Project[] = [
  {
    icon: reactTypescript,
    image: gameHub,
    maxChars: 75,
    heading: "GameHub",
    sitePath: "https://game-hub-sable-five.vercel.app/",
    repoPath: "https://github.com/im7ven/Game-Hub",
    children:
      "This project uses Rawg's API to fetch various data such as games, platforms, critic scores, genres ect. It allows users to search games, filter games by platform, genres and more. 90 percent of this project  was created using many components from Chalkra UI. I have obtained a lot of knowledge building this end-of-course project, with the help of my instructor. ",
  },
  {
    icon: htmlCssJs,
    image: moshified,
    maxChars: 75,
    heading: "Moshify",
    sitePath: "https://moshified-with-justin.netlify.app/",
    repoPath: "https://github.com/im7ven/Moshified",
    children:
      "Moshified is a Cloud hosting company. This is a static responsive webpage built with mostly HTML, and CSS. The page also includes some Javascript functionality.",
  },
  {
    icon: reactTypescript,
    image: jobListing,
    maxChars: 75,
    heading: "Static Job Listing",
    sitePath: "https://static-job-listing-justinalexander.netlify.app/",
    repoPath: "https://github.com/im7ven/Job-listing-with-filter",
    children:
      "This Project is static job listings for web development positions. It is a responsive project that has some filter functionality. The filter accepts multiple filtering conditions, and will display jobs that match all filters. This was my first project using react and typescript, I have learned a lot of important fundamentals and how I can structure my components in a more modular way.",
  },
  {
    icon: htmlCssJs,
    image: ageCalc,
    maxChars: 75,
    heading: "Age Calculator",
    sitePath: "https://age-calculator-justinalexander.netlify.app/",
    repoPath: "https://github.com/im7ven/Age-Calculator",
    children:
      "The Age calculator is a project that accepts a users birthday, and will return their age in years, months, and days. The form has validation checks to insure the user is inputting a valid date, and a date that is not in the future of the current time. The functionality involves manipulating the Date object to return the correct values upon user input.",
  },
];
