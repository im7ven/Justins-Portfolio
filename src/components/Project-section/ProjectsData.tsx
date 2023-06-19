import { ReactNode } from "react";
import { ImCss3 } from "react-icons/im";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { SiTypescript, SiJavascript } from "react-icons/si";
import moshified from "../../images/Moshified2.webp";
import ageCalc from "../../images/age-calc.webp";
import jobListing from "../../images/job-listing.webp";

interface Project {
  icon: ReactNode[];
  image: string;
  maxChars: number;
  heading: string;
  children: string;
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
    icon: htmlCssJs,
    image: moshified,
    maxChars: 75,
    heading: "Moshified - Cloud Hosting",
    children:
      "Moshified is a Cloud hosting company. This is a static responsive webpage built with mostly HTML, and CSS. The page also includes some Javascript functionality.",
  },
  {
    icon: htmlCssJs,
    image: ageCalc,
    maxChars: 75,
    heading: "Age Calculator",
    children:
      "The Age calculator is a project that accepts a users birthday, and will return their age in years, months, and days. The form has validation checks to insure the user is inputting a valid date, and a date that is not in the future of the current time. The functionality involves manipulating the Date object to return the correct values upon user input.",
  },
  {
    icon: reactTypescript,
    image: jobListing,
    maxChars: 75,
    heading: "Static Job Listing",
    children:
      "This Project is a static job listing of web development positions. It is a responsive project that has some filter functionality. The filter accepts multiple filtering conditions and will display the job that meet all filters. This was my first project using react and typescript, I have learned a lot of important fundamentals and how I can structure my components in a more modular way.",
  },
  {
    icon: [<ImCss3 size="30px" color="dodgerblue" />],
    image: moshified,
    maxChars: 85,
    heading: "Moshified - Cloud Hosting",
    children:
      "This is a very cool project about how time and wizards can become one if you would like to know more let me know.",
  },
];
