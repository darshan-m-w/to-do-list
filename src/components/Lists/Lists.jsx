/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import styles from "./Lists.module.css";

// eslint-disable-next-line react/prop-types
const Lists = ({ tasks, swapholder, isDonehandler, deleteHandler }) => {
  // ['A','B','C'] ==> ARRAY OF JSX ===> [<li key=0>A</li>, <li key=1>B<li>,  <li key=2>C<li>]
  // eslint-disable-next-line react/prop-types
  const taskList = tasks.map((task, index) => (
    <li key={index}>
      {task.item}
      <Button
        btnLable="Up"
        btnclass={styles.container}
        btnClickhandler={() => {
          swapholder(index, index - 1);
        }}
        disabled={index === 0}
      />
      <Button
        btnLable="Down"
        btnclass={styles.container}
        btnClickhandler={() => {
          swapholder(index, index + 1);
        }}
        disabled={index === tasks.length - 1}
      />
      {!task.isDone && (
        <Button
          btnLable="Done"
          btnclass={styles.container}
          btnClickhandler={() => {
            isDonehandler(index);
          }}
        />
      )}
      {task.isDone && (
        <Button
          btnLable="Delete"
          btnclass={styles.container}
          btnClickhandler={() => {
            deleteHandler(index);
          }}
        />
      )}
    </li>
  ));
  return <ul className="d-inline-block">{taskList}</ul>;
};
export default Lists;
