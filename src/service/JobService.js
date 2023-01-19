import Axios from "axios";

const jobService = {};

jobService.GetJobs = () => {
  return Axios.get(process.env.REACT_APP_API_LINK + "/trabalho");
};
export default jobService;
