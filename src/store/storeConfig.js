import { createStore, combineReducers } from "redux";

const smartTagsState = { selecionados: [] };

const initialState = {
  itemList: [],
  selectedList: [],
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

  projectList: function (state = initialState, action) {
    switch (action.type) {
      case "LOAD_PROJECTS":
        return {
          ...state,
          itemList: action.payload,
          selectedList: action.payload,
        };
      case "ADICIONAR_TAG":
        return AdicionarTag(state, action);
      case "REMOVER_TAG":
        return RemoverTag(state, action);
      default:
        return state;
    }
  },

  jobList: function (state = initialState, action) {
    switch (action.type) {
      case "LOAD_JOBS":
        return {
          ...state,
          itemList: action.payload,
          selectedList: action.payload,
        };
      case "ADICIONAR_TAG":
        return AdicionarTag(state, action);
      case "REMOVER_TAG":
        return RemoverTag(state, action);
      default:
        return state;
    }
  },

  courses: function (state = initialState, action) {
    switch (action.type) {
      case "LOAD_COURSES":
        return {
          ...state,
          itemList: action.payload,
          selectedList: action.payload,
        };
      case "ADICIONAR_TAG":
        return AdicionarTag(state, action);
      case "REMOVER_TAG":
        return RemoverTag(state, action);
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

function AdicionarTag(state, action) {
  var selectedTags = state.selectedSmartTags.concat(action.payload);
  return {
    ...state,
    selectedSmartTags: selectedTags,
    selectedList: filterCoursesByTag(state.itemList, selectedTags),
  };
}

function RemoverTag(state, action) {
  const index = state.selectedSmartTags.indexOf(action.payload);
  if (index > -1) {
    state.selectedSmartTags.splice(index, 1);
    if (state.selectedSmartTags.length <= 0) {
      return {
        ...state,
        selectedSmartTags: [],
        selectedList: state.itemList,
      };
    }
    return {
      ...state,
      selectedSmartTags: state.selectedSmartTags,
      selectedList: filterCoursesByTag(state.itemList, state.selectedSmartTags),
    };
  }
}

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
