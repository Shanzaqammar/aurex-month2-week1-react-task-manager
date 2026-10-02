import TaskItem from './TaskItem';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onEditTask: (id: number) => void;
}

function TaskList({ tasks, onToggleComplete, onDeleteTask, onEditTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state__text">No tasks yet. Add your first task above! 🚀</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
