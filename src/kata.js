import { createAction } from "./action";

function createKata(name, color) {
  let actions = [];

  return {
    name,
    color,
    actions
  };
}

function addAction(title, description, priority, dueDate, kata) {
  const action = createAction(title, description, priority, dueDate);
  prependAction(action);
  return action;
}

function prependAction(action, kata) {
  kata.actions.unshift(action);
}

function removeAction(index, kata) {
  kata.actions.splice(index, 1);
}

function getCompletionPercentage(kata) {
  let complete = 0;
  let actionCount = kata.actions.length;
  kata.actions.forEach((action) => {
    if (action.completed) complete++;
  });
  return (complete / actionCount) * 100;
}

export { createKata, addAction, prependAction, removeAction, getCompletionPercentage };
