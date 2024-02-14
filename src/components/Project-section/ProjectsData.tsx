import { ReactNode } from "react";
import { ImCss3 } from "react-icons/im";
import { IoLogoHtml5 } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import {
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiChakraui,
  SiStyledcomponents,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import moshified from "../../images/Moshified2.webp";
import ageCalc from "../../images/age-calc.webp";
import jobListing from "../../images/job-listing.webp";
import gameHub from "../../images/gamehub.webp";
import xpenseTracker from "../../images/XpenseT.webp";
import audiophile from "../../images/audiophileE-commerce.webp";
import coffeeroatsets from "../../images/coffeeroasters-black.vercel.app_(HD SCREENSHOT).png";
import shippuden from "../../images/shippuden-app.vercel.app_(HD SCREENSHOT).png";

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

const reactTypescriptStyledCom: ReactNode[] = [
  <GrReactjs size="30px" color="dodgerblue" />,
  <SiTypescript size="30px" color="dodgerblue" />,
  <SiStyledcomponents size="45px" color="#f3b728" />,
];

const reactTypescriptChakra: ReactNode[] = [
  <GrReactjs size="30px" color="dodgerblue" />,
  <SiTypescript size="30px" color="dodgerblue" />,
  <SiChakraui size="30px" color="#70cad0" />,
];

const reactTsFirebaseChakra: ReactNode[] = [
  <GrReactjs size="30px" color="dodgerblue" />,
  <SiTypescript size="30px" color="dodgerblue" />,
  <SiFirebase size="30px" color="#ffcb2b" />,
  <SiChakraui size="30px" color="#70cad0" />,
];

const nextjsTailwindMongo: ReactNode[] = [
  <SiNextdotjs size="30px" color="#fff" />,
  <SiTailwindcss size="30px" color="#00DDE1" />,
  <SiMongodb size="30px" color="#00ed64" />,
];

export const projects: Project[] = [
  {
    icon: reactTypescriptChakra,
    image: gameHub,
    maxChars: 75,
    heading: "GameHub",
    sitePath: "https://game-hub-sable-five.vercel.app/",
    repoPath: "https://github.com/im7ven/Game-Hub",
    children:
      "This project uses Rawg's API to fetch various data such as games, platforms, critic scores, genres ect. It allows users to search games, filter games by platform, by genres and more. Built with Chalkra UI, I have obtained a lot of knowledge building this end-of-course project, and I look forward to advancing my knowledge working with APIs. ",
  },
  {
    icon: reactTsFirebaseChakra,
    image: xpenseTracker,
    maxChars: 75,
    heading: "XPense Tracker",
    sitePath: "https://x-pense-tracker.vercel.app/",
    repoPath: "https://github.com/im7ven/Expense-Tracker.git",
    children:
      "Built an expense tracker app with Firebase authentication, empowering users to manage their expenses effortlessly. Users can log expenses, apply filters by category, visualize data through Chart.js, and create personalized budget plans for better financial control.",
  },
  {
    icon: reactTypescriptStyledCom,
    image: audiophile,
    maxChars: 75,
    heading: "Audiophile e-commerce",
    sitePath: "https://audiophile-e-commerce-rho.vercel.app/",
    repoPath: "https://github.com/im7ven/Audiophile-e-commerce.git",
    children:
      "This Guru-ranked Frontend Mentor project showcases an e-commerce store specializing in audio tech products. Leveraging local storage and the Context API, I've crafted a seamless cart management system for a user-friendly experience. Following a mobile-first approach, this project ensures optimal usability on all devices.",
  },
  {
    icon: reactTypescriptStyledCom,
    image: coffeeroatsets,
    maxChars: 75,
    heading: "Coffeeroasters",
    sitePath: "https://coffeeroasters-black.vercel.app/",
    repoPath: "https://github.com/im7ven/coffeeroasters-subscription.git",
    children:
      "Coffeeroatsers subscription website, this project was challenged by Frontend Mentor. Built with React, Typescript, and styled components.",
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
    icon: reactTypescriptStyledCom,
    image: jobListing,
    maxChars: 75,
    heading: "Static Job Listing",
    sitePath: "https://static-job-listing-justinalexander.netlify.app/",
    repoPath: "https://github.com/im7ven/Job-listing-with-filter",
    children:
      "This Project is a static job listing of web development positions. It is a responsive project that has some filter functionality. The filter accepts multiple filtering conditions, and will display jobs that match all filters. This was my first project using react and typescript, I have learned a lot of important fundamentals, and how I can structure my components in a more modular way.",
  },
  {
    icon: htmlCssJs,
    image: ageCalc,
    maxChars: 75,
    heading: "Age Calculator",
    sitePath: "https://age-calculator-justinalexander.netlify.app/",
    repoPath: "https://github.com/im7ven/Age-Calculator",
    children:
      "The Age calculator is a project that accepts a users birthday, and will return their age in years, months, and days. The form has validation checks to insure the user is inputting a valid date, and a date that does not exceed the current day. The functionality involves manipulating the Date object to return the correct values upon user input.",
  },
];
