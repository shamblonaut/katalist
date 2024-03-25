function createAction(title, description, priority, dueDate) {
  // Factory functions use closures to create a sense of object properties
  let completed = false;

  const getTitle = () => title;
  const getDescription = () => description;
  const getPriority = () => priority;
  const getDueDate = () => dueDate;
  const getCompleted = () => completed;

  const setTitle = (newTitle) => {
    title = newTitle;
  };

  const setDescription = (newDescription) => {
    description = newDescription;
  };

  const setPriority = (newPriority) => {
    priority = newPriority;
  };

  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };

  const setCompleted = (newCompleted) => {
    completed = newCompleted;
  };

  return {
    getTitle,
    getDescription,
    getPriority,
    getDueDate,
    getCompleted,
    setTitle,
    setDescription,
    setPriority,
    setDueDate,
    setCompleted,
  };
}

export { createAction };
