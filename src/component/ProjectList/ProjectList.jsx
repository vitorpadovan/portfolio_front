import { useEffect } from "react";
import projectService from "../../service/ProjectService";
import ProjectCard from "../ProjectCard/ProjectCard";
import { connect } from "react-redux";
import { addProjectList } from "../../store/actions/ActProject";

function ProjectList(props) {
  const projectList = props.projectList.selectedItems;
  useEffect(() => {
    const fetchData = async () => {
      const result = await projectService.GetProjects();
      props.addProjectList(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {projectList.map((e) => (
        <ProjectCard project={e} key={e.idProject} />
      ))}
    </>
  );
}

function mapStateToProps(state) {
  return {
    projectList: state.projectList,
  };
}

function mapActionCreatorsToProp(dispatch) {
  return {
    addProjectList(courseList) {
      const action = addProjectList(courseList);
      dispatch(action);
    },
  };
}
export default connect(mapStateToProps, mapActionCreatorsToProp)(ProjectList);
