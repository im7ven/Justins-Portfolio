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
import skillData from "./SkillsData";
import { backIn, backInOut, easeIn, motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
};

export const fadeRightAnimationVariants = {
  initial: {
    opacity: 0,
    x: -300,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: backInOut,
    },
  },
};
export const fadeLeftAnimationVariants = {
  initial: {
    opacity: 0,
    x: 300,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: backInOut,
    },
  },
};

export const SkillsBlock = () => {
  return (
    <SkillsWrapper id="skills">
      <SkillsHeading>Some of my Skills Include</SkillsHeading>
      <SkillsGridWrapper>
        <SkillsBadgeWrapper>
          {skillData.map((skill, index) => (
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <SkillsBadge key={index} badgeLabel={skill.label}>
                {skill.icon}
              </SkillsBadge>
            </motion.div>
          ))}
        </SkillsBadgeWrapper>

        <div>
          <motion.div
            variants={fadeRightAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <SkillsFeature
              imageSrc={creativeIcon}
              imageAlt="Creativity icon"
              heading="Creativity"
            >
              I find joy in exploring innovative approaches to frontend
              development. I am able to bring unique perspective to my
              development by blending technical and artistic mindsets. I often
              gather the materials I have learned, and combine them to achieve
              impactful results.
            </SkillsFeature>
          </motion.div>
          <motion.div
            variants={fadeLeftAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
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
          </motion.div>

          <motion.div
            variants={fadeRightAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
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
          </motion.div>
        </div>
      </SkillsGridWrapper>
    </SkillsWrapper>
  );
};
