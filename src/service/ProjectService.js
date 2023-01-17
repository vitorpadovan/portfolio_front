import Axios from "axios";

const projectService = {};

projectService.GetProjects = () => {
  return Axios.get(process.env.REACT_APP_API_LINK + "/projeto");
};
export default projectService;
