import { createAction } from "./action";

function createKata(name, color) {
  let actions = [];

  const getName = () => name;
  const getColor = () => color;
  const getActions = () => actions;

  const setName = (newName) => { name = newName };
  const setColor = (newColor) => { color = newColor };

  const addAction = (title, description, priority, dueDate) => {
    const action = createAction(title, description, priority, dueDate);
    actions.unshift(action);
    return action;
  };

  const removeAction = (index) => {
    actions.splice(index, 1);
  };

  return { getName, getColor, getActions, setName, setColor, addAction, removeAction };
}

export { createKata };
