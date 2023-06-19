import { ReactNode } from "react";
import { ImCss3 } from "react-icons/im";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import moshified from "../../images/Moshified2.webp";
import ageCalc from "../../images/age-calc.webp";

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
  <IoLogoJavascript size="30px" color="#f0db4f" />,
];

export const projects: Project[] = [
  {
    icon: htmlCssJs,
    image: moshified,
    maxChars: 85,
    heading: "Moshified - Cloud Hosting",
    children:
      "Moshified is a Cloud hosting company. This is a static responsive webpage built with mostly HTML, and CSS. The page also includes some Javascript functionality.",
  },
  {
    icon: htmlCssJs,
    image: ageCalc,
    maxChars: 85,
    heading: "Age Calculator",
    children:
      "The Age calculator is a project that accepts a users birthday, and will return their age in years, months, and days. The form has validation checks to insure the user is inputting a valid date, and a date that is not in the future of the current time. The functionality involves manipulating the Date object to return the correct values upon user input.",
  },
  {
    icon: [<ImCss3 size="30px" color="dodgerblue" />],
    image: moshified,
    maxChars: 85,
    heading: "Moshified - Cloud Hosting",
    children:
      "This is a very cool project about how time and wizards can become one if you would like to know more let me know.",
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
