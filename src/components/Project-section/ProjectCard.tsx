import {
  H2,
  HeadingIconWrapper,
  IconWrapper,
  ProjectBtn,
  ProjectBtnWrapper,
  ProjectCardWrapper,
  ProjectImg,
  ProjectInfo,
} from "../../styles/styles-Project-section/styles-ProjectCard";

import { ReactNode, useState } from "react";
import {
  ExpandBtn,
  ProjectDescription,
} from "../../styles/styles-Project-section/styles-ProjectCard";

interface Props {
  icon: ReactNode[];
  image: string;
  heading: string;
  children: string;
  maxChars?: number;
  repoPath: string;
  sitePath: string;
  index: number;
}

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const ProjectCard = ({
  image,
  heading,
  children,
  maxChars = 30,
  icon,
  repoPath,
  sitePath,
  index,
}: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  const text = isExpanded ? children : children.substring(0, maxChars);
  const handleExpand = () => setExpanded(!isExpanded);
  const renderBtnLabel = isExpanded ? "Less" : "More";

  return (
    <ProjectCardWrapper
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <ProjectImg src={image} alt="project" />
      <ProjectInfo>
        <HeadingIconWrapper>
          <H2>{heading}</H2>
          <IconWrapper>{icon}</IconWrapper>
        </HeadingIconWrapper>
        <div>
          <ProjectDescription>
            {text}
            {isExpanded ? "" : "..."}
          </ProjectDescription>
          <ExpandBtn onClick={handleExpand}>{renderBtnLabel}</ExpandBtn>
          <ProjectBtnWrapper>
            <ProjectBtn role="button" href={sitePath} target="_blank">
              Site
            </ProjectBtn>
            <ProjectBtn role="button" href={repoPath} target="_blank">
              Repo
            </ProjectBtn>
          </ProjectBtnWrapper>
        </div>
      </ProjectInfo>
    </ProjectCardWrapper>
  );
};
