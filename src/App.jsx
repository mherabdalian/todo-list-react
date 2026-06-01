// src/App.jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue }])
      setInputValue('')
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="todo-container">
      <h1>✅ لیست کارهای من</h1>
      <div className="add-task">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="کاری که باید انجام بدم..."
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>➕ افزودن</button>
      </div>
      <ul className="task-list">
        {tasks.length === 0 && <p>هیچ کاری نیست! خوش بگذره 🎉</p>}
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App