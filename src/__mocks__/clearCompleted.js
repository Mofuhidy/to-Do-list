const clearCompleted = () => {
  const allTasks = [{
    description: 'hello complete',
    completed: false,
    index: 0,
  },
  {
    description: 'hello complete 1',
    completed: true,
    index: 1,
  },
  {
    description: 'hello completed 2',
    completed: true,
    index: 2,
  }];

  return allTasks.filter((task) => !task.completed);
};

export default clearCompleted;