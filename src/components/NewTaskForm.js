import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: '',
    category: 'Code'
  });

  const filteredCategories = categories.filter(category => category !== 'All');
  const categoryOptions = filteredCategories.map(category => {
    return (
      <option key={category}>{category}</option>
    )
  })

  function updateForm(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]:value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    const newTask = {
      text: formData.text,
      category: formData.category
    };
    onTaskFormSubmit(newTask);
    setFormData({
      text: '',
      category: 'Code'
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={updateForm}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={updateForm}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
