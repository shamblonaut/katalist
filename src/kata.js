import { createAction } from "./action";

function createKata(name, color) {
  let actions = [];

  const getName = () => name;
  const getColor = () => color;
  const getActions = () => actions;

  const addAction = (title, description, priority, dueDate) => {
    const action = createAction(title, description, priority, dueDate);
    actions.push(action);
    return action;
  };

  const removeAction = (index) => {
    actions.splice(index, 1);
  };

  return { getName, getColor, getActions, addAction, removeAction };
}

export { createKata };
