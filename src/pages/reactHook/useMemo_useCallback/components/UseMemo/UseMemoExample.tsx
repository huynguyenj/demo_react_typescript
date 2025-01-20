import { useState } from 'react';
import { createTodos } from './utils';
import TodoList from './TodoList';

export default function UseMemoExample() {
  const [todos, setTodos] = useState(createTodos()); // State for todos
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  const [newTodoText, setNewTodoText] = useState(''); // State for new todo text

  function handleCreateTodo() {
    if (newTodoText.trim() === '') return; // Prevent empty todos
    const newTodo = {
      id: todos.length, // Unique ID for the new todo
      text: newTodoText,
      completed: false,
    };
    setTodos(function(prevTodos) {
        return [...prevTodos, newTodo]; // Add the new todo to the list
    });
    setNewTodoText(''); // Clear the input field
  }

  return (
    <>
      {/* Tabs */}
      <div className='button-container'>
      <button className='tab-btn button' onClick={function() { setTab('all'); }}>All</button>
      <button className='tab-btn button' onClick={function() { setTab('active'); }}>Active</button>
      <button className='tab-btn button' onClick={function() { setTab('completed'); }}>Completed</button>
      </div>
      <br />

      {/* Dark Mode Toggle */}
      <label className='label'>
        <input
          className='input'
          type="checkbox"
          checked={isDark}
          onChange={function(e) { setIsDark(e.target.checked); }}
        />
        Dark mode
      </label>
      <hr />

      {/* New Todo Input and Create Button */}
      <div className='create-container div'>
        <input className='create-input input'
          type="text"
          placeholder="Enter a new todo"
          value={newTodoText}
          onChange={function(e) { setNewTodoText(e.target.value); }}
        />
        <button className='create-btn button' onClick={handleCreateTodo}>Create</button>
      </div>

      {/* Todo List */}
      <TodoList todos={todos} tab={tab} theme={isDark ? 'dark' : 'light'} />
    </>
  );
}
