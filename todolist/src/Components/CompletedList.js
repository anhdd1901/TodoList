import Task from "./Task";
import lodash from "lodash";

function CompletedList({ List }) {
  return lodash.orderBy(List, ["completedDate"], ["desc"]).map((x) => {
    return <Task Task={x} key={`${x.createdDate} ${x.taskName}`} />;
  });
}

export default CompletedList;
