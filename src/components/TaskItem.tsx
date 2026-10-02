interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onEditTask: (id: number) => void;
}

function TaskItem({ task, onToggleComplete, onDeleteTask, onEditTask }: TaskItemProps) {
  return (
    <li className={`task-item ${task.completed ? 'task-item--completed' : ''}`}>
      <input
        type="checkbox"
        className="task-item__checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <span className="task-item__text">{task.text}</span>
      <div className="task-item__actions">
        <button
          className="task-item__btn task-item__btn--edit"
          onClick={() => onEditTask(task.id)}
        >
          Edit
        </button>
        <button
          className="task-item__btn task-item__btn--delete"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
