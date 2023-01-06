import "./App.css";
import CourseList from "./component/CourseList/CourseList";

function App() {
  return (
    <div className="centerpage">
      <h1>Vitor's portfolio</h1>
      <CourseList />
      <h1>Servidor de dados: {process.env.REACT_APP_API_LINK}</h1>
    </div>
  );
}

export default App;
