import styled from 'styled-components'

const ProjectsContainer = styled.div`
  min-height: calc(812 / 1280 * 100vw);
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
`

const ProjectsBackground = styled.div`
  background-image: url('./assets/images/projects_background.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Projects = () => (
    <ProjectsContainer id="past-projects">
      <ProjectsBackground />
    </ProjectsContainer>
  )

export default Projects
