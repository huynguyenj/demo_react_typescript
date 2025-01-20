import { useMemo } from "react";
import { Todo, filterTodos } from "./utils";

interface TodoListProps {
    todos: Todo[];
    theme: string;
    tab: string;
}

function TodoList({todos, theme, tab}: TodoListProps) {
    const visibleTodos = useMemo(function() {
        return filterTodos(todos, tab);
    }, [todos, tab]);

    return (
        <div className={theme}>
            <p>
                <b>
                    Note: <code>filterTodos</code> is artificially slowed down!
                </b>
            </p>
            <ul>
                {visibleTodos.map(function(todo) {
                    return (
                        <li key={todo.id}>
                            {todo.completed ? <s>{todo.text}</s>: todo.text}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default TodoList;
