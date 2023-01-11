import React, { useEffect, useState } from "react";
import courseService from "../../service/CourseService";
import "./CourseList.css";
import CourseGroup from "../CourseGroup/CourseGroup";

export default function CourseList(params) {
  const [list, setLista] = useState([]);
  const [groupByLanguage, setGroupByLanguage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await courseService.GetCourses();
      setLista(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setGroupByLanguage(extrairGroups(list));
  }, [list]);

  return (
    <div className="courseGroups">
      {Object.keys(groupByLanguage).map((language, indice) => (
        <CourseGroup
          key={indice}
          language={language}
          group={groupByLanguage[language]}
        />
      ))}
    </div>
  );
}

function extrairGroups(list) {
  require("core-js/actual/array/group-by");
  const groupByLanguage = list.groupBy(
    (curso) => curso.courseLanguage.description
  );
  return groupByLanguage;
}
