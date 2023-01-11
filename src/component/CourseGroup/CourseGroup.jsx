import { Button, Card, CardContent, ToggleButton } from "@mui/material";
import { Fragment, useState } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddIcon from "@mui/icons-material/Add";

import RemoveIcon from "@mui/icons-material/Remove";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import OpenInNewOffIcon from "@mui/icons-material/OpenInNewOff";

import CheckIcon from "@mui/icons-material/Check";
import "./CourseGroup.css";

export default function CourseGroup(props) {
  const [ativo, setAtivo] = useState(false);
  return (
    <Fragment>
      {toogleButton(ativo, setAtivo, props)}

      <div className="singleGroupCourse">
        {ativo
          ? props.group.map((e, i) => (
              <div
                class="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 
    border-b rounded-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8 w-1/3 cardCourse"
              >
                <div className="flex items-center space-x-4">
                  <div className="min-w-0 flex-auto space-y-1 font-semibold">
                    <h2 className="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
                      {e.courseName}
                    </h2>
                    <p className="text-slate-900 dark:text-slate-50 text-lg">
                      {e.courseSource.description}{" "}
                      {e.urlCurso != null ? (
                        <a href={e.urlCurso}>
                          <OpenInNewIcon sx={{ color: "blue" }} />
                        </a>
                      ) : (
                        <OpenInNewOffIcon sx={{ color: "red" }} />
                      )}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {ProgressBar(e.porcentagemConcluida)}
                </div>
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

function ProgressBar(valor) {
  let tamanho = "1/2";
  switch (true) {
    case valor >= 0 && valor < 8.33:
      tamanho = "1/12";
      break;
    case valor >= 8.33 && valor < 16.66:
      tamanho = "1/6";
      break;
    case valor >= 16.66 && valor < 20:
      tamanho = "1/5";
      break;
    case valor >= 20 && valor < 25:
      tamanho = "1/4";
      break;
    case valor >= 25 && valor < 33.33:
      tamanho = "1/3";
      break;
    case valor >= 33.33 && valor < 40:
      tamanho = "2/5";
      break;
    case valor >= 40 && valor < 41.66:
      tamanho = "5/12";
      break;
    case valor >= 41.66 && valor < 50:
      tamanho = "1/2";
      break;
    case valor >= 50 && valor < 58.33:
      tamanho = "7/12";
      break;
    case valor >= 58.33 && valor < 60:
      tamanho = "3/5";
      break;
    case valor >= 60 && valor < 66.66:
      tamanho = "2/3";
      break;
    case valor >= 66.66 && valor < 75:
      tamanho = "3/4";
      break;
    case valor >= 75 && valor < 80:
      tamanho = "4/5";
      break;
    case valor >= 80 && valor < 83.33:
      tamanho = "5/6";
      break;
    case valor >= 83.33 && valor < 91.66:
      tamanho = "11/12";
      break;
    case valor >= 91.66 && valor < 100:
      tamanho = "full";
      break;
  }

  return valor >= 100 ? (
    <CheckIcon color="success" sx={{ fontSize: 40 }} />
  ) : (
    <div class="relative">
      <div class="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          class={`bg-cyan-500 dark:bg-cyan-400 w-${tamanho} h-2`}
          role="progressbar"
          aria-label="music progress"
          aria-valuenow="1456"
          aria-valuemin="0"
          aria-valuemax="4550"
        ></div>
      </div>
      {/* <div
        class={`ring-cyan-500 dark:ring-cyan-400 ring-2 absolute left-${tamanho} top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow`}
      >
        <div class="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
      </div> */}
    </div>
  );
}

function Antigo(setAtivo, ativo, props) {
  return (
    <Fragment>
      <Button onClick={() => setAtivo(!ativo)}>
        <h1>
          {props.language} ({props.group.length})
        </h1>
      </Button>
      {ativo ? (
        <div className="singleGroupCourse">
          {props.group.map((e, i) => (
            <Card className="cardCourse" key={i}>
              <CardContent>
                <strong>{e.courseName}</strong>
                <br />
                {e.courseSource.description}
                <br />
                <a href={e.urlCertificate}>Certificado</a>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <br />
      )}
    </Fragment>
  );
}
