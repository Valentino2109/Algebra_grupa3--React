import PropTypes from "prop-types";

function Item({ task, onStatusChange, onDelete }) {
  const handleTaskStatusChange = () => {
    onStatusChange(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleTaskStatusChange}
      />
      {task.name}
      <button onClick={handleDelete}>X</button>
    </div>
  );
}

Item.propTypes = {
  task: PropTypes.object,
  onStatusChange: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Item;
