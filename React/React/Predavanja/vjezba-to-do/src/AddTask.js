import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [taskText, setTaskText] = useState("");

  const handleInputChange = (e) => {
    const textValue = e.target.value;
    setTaskText(textValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTaskText = taskText.trim();
    if (newTaskText.length > 0) {
      onAdd(newTaskText);
      setTaskText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          placeholder="Unesi novi zadatak"
          onChange={handleInputChange}
        />
        <input type="submit" value="Dodaj" />
      </form>
    </div>
  );
};

export default AddTask;
