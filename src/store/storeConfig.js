import { createStore, combineReducers } from "redux";

const smartTagsState = { selecionados: [] };
const courseState = {
  courseList: [],
  selectedCourseList: [],
  selectedSmartTags: [],
};

const reducers = combineReducers({
  selectedSmartTags: function (state = smartTagsState, action) {
    switch (action.type) {
      case "ADICIONAR_TAG":
        return {
          ...state,
          selecionados: state.selecionados.concat(action.payload),
        };
      case "REMOVER_TAG":
        const index = state.selecionados.indexOf(action.payload);
        if (index > -1) {
          state.selecionados.splice(index, 1);
          return {
            ...state,
            selecionados: state.selecionados,
          };
        }
        break;
      default:
        return state;
    }
  },

  courses: function (state = courseState, action) {
    switch (action.type) {
      case "LOAD_COURSES":
        return {
          ...state,
          courseList: action.payload,
          selectedCourseList: action.payload,
        };
      case "ADICIONAR_TAG":
        var selectedTags = state.selectedSmartTags.concat(action.payload);
        return {
          ...state,
          selectedSmartTags: selectedTags,
          selectedCourseList: filterCoursesByTag(
            state.courseList,
            selectedTags
          ),
        };
      case "REMOVER_TAG":
        const index = state.selectedSmartTags.indexOf(action.payload);
        if (index > -1) {
          state.selectedSmartTags.splice(index, 1);
          if (state.selectedSmartTags.length <= 0) {
            return {
              ...state,
              selectedSmartTags: [],
              selectedCourseList: state.courseList,
            };
          }
          return {
            ...state,
            selectedSmartTags: state.selectedSmartTags,
            selectedCourseList: filterCoursesByTag(
              state.courseList,
              state.selectedSmartTags
            ),
          };
        }
        return state;
      default:
        return state;
    }
  },
});

const filterCoursesByTag = function filterCoursesByTag(
  courseList,
  selectedSmartTags
) {
  var response = [];
  selectedSmartTags.forEach((e) => {
    courseList.forEach((course) => {
      if (course.tags.some((tag) => tag.idSmartTag === e)) {
        response.push(course);
      }
    });
  });
  return response;
};

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
