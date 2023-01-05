import Axios from "axios";

const courseService = {};

courseService.GetCourses = () => {
  return Axios.get(process.env.REACT_APP_API_LINK + "/curso");
};
export default courseService;
