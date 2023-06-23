import { useState, useEffect } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import avatar from "../images/avatar.webp";
import {
  Avatar,
  H1,
  HeroIconWrapper,
  HeroWrapper,
  Highlight,
  Separator,
  AvatarAboutWrapper,
  AvatarWrapper,
  AboutWrapper,
  AboutBtn,
  AboutHeading,
  ExpandAboutBtn,
} from "../styles/styles.Hero";

const aboutMe = [
  "Here is my story. I am an enthusiastic individual who is passionate about continuous growth and learning. With an insatiable curiosity for new skills and technologies, I embrace every opportunity to expand my knowledge with a focus towards frontend development. My goal is to be persistent in my ability to create pleasant user experiences . ",
  "Although my professional background lies within the food industry, I discovered a passion for web development that sparked a career transition. Everyday, I eagerly embrace new concepts and techniques, striving to improve. The challenge of pushing boundaries and exploring new possibilities excites me, and I am committed to my journey as a aspiring developer.",
  "The opportunity to collaborate and work with others, in a web development environment, is something I look forward to. I genuinely enjoy meeting new people, fostering meaningful connections, and collectively working towards a common goal.",
];

export const Hero = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [expandAboutMe, setExpandAboutMe] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = () => {
    setShowAboutMe(!showAboutMe);
    setExpandAboutMe(false);
  };

  const conditionalRenderAbout =
    windowWidth > 768 ? (
      aboutMe.map((paragraph, index) => <p key={index}>{paragraph}</p>)
    ) : expandAboutMe ? (
      aboutMe.map((paragraph) => <p>{paragraph}</p>)
    ) : (
      <p>{aboutMe[0]}</p>
    );

  const conditionalRenderBtn =
    windowWidth < 768 ? (
      <ExpandAboutBtn onClick={() => setExpandAboutMe(!expandAboutMe)}>
        {expandAboutMe ? "Show Less" : "Show more"}
      </ExpandAboutBtn>
    ) : null;

  return (
    <>
      <HeroWrapper>
        <div>
          <H1>
            Hi my name is Justin Alexander,{" "}
            <Highlight>Frontend Web Developer</Highlight>
          </H1>
          <Separator />
          <HeroIconWrapper>
            <FaGithubSquare color="#fff" size="65px" />
            <FaLinkedin color="#fff" size="65px" />
            <AboutBtn onClick={handleButtonClick}>About Me</AboutBtn>
          </HeroIconWrapper>
        </div>
        <AvatarAboutWrapper>
          <AvatarWrapper
            style={{
              opacity: showAboutMe ? "0" : "1",
              zIndex: showAboutMe ? "0" : "1",
            }}
          >
            <Avatar src={avatar} alt="Avatar of Justin" />
          </AvatarWrapper>
          <AboutWrapper
            style={{
              opacity: showAboutMe ? "1" : "0",
              zIndex: showAboutMe ? "1" : "0",
            }}
          >
            <AboutHeading>About me</AboutHeading>
            {conditionalRenderAbout}
            {conditionalRenderBtn}
          </AboutWrapper>
        </AvatarAboutWrapper>
      </HeroWrapper>
    </>
  );
};
