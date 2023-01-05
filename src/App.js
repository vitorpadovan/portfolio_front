import { Fragment } from "react";
import "./App.css";
import CourseList from "./component/CourseList/CourseList";

function App() {
  return (
    <Fragment>
      <h1>
        Variável {process.env.NODE_ENV}/{process.env.REACT_APP_ENVORIMENT}
      </h1>
      <br />
      <div className="centerpage">
        <CourseList />
      </div>
    </Fragment>
  );
}

export default App;
