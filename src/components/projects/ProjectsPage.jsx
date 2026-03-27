import ProjectCard from "./subcomp/ProjectCard";
import "./project.css";
import { Container } from "react-bootstrap";

// Images of projects.
import reachBlogLogo from "../../assets/project images/reach blog.png";
import andhubLogo from "../../assets/project images/AndHub logo.jpeg";

//Skills image
import flaskLogo from "../../assets/skills logo/flask logo.svg";
import mysqlLogo from "../../assets/skills logo/mysql logo.png";
import tailwindcssLogo from "../../assets/skills logo/tailwindcss logo.svg";
import reactLogo from "../../assets/skills logo/react logo.svg";

function ProjectsPage() {
  const reachBlog = {
    image: reachBlogLogo,
    title: "Reach Blogs",
    repolink: "https://github.com/stapak/AND",
    description: [
                  "Developed an Avengers-themed blogging platform using the Python web framework Flask to demonstrate backend web development concepts",
                  "Implemented dynamic page rendering using Jinja templates with reusable layouts and template inheritance",
                  "Built core backend functionality including routing, form handling, and server-side content rendering",
                  "Designed an admin interface to create and manage blog posts, simulating basic content management system (CMS) features.",
                  "Showcases practical experience in full-stack web architecture, modular project structure, and dynamic content delivery"
    ],
    techstack: [
      {
        name: "",
        logo: flaskLogo
      },
      {
        name: "",
        logo: mysqlLogo
      },
      {
        name: "tailwind css",
        logo: tailwindcssLogo
      },
      
      
    ]
  };

  const andHub = {
    image: andhubLogo,
    title: "AND Hub",
    repolink: "https://github.com/stapak/AND",
    description: [
                  `Developed AND (Assignments and Notes Distribution), a web platform enabling students to upload, organize, and access academic notes and assignments.`,
                  `Built a responsive frontend using React to provide an interactive interface for browsing and managing shared resources.`,
                  `Implemented backend services using Python to manage data processing, API communication, and server-side application logic.`,
                  `Designed a modular architecture separating frontend, backend, and database layers for improved scalability, maintainability, and 
                  structured project development.`,
                  `Demonstrates practical experience in full-stack web development, resource management systems, and building real-world applications for 
                  student collaboration.`

    ],
    techstack: [
      {
        name: "",
        logo: flaskLogo
      },
      {
        name: "",
        logo: mysqlLogo
      },
      {
        name: "React",
        logo: reactLogo
      },
    ]
  };

  return (
    <section className="projects-section" id="ProjectsPage">
      <h1 className="projects-heading">Projects</h1>
      <Container>

        <div className="projects-wrapper">
          <ProjectCard projectData={andHub} />

          <ProjectCard projectData={reachBlog} />
          
        </div>

       
        

      </Container>
      
    </section>
  );
}

export default ProjectsPage;