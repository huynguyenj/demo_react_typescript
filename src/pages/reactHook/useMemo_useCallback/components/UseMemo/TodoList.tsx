import { useMemo } from "react";
import { Todo, filterTodos } from "./utils";

interface TodoListProps {
    todos: Todo[];
    theme: string;
    tab: string;
}

const TodoList: React.FC<TodoListProps> = ({todos, theme, tab}) => {
    const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos,tab]);

    return (
        <div className={theme}>
            <p>
                <b>
                    Note: <code>filterTodos</code> is artificially slowed down!
                </b>
            </p>
            <ul>
                {visibleTodos.map((todo) => (
                    <li key={todo.id}>
                        {todo.completed ? <s>{todo.text}</s>: todo.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;