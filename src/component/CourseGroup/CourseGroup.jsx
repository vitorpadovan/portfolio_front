import { Fragment, useState } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import "./CourseGroup.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import OriginCourse from "../CourseOrigin/CourseOrigin";
import SmartTagList from "../SmartTagList/SmartTagList";

function CourseGroup(props) {
  const [ativo, setAtivo] = useState(false);
  return (
    <Fragment>
      {toogleButton(ativo, setAtivo, props)}

      <div className="singleGroupCourse">
        {ativo
          ? props.group.map((e) => (
              <div
                key={e.idCourse}
                className="bg-slate-800 border-slate-500 
    border-b rounded-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8 w-1/3 cardCourse"
              >
                <div className="flex items-center space-x-4">
                  <div className="min-w-0 flex-auto space-y-1 font-semibold">
                    <h2 className="text-slate-500 dark:text-slate-400 text-sm leading-6">
                      {<OriginCourse course={e} />}
                    </h2>
                    <p className="text-slate-50 text-lg min-h-max">
                      {e.courseName}
                    </p>
                  </div>
                </div>
                <div>{<ProgressBar value={e.porcentagemConcluida} />}</div>
                <SmartTagList tags={e.tags} />
              </div>
            ))
          : null}
      </div>
    </Fragment>
  );
}

function toogleButton(ativo, setAtivo, props) {
  return (
    <button onClick={() => setAtivo(!ativo)}>
      <div className={`toogleButton text-slate-500 ${ativo ? "ativo" : ""}`}>
        <div className="texto ">{props.language}</div>
        <div className="icone">
          {ativo ? <RemoveCircleIcon /> : <AddCircleIcon />}
        </div>
      </div>
    </button>
  );
}

export default CourseGroup;
