import { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import courseService from "../../service/CourseService";
import "./CourseList.css";

export default function CourseList(params) {
  const [list, setLista] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await courseService.GetCourses();
      setLista(result.data);
    };
    fetchData().catch(console.error);
  }, []);
  require("core-js/actual/array/group-by");
  const groupByLanguage = list.groupBy(
    (curso) => curso.courseLanguage.description
  );
  return (
    <div className="courseGroup">
      {Object.keys(groupByLanguage).map((language, indice) => (
        <Fragment key={indice}>
          <h1>{language}</h1>
          <div className="courseList">
            {groupByLanguage[language].map((e, i) => CourseCard(e, i))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
function CourseCard(e, i) {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 300 }} className="courseCard" key={i}>
      <Card variant="outlined" className="cardAbaixo">
        <CardContent>
          <Typography variant="h5" component="div">
            {e.courseName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <a href={e.courseSource.url}>{e.courseSource.description}</a>
          </Typography>
          <Typography variant="body2">{e.description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
