import "./App.css";
import CardGroup from "./component/CardGroup/CardGroup";
import CourseList from "./component/CourseList/CourseList";
import UpdateCard from "./component/UpdateCard/UpdateCard";
import ProjectList from "./component/ProjectList/ProjectList";
import JobList from "./component/JobList/JobList";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { connect } from "react-redux";
import AboutCard from "./component/AboutCard/AboutCard";
import ContactCard from "./component/ContactCard/ContactCard";
import Navbar from "./component/Navbar/Navbar";

function App(props) {
  const jobs = props.jobList;
  const course = props.courses;
  const project = props.projectList;
  const sections = [
    { id: 1, name: "Atualizações", link: "/", widget: <UpdateCard /> },
    { id: 2, name: "Sobre", link: "/about", widget: <AboutCard /> },
    {
      id: 3,
      name: "Projetos",
      widget: <ProjectList />,
      link: "/projects",
      selected: project.selectedItems.length,
      items: project.itemList.length,
    },
    {
      id: 4,
      name: "Serviços",
      widget: <JobList />,
      link: "/jobs",
      selected: jobs.selectedItems.length,
      items: jobs.itemList.length,
    },
    {
      id: 5,
      name: "Cursos",
      widget: <CourseList />,
      link: "/courses",
      selected: course.selectedItems.length,
      items: course.itemList.length,
    },
    { id: 6, name: "Contato", link: "contact", widget: <ContactCard /> },
  ];
  return (
    <Router>
      <div className="centerpage">
        <Navbar sections={sections} />
        <div className="centerpage font-sans min-w-full">
          <Routes>
            {sections.map((e, i) => (
              <Route
                key={e.id}
                path={e.link}
                exact
                element={
                  <CardGroup
                    title={e.name}
                    selected={e.selected}
                    items={e.items}
                    key={e.id}
                  >
                    {e.widget}
                  </CardGroup>
                }
              />
            ))}
          </Routes>
          <h1>
            Swagger:{" "}
            <a href="http://backend.vitorpadovan.com.br/">
              http://backend.vitorpadovan.com.br
            </a>
          </h1>
        </div>
      </div>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    projectList: state.projectList,
    jobList: state.jobList,
    courses: state.courses,
  };
}

export default connect(mapStateToProps)(App);
