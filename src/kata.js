import { createAction } from "./action";

function createKata(name, color) {
  let actions = [];

  const getName = () => name;
  const getColor = () => color;
  const getActions = () => actions;

  const getCompletionPercentage = () => {
    let complete = 0;
    let actionCount = actions.length;
    actions.forEach((action) => {
      if (action.getCompleted()) complete++;
    });
    return (complete / actionCount) * 100;
  };

  const setName = (newName) => {
    name = newName;
  };
  const setColor = (newColor) => {
    color = newColor;
  };

  const addAction = (title, description, priority, dueDate) => {
    const action = createAction(title, description, priority, dueDate);
    prependAction(action);
    return action;
  };

  const prependAction = (action) => actions.unshift(action);

  const removeAction = (index) => {
    actions.splice(index, 1);
  };

  return {
    getName,
    getColor,
    getActions,
    getCompletionPercentage,
    setName,
    setColor,
    prependAction,
    addAction,
    removeAction,
  };
}

export { createKata };
