import { useEffect } from "react";
import { connect } from "react-redux";
import jobService from "../../service/JobService";
import { addJobs } from "../../store/actions/ActJob";
import JobCard from "../JobCard/JobCard";
import "./JobList.css";
function JobList(props) {
  useEffect(() => {
    const fetchData = async () => {
      const result = await jobService.GetJobs();
      props.addJobs(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {props.jobList.selectedItems.map((e, i) => (
        <JobCard key={e.idJob} job={e} />
      ))}
    </>
  );
}

function mapStateToProps(state) {
  return {
    jobList: state.jobList,
  };
}

function mapActionCreatorsToProp(dispatch) {
  return {
    addJobs(jobList) {
      const action = addJobs(jobList);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapActionCreatorsToProp)(JobList);
