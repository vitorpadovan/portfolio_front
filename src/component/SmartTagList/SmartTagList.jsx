import SmartTag from "../SmartTag/SmartTag";
import "./SmartTagList.css";

function SmartTagList(props) {
  return (
    <>
      <div className="tags">
        {props.tags.map((t, i) => {
          return <SmartTag tag={t} key={t.idSmartTag} />;
        })}
      </div>
    </>
  );
}

export default SmartTagList;
