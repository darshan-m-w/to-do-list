import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Lists from "../Lists/Lists";

const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const changeHolder = (value) => {
    setText(value);
  };

  const btnClickhandler = () => {
    const newlist = [
      ...list,
      {
        item: text.trim(text),
        isDone: false,
      },
    ];

    setList(newlist);
    setText("");
  };

  useEffect(() => {
    const flist = JSON.parse(localStorage.getItem("todo"));
    if (flist) setList(flist);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(list));
  }, [list]);

  const swapholder = (iniIndex, finIndex) => {
    const tasks = [...list];
    const temp = tasks[iniIndex];
    tasks[iniIndex] = tasks[finIndex];
    tasks[finIndex] = temp;
    setList(tasks);
  };

  const isDonehandler = (index) => {
    const tasks = [...list];
    tasks[index].isDone = true;
    setList(tasks);
  };

  const deleteHandler = (index) => {
    let tasks = [...list];
    tasks.splice(index, 1);
    setList(tasks);
  };

  return (
    <>
      <span className="mx-1">
        <Input
          changeHolder={changeHolder}
          value={text}
          enterhandler={btnClickhandler}
        />
      </span>
      <Button
        btnClickhandler={btnClickhandler}
        btnLable="Add to List"
        disabled={!text.trim()}
      />
      <div className="mt-3">
        <Lists
          tasks={list}
          swapholder={swapholder}
          isDonehandler={isDonehandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </>
  );
};
export default Todo;
