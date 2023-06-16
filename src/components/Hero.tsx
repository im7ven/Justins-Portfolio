import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import avatar from "../images/avatar.webp";
import {
  Avatar,
  H1,
  HeroIconWrapper,
  HeroWrapper,
  Highlight,
  Separator,
} from "../styles/styles.Hero";

export const Hero = () => {
  return (
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
        </HeroIconWrapper>
      </div>
      <Avatar src={avatar} alt="Avatar of Justin" />
    </HeroWrapper>
  );
};
