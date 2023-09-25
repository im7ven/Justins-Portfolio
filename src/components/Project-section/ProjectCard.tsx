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
}

export const ProjectCard = ({
  image,
  heading,
  children,
  maxChars = 30,
  icon,
  repoPath,
  sitePath,
}: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  const text = isExpanded ? children : children.substring(0, maxChars);
  const handleExpand = () => setExpanded(!isExpanded);
  const renderBtnLabel = isExpanded ? "Less" : "More";

  return (
    <ProjectCardWrapper>
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
            <a role="button" href={sitePath} target="_blank">
              <ProjectBtn>Site</ProjectBtn>
            </a>
            <a role="button" href={repoPath} target="_blank">
              <ProjectBtn>Repo</ProjectBtn>
            </a>
          </ProjectBtnWrapper>
        </div>
      </ProjectInfo>
    </ProjectCardWrapper>
  );
};
