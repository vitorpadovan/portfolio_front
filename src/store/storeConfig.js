import { createStore, combineReducers } from "redux";

const smartTagsState = { selecionados: [] };
const initialState = {
  itemList: [],
  selectedItems: [],
  selectedSmartTags: [],
};

const redefineState = function redefineState(state, action, actionLoad) {
  switch (action.type) {
    case actionLoad:
      return {
        ...state,
        itemList: action.payload,
        selectedItems: action.payload,
      };
    case "ADICIONAR_TAG":
      var selectedTags = state.selectedSmartTags.concat(action.payload);
      return {
        ...state,
        selectedSmartTags: selectedTags,
        selectedItems: filterCoursesByTag(state.itemList, selectedTags),
      };
    case "REMOVER_TAG":
      const index = state.selectedSmartTags.indexOf(action.payload);
      if (index > -1) {
        state.selectedSmartTags.splice(index, 1);
        if (state.selectedSmartTags.length <= 0) {
          return {
            ...state,
            selectedSmartTags: [],
            selectedItems: state.itemList,
          };
        }
        return {
          ...state,
          selectedSmartTags: state.selectedSmartTags,
          selectedItems: filterCoursesByTag(
            state.itemList,
            state.selectedSmartTags
          ),
        };
      }
    default:
      return state;
  }
};

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

  projectList: function (state = initialState, action) {
    var actionLoad = "LOAD_PROJECTS";
    return redefineState(state, action, actionLoad);
  },

  jobList: function (state = initialState, action) {
    var actionLoad = "LOAD_JOBS";
    return redefineState(state, action, actionLoad);
  },

  courses: function (state = initialState, action) {
    var actionLoad = "LOAD_COURSES";
    return redefineState(state, action, actionLoad);
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
