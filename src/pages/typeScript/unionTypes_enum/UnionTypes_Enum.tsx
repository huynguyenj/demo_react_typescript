import { useRef, useState } from "react";
import "./unionTypes_enum.css";

enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

type student = {
  id: number;
  name: string;
};

const listStudent: student[] = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Anna" },
  { id: 4, name: "James" },
  { id: 5, name: "Jennie" },
];

type theme = "light" | "dark";

function UnionTypes_Enum() {
  const inputElement = useRef<HTMLInputElement>(null);
  const [display, setDisplay] = useState<{
    role: UserRole | null;
    isVisible: boolean;
  }>();
  const [theme, setTheme] = useState<theme>("light");

  const updateRoleValue = (): void => {
    if (inputElement.current) {
      const inputValue = inputElement.current.value.trim().toLowerCase();
      inputElement.current.value = "";

      if (inputValue) {
        switch (inputValue) {
          case UserRole.ADMIN:
            setDisplay({ role: UserRole.ADMIN, isVisible: true });
            alert(`Welcome ${inputValue}`);
            break;
          case UserRole.USER:
            setDisplay({ role: UserRole.USER, isVisible: true });
            alert(`Welcome ${inputValue}`);
            break;
          case UserRole.GUEST:
            setDisplay({ role: UserRole.GUEST, isVisible: false });
            alert(`Welcome ${inputValue}`);
            break;
          default:
            setDisplay({ role: null, isVisible: false });
            setTheme('light')
            alert(`Your ${inputValue} is not suitable please try agin!`);
        }
      }
    }
  };
  const changeTheme = (): void => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div className={`union_enum_container ${theme}`}>
      <div className="enum_union_explaination">
        <h1>What is <span>Enum</span> and <span>Union</span></h1>
        <p className="Enum_explain">
          <h2>Enum</h2>
        Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript. 
        Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
        </p>
        <p className="union_explain">
          <h2>Union</h2>
        Union types are used when a value can be more than a single type.
        </p>
      </div>
      <div className="union_enum_mini">
        <h1>Enum Union demo</h1>
        <div className="input_box_union">
          <input
            type="text"
            id="inputField"
            ref={inputElement}
            className="inputField"
            placeholder=""
            required
          />
          <label className={`label_inputField ${theme}`} htmlFor="inputField">
            Enter your role
          </label>
          <div className="btn_submit_checked">
            <button onClick={updateRoleValue}>Submit</button>
            {display?.isVisible ? (
              <div className="union_enum_btn_theme">
                <button className="theme_btn" onClick={changeTheme}>
                  Change color: {theme == "light" ? "dark" : "light"}{" "}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {display?.isVisible && display.role === UserRole.ADMIN ? (
          <>
            <div className={`listStu_admin ${theme}`}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {listStudent.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default UnionTypes_Enum;
