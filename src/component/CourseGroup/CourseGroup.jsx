import { Fragment, useState } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import OpenInNewOffIcon from "@mui/icons-material/OpenInNewOff";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
                key={i}
                className="bg-slate-800 border-slate-500 
    border-b rounded-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8 w-1/3 cardCourse"
              >
                <div className="flex items-center space-x-4">
                  <div className="min-w-0 flex-auto space-y-1 font-semibold">
                    <h2 className="text-slate-500 dark:text-slate-400 text-sm leading-6">
                      {originCourse(e)}
                    </h2>
                    <p className="text-slate-50 text-lg min-h-max">
                      {e.courseName}
                    </p>
                  </div>
                </div>
                <div>{ProgressBar(e.porcentagemConcluida)}</div>
                <div className="tags">
                  {e.tags.map((t, i) => (
                    <span key={i} className="smartTag">
                      #{t.name}
                    </span>
                  ))}
                </div>
              </div>
            ))
          : null}
      </div>
    </Fragment>
  );
}
function originCourse(e) {
  return (
    <Fragment>
      {e.courseSource.description}{" "}
      {e.urlCurso != null ? (
        <a href={e.urlCurso} target="_blank">
          <OpenInNewIcon sx={{ color: "blue", fontSize: 25 }} />
        </a>
      ) : (
        <OpenInNewOffIcon sx={{ color: "red" }} />
      )}
      {e.urlCertificate != null ? (
        <a href={e.urlCertificate} target="_blank">
          <WorkspacePremiumIcon sx={{ color: "green", fontSize: 25 }} />
        </a>
      ) : null}
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
  return (
    <div className="relative">
      <div className="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1, ml: 1 }}>
            <LinearProgress variant="determinate" value={valor} />
          </Box>
          <Box sx={{ minWidth: 50 }}>
            <Typography variant="body2">{`${Math.round(valor)}%`}</Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
}
