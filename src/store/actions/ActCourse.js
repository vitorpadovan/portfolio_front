export function addCourseList(newSmartTag) {
  return {
    type: "LOAD_COURSES",
    payload: newSmartTag,
  };
}
