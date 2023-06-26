import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { ProjectBlock } from "./components/Project-section/ProjectBlock";
import { GlobalStyles } from "./styles/styles-global";
import { projects } from "./components/Project-section/ProjectsData";
import { useEffect, useState } from "react";
import { SkillsBlock } from "./components/Skills-section/SkillsBlock";

function App() {
  const [maxProjects, setMaxProjects] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1350) {
        setMaxProjects(2);
      } else {
        setMaxProjects(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Hero />
      <ProjectBlock
        maxProjects={maxProjects}
        projects={projects}
      ></ProjectBlock>
      <SkillsBlock />
    </>
  );
}

export default App;
