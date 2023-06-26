import {
  SkillsBadgeWrapper,
  SkillsGridWrapper,
  SkillsHeading,
  SkillsWrapper,
} from "../../styles/styles-Skills-section/styles-SkillsBlock";
import { SkillsFeature } from "./SkillsFeature";
import creativeIcon from "../../images/creativity.webp";
import communicationIcon from "../../images/communication.webp";
import teamworkIcon from "../../images/teamwork.webp";
import { SkillsBadge } from "./SkillsBadge";
import { SiHtml5, SiJavascript, SiTypescript } from "react-icons/si";
import { FaCss3, FaReact, FaGitAlt } from "react-icons/fa";

export const SkillsBlock = () => {
  return (
    <SkillsWrapper>
      <SkillsHeading>Some of my Skills Include</SkillsHeading>
      <SkillsGridWrapper>
        <div>
          <SkillsFeature
            imageSrc={creativeIcon}
            imageAlt="Creativity icon"
            heading="Creativity"
          >
            I find joy in exploring innovative approaches to frontend
            development. I am able to bring unique perspective to my development
            by blending technical and artistic mindsets. I often gather the
            materials I have learned, and combine them to achieve impactful
            results.
          </SkillsFeature>

          <SkillsFeature
            imageSrc={communicationIcon}
            imageAlt="Communication icon"
            heading="Communication"
          >
            I firmly believe that effective communication is a vital aspect of
            successful collaboration and project execution. Throughout my
            experiences, I have consistently demonstrated strong communication
            skills. I believe in actively listening to others, valuing diverse
            perspectives, and I am eager to transition my communication skills
            to the web developing industry.
          </SkillsFeature>

          <SkillsFeature
            imageSrc={teamworkIcon}
            imageAlt="Teamwork icon"
            heading="Teamwork"
          >
            Having thrived in various team-oriented environments throughout my
            professional journey, I have developed a keen understanding of the
            power and value of teamwork. I firmly believe that collaboration
            among team members can lead to exceptional results. I look forward
            to being able to apply these skills to a development team.
          </SkillsFeature>
        </div>
        <SkillsBadgeWrapper>
          <SkillsBadge badgeLabel="html">
            <SiHtml5 color="red" size="60px" />
          </SkillsBadge>
          <SkillsBadge badgeLabel="css">
            <FaCss3 color="dodgerblue" size="60px" />
          </SkillsBadge>
          <SkillsBadge badgeLabel="javascript">
            <SiJavascript color="yellow" size="60px" />
          </SkillsBadge>
          <SkillsBadge badgeLabel="react">
            <FaReact color="dodgerblue" size="60px" />
          </SkillsBadge>
          <SkillsBadge badgeLabel="typescript">
            <SiTypescript color="dodgerblue" size="60px" />
          </SkillsBadge>
          <SkillsBadge badgeLabel="git">
            <FaGitAlt color="red" size="60px" />
          </SkillsBadge>
        </SkillsBadgeWrapper>
      </SkillsGridWrapper>
    </SkillsWrapper>
  );
};
