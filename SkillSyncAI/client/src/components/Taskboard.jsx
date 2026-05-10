import { useState } from 'react';

function TaskBoard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete UI Wireframes',
      completed: false
    },
    {
      id: 2,
      title: 'Connect MongoDB Database',
      completed: true
    }
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="card">
      <h2>Task Board</h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}
        >
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none'
            }}
          >
            {task.title}
          </span>

          <button onClick={() => toggleTask(task.id)}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskBoard;