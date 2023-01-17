export function addProjectList(newSmartTag) {
  return {
    type: "LOAD_PROJECTS",
    payload: newSmartTag,
  };
}
