import { CheckCircleOutline } from "@mui/icons-material";
import SmartTagList from "../SmartTagList/SmartTagList";
import "./JobCard.css";

export default function JobCard(props) {
  const e = props.job;
  var inicio = new Date(e.startDate);
  var fim = new Date(e.endDate);
  inicio.setHours(inicio.getHours() + 3);
  fim.setHours(fim.getHours() + 3);

  console.log(fim, " ", e.endDate);
  return (
    <div className="jobCard bg-slate-800 border-slate-500 ">
      {e.urlLogo != null ? (
        <div className="jobLogo">
          <img src={e.urlLogo} />
        </div>
      ) : null}
      <div className="jobContent">
        <div className="jobTitle">
          <strong>{e.companyName}</strong> - {e.mainPosition} -{" "}
          {inicio.toLocaleDateString("pt-BR")} -{" "}
          {fim.toLocaleDateString("pt-BR")}
        </div>
        <div className="jobDescription">{e.description}</div>
        <div className="jobActivity">
          <ol>
            {e.activityList.map((ex, i) => (
              <li key={ex.idEmploymentActivity}>{ex.title}</li>
            ))}
          </ol>
        </div>
        <SmartTagList tags={e.tags} />
      </div>
    </div>
  );
}
