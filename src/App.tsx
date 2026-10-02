import { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = localStorage.getItem('shanzaReactTasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shanzaReactTasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(taskText: string) {
    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId: number) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function toggleComplete(taskId: number) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function editTask(taskId: number) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;
    const newText = prompt('Edit your task:', task.text);
    if (newText === null) return;
    if (newText.trim() === '') return;
    setTasks(
      tasks.map((t) => (t.id === taskId ? { ...t, text: newText.trim() } : t))
    );
  }

  function getFilteredTasks() {
    if (filter === 'active') return tasks.filter((t) => !t.completed);
    if (filter === 'completed') return tasks.filter((t) => t.completed);
    return tasks;
  }

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="app-container">
      <Header />
      <TaskForm onAddTask={addTask} />
      <div className="filters">
        <button
          className={`filters__btn ${filter === 'all' ? 'filters__btn--active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`filters__btn ${filter === 'active' ? 'filters__btn--active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={`filters__btn ${filter === 'completed' ? 'filters__btn--active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>
      <div className="task-counter">
        <span>{tasks.length} tasks ({completedCount} completed)</span>
      </div>
      <TaskList
        tasks={getFilteredTasks()}
        onToggleComplete={toggleComplete}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
      <footer className="app-footer">
        <p>&copy; 2026 Shanza Qammar | AUREX Full-Stack Internship</p>
      </footer>
    </div>
  );
}

export default App;
