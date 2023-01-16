import { Fragment } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import OpenInNewOffIcon from "@mui/icons-material/OpenInNewOff";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function OriginCourse(props) {
  const e = props.course;
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
