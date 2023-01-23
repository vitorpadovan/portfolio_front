import { CheckCircleOutline } from "@mui/icons-material";
import SmartTagList from "../SmartTagList/SmartTagList";
import "./JobCard.css";

export default function JobCard(props) {
  const e = props.job;
  return (
    <div className="jobCard bg-slate-800 border-slate-500 ">
      {e.urlLogo != null ? (
        <div className="jobLogo">
          <img src={e.urlLogo} />
        </div>
      ) : null}
      <div className="jobContent">
        <div className="jobTitle">
          <strong>{e.companyName}</strong> - {e.mainPosition}
        </div>
        <div className="jobDescription">{e.description}</div>
        <div className="jobActivity">
          <ol>
            {e.activityList.map((ex, i) => (
              <li key={ex.idEmploymentActivity}>- {ex.title}</li>
            ))}
          </ol>
        </div>
        <SmartTagList tags={e.tags} />
      </div>
    </div>
  );
}
