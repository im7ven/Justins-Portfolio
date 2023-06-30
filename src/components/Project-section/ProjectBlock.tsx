import {
  ExpandProjectsBtn,
  ProjectGridWrapper,
  ProjectSectionHeading,
  ProjectWrapper,
} from "../../styles/styles-Project-section/styles-ProjectBlock";
import { ProjectCard } from "./ProjectCard";
import { useState, ReactNode } from "react";

interface Project {
  icon: ReactNode[];
  image: string;
  heading: string;
  children: string;
  maxChars?: number;
  repoPath: string;
  sitePath: string;
}

interface Props {
  maxProjects?: number;
  projects: Project[];
}

export const ProjectBlock = ({ maxProjects, projects }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, maxProjects);
  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <ProjectWrapper id="projects">
        <ProjectSectionHeading>My Projects</ProjectSectionHeading>
        <ProjectGridWrapper>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </ProjectGridWrapper>
        <ExpandProjectsBtn onClick={handleShowMore}>
          {showAll ? "See Less" : "See More"}
        </ExpandProjectsBtn>
      </ProjectWrapper>
    </>
  );
};
