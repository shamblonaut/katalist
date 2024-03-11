function createAction(title, description, priority, dueDate) {
  // Factory functions use closures to create a sense of object properties
  const getTitle = () => title;
  const getDescription = () => description;
  const getPriority = () => priority;
  const getDueDate = () => dueDate;

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

  return {
    getTitle,
    getDescription,
    getPriority,
    getDueDate,
    setTitle,
    setDescription,
    setPriority,
    setDueDate,
  };
}

export { createAction };
