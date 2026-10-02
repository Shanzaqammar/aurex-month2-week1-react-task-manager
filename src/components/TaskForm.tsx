import { useState } from 'react';

interface TaskFormProps {
  onAddTask: (taskText: string) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue === '') {
      setError('Please enter a task before adding.');
      return;
    }

    if (trimmedValue.length > 100) {
      setError('Task is too long (max 100 characters).');
      return;
    }

    onAddTask(trimmedValue);
    setInputValue('');
    setError('');
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-form__input"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        maxLength={100}
      />
      <button type="submit" className="task-form__btn">Add Task</button>
      {error && <p className="validation-msg">{error}</p>}
    </form>
  );
}

export default TaskForm;
