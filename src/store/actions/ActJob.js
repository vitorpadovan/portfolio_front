export function addJobs(newSmartTag) {
  return {
    type: "LOAD_JOBS",
    payload: newSmartTag,
  };
}
