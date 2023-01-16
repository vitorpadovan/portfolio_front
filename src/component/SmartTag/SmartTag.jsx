import { connect } from "react-redux";
import { addSmartTag, delSmartTag } from "../../store/actions/SmarTags.js";

function SmartTag(props) {
  var smartTagActive = isSmartTagActive(
    props.selectedSmartTags.selecionados,
    props.tag.idSmartTag
  );
  return (
    <button
      onClick={() => {
        smartTagActive
          ? props.removerTag(props.tag.idSmartTag)
          : props.adicionarTag(props.tag.idSmartTag);
      }}
      className={`smartTag ${smartTagActive ? "smartTagAtiva" : ""}`}
    >
      #{props.tag.name}
    </button>
  );
}

function isSmartTagActive(selectedSmartTags, idSmartTag) {
  return selectedSmartTags.some((v) => v === idSmartTag);
}

function mapStateToProps(state) {
  return {
    selectedSmartTags: state.selectedSmartTags,
  };
}

function mapActionCreatorsToProp(dispatch) {
  return {
    adicionarTag(novoNumero) {
      const action = addSmartTag(novoNumero);
      dispatch(action);
    },
    removerTag(antigoNumero) {
      const action = delSmartTag(antigoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapActionCreatorsToProp)(SmartTag);
