import UtilityCard from "./subcomp/UtilityCard";
import "./Utilities.css";
import { Container } from "react-bootstrap";

// Images of utilities.
import quickConnectLogo from "../../assets/utility images/QuickConnect logo.jpeg";


//Skills image
import pythonLogo from "../../assets/skills logo/python logo.png";
import mysqlLogo from "../../assets/skills logo/mysql logo.png";

function UtilitiesPage() {
  const QuickConnect = {
    image: quickConnectLogo,
    title: "QuickConnect - MySQL",
    repolink: "https://github.com/stapak/MySQL-QuickConnect",
    description: [
                  `Problem: Just to test simple quries and commands either we need to use mySQL workbench or mySQL shell which are 
                  irritating as both have specific disadvantages. Work Bench does not come with dark mode which can be irriating for 
                  the eyes in long session and shell can be complex to write even a simple query `,
                  `I built a simple python tool to solve this problem, "QuickConnect" a light weight dark mode enabled utility to 
                  quickly run commands and query the database.`,
                  `This tool can be used to execute queries accross local and remote mySQL servers, it is light weight and installation
                  free utility that can be directly downloaded and used. `, 
                  `Both executable file (.exe) and source code are available in the github for verification of generocity and open 
                  source development.`,                 
    ],
    techstack: [
      {
        name: "python",
        logo: pythonLogo
      },
      {
        name: "",
        logo: mysqlLogo
      },
      
    ]
  };

  return (
    <section className="utilitess-section" id="UtilitiesPage">
      <h1 className="utilities-heading">Prototyped Utilities</h1>
      <Container>

        <div className="utilities-wrapper">
          <UtilityCard utilityData={QuickConnect} />
        </div>

       
        

      </Container>
      
    </section>
  );
}

export default UtilitiesPage;