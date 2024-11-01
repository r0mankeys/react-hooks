import { memo, useState, useReducer, useCallback } from 'react';

const initialTodos = [
  {
    id: 1730334521603,
    title: 'Learn React',
    completed: false,
    editable: false,
  },
  { id: 1730334521604, title: 'Learn C', completed: false, edtiabel: false },
  { id: 1730334521605, title: 'Learn Rust', completed: false, editable: false },
];

const ACTIONS = {
  ADD_TODO: 'add-todo',
  CHECK_OFF_TODO: 'check-off-todo',
  EDIT_TODO: 'edit-todo',
  DELETE_TODO: 'delete-todo',
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      return [
        ...state,
        { id: Date.now(), title: action.payload, completed: false },
      ];
    }
    case ACTIONS.CHECK_OFF_TODO: {
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    }
    case ACTIONS.EDIT_TODO: {
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, editable: !todo.editable };
        }
        return todo;
      });
    }
    case ACTIONS.DELETE_TODO: {
      return state.filter(todo => todo.id !== action.payload);
    }
  }
};

export default function UseReducerBody() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [input, setInput] = useState(``);
  const [error, setError] = useState(false);

  const handleInputChange = e => setInput(e.target.value);

  const handleInputAddition = useCallback(
    e => {
      e.preventDefault();
      const inputTrimmed = input.replace(/\s/g, '');
      if (inputTrimmed === ``) {
        setError(true);
        return;
      }
      setError(false);
      dispatch({ type: ACTIONS.ADD_TODO, payload: input });
      setInput(``); // Clear input after adding
    },
    [input, dispatch],
  );

  const handleTodoCheck = useCallback(
    id => {
      dispatch({ type: ACTIONS.CHECK_OFF_TODO, payload: id });
    },
    [dispatch],
  );

  const handleTodoEdit = useCallback(
    id => {
      dispatch({ type: ACTIONS.EDIT_TODO, payload: id });
    },
    [dispatch],
  );

  const handleTodoDelete = useCallback(
    id => {
      dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
    },
    [dispatch],
  );

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-3xl mb-4">Todos</h2>
      <AddInput
        input={input}
        handleInputChange={handleInputChange}
        handleInputAddition={handleInputAddition}
        error={error}
      />
      <div className="flex flex-col items-start mt-3 gap-4">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todoRef={todo}
            handleTodoCheck={() => handleTodoCheck(todo.id)}
            handleTodoEdit={() => handleTodoEdit(todo.id)}
            handleTodoDelete={() => handleTodoDelete(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

const Todo = memo(function Todo({
  todoRef,
  handleTodoCheck,
  handleTodoEdit,
  handleTodoDelete,
}) {
  const [todo, setTodo] = useState(todoRef.title);

  function handleInputChange(e) {
    e.preventDefault();
    setTodo(e.target.value);
  }
  return (
    <div className="flex items-center gap-4 p-4 border-[1px] border-solid border-slate-500 rounded-xl">
      <input
        onChange={handleTodoCheck}
        checked={todoRef.completed}
        type="checkbox"
        name="check-todo"
        id="todo-checkbox"
      />
      {todoRef.editable ? (
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5 w-36"
          onChange={handleInputChange}
          value={todo}
        ></input>
      ) : (
        <label
          htmlFor="todo-checkbox"
          className={todoRef.completed ? `line-through opacity-50` : ``}
        >
          {todo}
        </label>
      )}
      <button
        onClick={handleTodoEdit}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        {todoRef.editable ? `Save` : `Edit`}
      </button>
      <button
        onClick={handleTodoDelete}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Delete
      </button>
    </div>
  );
});

const AddInput = memo(function AddInput({
  input,
  handleInputChange,
  handleInputAddition,
  error,
}) {
  return (
    <form className="flex mb-4" onSubmit={handleInputAddition}>
      <div className="flex flex-col">
        <input
          onChange={handleInputChange}
          value={input}
          className={`bg-gray-50 border ${error ? 'border-red-600' : 'border-gray-500'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5 w-36 me-4`}
          type="text"
          name="todo-main-input"
          id="todo-main-input"
        />
        {error ? (
          <span className="mt-1 text-red-600 text-xs">
            This input field is required
          </span>
        ) : null}
      </div>
      <button
        className="h-fit text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
});
