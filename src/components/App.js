import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleDelete(text) {
    const removedTaskArray = tasks.filter(task => task.text !== text);
    setTasks(removedTaskArray);
  };

  function onTaskFormSubmit(newTask){
    const appendedTasks = [...tasks, newTask];
    setTasks(appendedTasks);
  }

  const filteredTasks = tasks.filter(task => (selectedCategory === 'All') ? true : task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryClick={setSelectedCategory} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} onDeleteClick={handleDelete}/>
    </div>
  );
}

export default App;
