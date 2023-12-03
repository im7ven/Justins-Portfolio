import { easeIn } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import avatar from "../images/avatar.webp";
import { MediaLink } from "../styles/styles-Project-section/styles-ProjectBlock";
import {
  AboutBtn,
  AboutHeading,
  AboutWrapper,
  Avatar,
  AvatarAboutWrapper,
  AvatarWrapper,
  ExpandAboutBtn,
  H1,
  HeroIconWrapper,
  HeroWrapper,
  Highlight,
  Separator,
  Title,
} from "../styles/styles.Hero";
import FadeUp from "./FadeUp";

const aboutMe = [
  "Here is my story. I am an enthusiastic individual who is passionate about continuous growth and learning. With an insatiable curiosity for new skills and technologies, I embrace every opportunity to expand my knowledge with a focus towards frontend development. ",
  "While my primary focus is on frontend development, I'm equally drawn to exploring other facets of the tech world, including design and backend development. Beyond coding, I like to spend my time playing video games, crafting culinary delights, and cherishing quality moments with friends. I genuinely enjoy meeting new people, fostering meaningful connections, and collectively working towards a common goal.",
  "Although my professional background lies within the food industry, I discovered a passion for web development that sparked a career transition.  Each day presents a fresh opportunity to embrace new concepts, and techniques, as I  pursue self-improvement.",
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

  const fadeInAnimationVariants = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <HeroWrapper>
        <div>
          <FadeUp>
            <Highlight>Hi, my name is</Highlight>
          </FadeUp>
          <FadeUp>
            <H1>Justin Alexander,</H1>
          </FadeUp>
          <FadeUp>
            <Title>Frontend Web Developer</Title>
          </FadeUp>
          <FadeUp>
            <Separator />
          </FadeUp>
          <FadeUp>
            <HeroIconWrapper>
              <MediaLink target="_blank" href="https://github.com/im7ven">
                <FaGithubSquare color="#fff" size="65px" />
              </MediaLink>
              <MediaLink
                target="_blank"
                href="https://www.linkedin.com/in/justin-alexander-27542522b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtoFsthPqR0mXJnE4jjj2zA%3D%3D"
              >
                <FaLinkedin color="#fff" size="65px" />
              </MediaLink>
              <AboutBtn onClick={handleButtonClick}>About Me</AboutBtn>
            </HeroIconWrapper>
          </FadeUp>
        </div>

        <AvatarAboutWrapper>
          <AvatarWrapper
            style={{
              opacity: showAboutMe ? "0" : "1",
              zIndex: showAboutMe ? "0" : "1",
            }}
          >
            <Avatar
              initial={{ x: 600, rotate: 180, opacity: 0 }}
              animate={{ x: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: easeIn, delay: 0.3 }}
              src={avatar}
              alt="Avatar of Justin"
            />
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
