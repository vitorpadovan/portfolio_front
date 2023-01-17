import SmartTagList from "../SmartTagList/SmartTagList";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Lock from "@mui/icons-material/Lock";
import LockOpen from "@mui/icons-material/LockOpen";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div
      className="projectCard bg-slate-800 border-slate-500 
 border-b rounded-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8 w-1/3"
    >
      <div className="photo">
        <EmojiObjectsIcon sx={{ fontSize: 50 }} />
      </div>
      <div className="content">
        <h1 className="font-black">{props.project.title}</h1>
        <p>{props.project.description}</p>
        {props.project.links.map((e, i) => (
          <p key={i}>
            <a href={e.url} target="_blank">
              {LinkIcon()} {isPublicLink(e)} {e.title}
            </a>
          </p>
        ))}
        <div>
          <SmartTagList tags={props.project.tags} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
function LinkIcon() {
  return <OpenInNewIcon sx={{ color: "black", fontSize: 20 }} />;
}

function isPublicLink(e) {
  return e.private ? (
    <Lock sx={{ color: "red", fontSize: 20 }} />
  ) : (
    <LockOpen sx={{ color: "green", fontSize: 20 }} />
  );
}
