import "./App.css";
import CardGroup from "./component/CardGroup/CardGroup";
import EmDesenvolvimento from "./component/EmDesenvolvimento/EmDesenvolvimento";
import CourseList from "./component/CourseList/CourseList";
import UpdateCard from "./component/UpdateCard/UpdateCard";

function App() {
  return (
    <div className="centerpage font-sans">
      <h1 className="font-black text-6xl mb-10">Vitor's portfolio</h1>
      <CardGroup title="Atualização">
        <UpdateCard />
      </CardGroup>
      <CardGroup title="Sobre">
        <EmDesenvolvimento />
      </CardGroup>
      <CardGroup title="Projetos">
        <EmDesenvolvimento />
      </CardGroup>
      <CardGroup title="Serviços">
        <EmDesenvolvimento title="Serviços" />
      </CardGroup>
      <CardGroup title="Cursos">
        <CourseList />
      </CardGroup>
      <CardGroup title="Contato">
        <EmDesenvolvimento />
      </CardGroup>

      <h1>Servidor de dados: {process.env.REACT_APP_API_LINK}</h1>
    </div>
  );
}

export default App;
