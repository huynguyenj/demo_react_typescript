import { useState } from "react";
import { createTodos } from "./utils";
import TodoList from "./TodoList";

const todos = createTodos();

const UseMemoExample: React.FC = () => {
    const [tab, setTab] = useState<"all" | "active" | "completed">("all");
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <button onClick={() => setTab("all")}>
                    All
            </button>
            <button onClick={() => setTab("active")}>Active</button>
            <button onClick={() => setTab("completed")}>Completed</button>
            <br />
            <label>
                <input type="checkbox" checked={isDark} onChange={(e) => setIsDark(e.target.checked)}/>Dark mode
            </label>
            <hr />
            <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"}/>
        </>
    )
}

export default UseMemoExample;
