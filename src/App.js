import "./App.css";
import CardGroup from "./component/CardGroup/CardGroup";
import EmDesenvolvimento from "./component/EmDesenvolvimento/EmDesenvolvimento";
import CourseList from "./component/CourseList/CourseList";
import UpdateCard from "./component/UpdateCard/UpdateCard";
import ProjectList from "./component/ProjectList/ProjectList";
import JobList from "./component/JobList/JobList";
import { connect } from "react-redux";

function App(props) {
  const jobs = props.jobList;
  const course = props.courses;
  const project = props.projectList;
  return (
    <div className="centerpage font-sans">
      <h1 className="font-black text-6xl mb-10">Vitor's portfolio</h1>
      <CardGroup title="Atualização">
        <UpdateCard />
      </CardGroup>
      <CardGroup title="Sobre">
        <EmDesenvolvimento />
      </CardGroup>
      <CardGroup
        title="Projetos"
        selected={project.selectedItems.length}
        items={project.itemList.length}
      >
        <ProjectList />
      </CardGroup>
      <CardGroup
        title="Serviços"
        selected={jobs.selectedItems.length}
        items={jobs.itemList.length}
      >
        <JobList />
      </CardGroup>
      <CardGroup
        title="Cursos"
        selected={course.selectedItems.length}
        items={course.itemList.length}
      >
        <CourseList />
      </CardGroup>
      <CardGroup title="Contato">
        <EmDesenvolvimento />
      </CardGroup>
      <h1>
        Swagger:{" "}
        <a href="http://backend.vitorpadovan.com.br/">
          http://backend.vitorpadovan.com.br
        </a>
      </h1>
    </div>
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
