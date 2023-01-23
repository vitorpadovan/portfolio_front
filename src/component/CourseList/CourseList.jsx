import React, { useEffect, useState } from "react";
import courseService from "../../service/CourseService";
import "./CourseList.css";
import CourseGroup from "../CourseGroup/CourseGroup";
import { connect } from "react-redux";
import { addCourseList } from "../../store/actions/ActCourse.js";

function CourseList(params) {
  const [groupByLanguage, setGroupByLanguage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await courseService.GetCourses();
      params.addCourseList(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setGroupByLanguage(extrairGroups(params.courses.selectedList));
  }, [params.courses]);

  function extrairGroups(list) {
    require("core-js/actual/array/group-by");
    const groupByLanguage = list.groupBy(
      (curso) => curso.courseLanguage.description
    );
    return groupByLanguage;
  }

  return (
    <div className="courseGroups">
      {Object.keys(groupByLanguage).map((language) => (
        <CourseGroup
          key={language}
          language={language}
          group={groupByLanguage[language]}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    selectedSmartTags: state.selectedSmartTags,
    courses: state.courses,
  };
}

function mapActionCreatorsToProp(dispatch) {
  return {
    addCourseList(courseList) {
      const action = addCourseList(courseList);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapActionCreatorsToProp)(CourseList);
