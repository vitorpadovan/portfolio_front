import "./App.css";
import CardGroup from "./component/CardGroup/CardGroup";
import EmDesenvolvimento from "./component/EmDesenvolvimento/EmDesenvolvimento";
import CourseList from "./component/CourseList/CourseList";
import UpdateCard from "./component/UpdateCard/UpdateCard";
import ProjectList from "./component/ProjectList/ProjectList";

function App() {
  return (
    <div className="centerpage font-sans">
      <h1 className="font-black text-6xl mb-10">Vitor's portfolio</h1>
      <CardGroup title="Atualização">
        <UpdateCard />
      </CardGroup>
      {/* <CardGroup title="Sobre">
        <EmDesenvolvimento />
      </CardGroup> */}
      <CardGroup title="Projetos">
        <ProjectList />
      </CardGroup>
      <CardGroup title="Cursos">
        <CourseList />
      </CardGroup>
      {/* <CardGroup title="Contato">
        <EmDesenvolvimento />
      </CardGroup> */}

      <h1>
        Swagger:{" "}
        <a href="http://backend.vitorpadovan.com.br/">
          http://backend.vitorpadovan.com.br
        </a>
      </h1>
    </div>
  );
}

export default App;
