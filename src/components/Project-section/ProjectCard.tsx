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
}

export const ProjectCard = ({
  image,
  heading,
  children,
  maxChars = 30,
  icon,
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
            <ProjectBtn>Site</ProjectBtn>
            <ProjectBtn>Repo</ProjectBtn>
          </ProjectBtnWrapper>
        </div>
      </ProjectInfo>
    </ProjectCardWrapper>
  );
};
