import Task from "./Task";
import lodash from "lodash";

function UnCompletedList({ List }) {
  return lodash
    .orderBy(List, ["isFavorite", "createdDate"], ["desc", "desc"])
    .map((x) => {
      return <Task Task={x} key={`${x.createdDate} ${x.taskName}`} />;
    });
}

export default UnCompletedList;
