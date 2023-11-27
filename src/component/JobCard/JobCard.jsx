import SmartTagList from "../SmartTagList/SmartTagList";
import "./JobCard.css";

export default function JobCard(props) {
  const e = props.job;
  var inicio = new Date(e.startDate);
  var fim;
  if(e.endDate == null)
    fim = null;
  else {
    fim = new Date(e.endDate);
    fim.setHours(fim.getHours() + 3);
  }
    
  inicio.setHours(inicio.getHours() + 3);
  

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
          <strong>{e.companyName}</strong> - {e.mainPosition} {" "}-{" "}
          {inicio.toLocaleDateString("pt-BR")}-{" "} 
          {fim != null ? fim.toLocaleDateString("pt-BR") : "Atual"}
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
