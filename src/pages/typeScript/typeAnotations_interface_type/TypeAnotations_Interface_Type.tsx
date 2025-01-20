import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./TypeAnotations_Interface_Type.css";

function TypeAnnotations_Interface_Type() {
  return (
    <div className="code-container">
      <div className="code-column code">
        <h3>TypeScript Code</h3>
        <SyntaxHighlighter language="typescript" style={materialDark}>
          {`// Basic Types
let name: string = "Alice"; 
let age: number = 25;
let isStudent: boolean = true;

// Array Type
let numbers: number[] = [1, 2, 3, 4, 5];

// Tuple Type
let userInfo: [string, number] = ["Alice", 25];

// Enum Type
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
let move: Direction = Direction.Up;

// Union Type
let id: number | string;
id = 101;
id = "ABC123";

// Type Alias
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};
let user: Person = { name: "Bob", age: 30, isStudent: false };

// Interface
interface Animal {
    name: string;
    legs: number;
}
let dog: Animal = { name: "Buddy", legs: 4 };

// Function Type Annotations
function greet(name: string): string {
    return "Hello, \${name}!";
}

// Optional and Default Parameters
function multiply(a: number, b: number = 2): number {
    return a * b;
}

// Readonly Properties
type Car = {
    readonly brand: string;
    model: string;
};
let myCar: Car = { brand: "Toyota", model: "Camry" };

// Interface vs Type Alias - Simple Example
interface IUser {
    name: string;
    age: number;
}

type UserType = {
    name: string;
    age: number;
};

const user1: IUser = { name: "Alice", age: 25 };
const user2: UserType = { name: "Bob", age: 30 };

// Interface Extending Another Interface
interface Employee extends IUser {
    position: string;
}
const employee: Employee = { name: "Charlie", age: 28, position: "Engineer" };
`}
        </SyntaxHighlighter>
      </div>
      <div className="code-column description">
        <h4>📌 Type Annotation Explanation:</h4>
        <p>
          <strong>Basic Types:</strong> Fundamental data types. `name` is a
          string, `age` is a number, and `isStudent` is a boolean.
        </p>
        <p>
          <strong>Array Type:</strong> `numbers` is an array that can only
          contain numbers.
        </p>
        <p>
          <strong>Tuple Type:</strong> `userInfo` is a tuple, meaning it has a
          fixed number of elements with specific types (a string and a number).
        </p>
        <p>
          <strong>Enum Type:</strong> `Direction` is an enum, used to define a
          set of named constants, making code more readable.
        </p>
        <p>
          <strong>Union Type:</strong> `id` can be either a number or a string,
          allowing flexible variable usage.
        </p>
        <p>
          <strong>Type Alias:</strong> `Person` is a custom type alias that
          defines the structure of an object with properties `name`, `age`, and
          `isStudent`.
        </p>
        <p>
          <strong>Interface:</strong> `Animal` is an interface that ensures any
          object implementing it has `name` and `legs` properties.
        </p>
        <p>
          <strong>Function Type:</strong> `greet` is a function that takes a
          string as input and returns a string.
        </p>
        <p>
          <strong>Optional and Default Parameters:</strong> `multiply` takes two
          parameters, but `b` has a default value of 2 if not provided.
        </p>
        <p>
          <strong>Readonly Properties:</strong> `Car` defines an object where
          the `brand` property cannot be changed after initialization.
        </p>

        <h4>📌 Interface vs Type Alias - Simple Example:</h4>
        <p>
          <strong>Interface:</strong> `IUser` defines an object structure that
          can be implemented in multiple places.
        </p>
        <p>
          <strong>Type Alias:</strong> `UserType` defines an object structure
          similar to an interface but cannot be extended.
        </p>
        <p>
          Both `user1` and `user2` are objects following these structures,
          demonstrating the primary difference.
        </p>

        <h4>📌 Extending Interfaces:</h4>
        <p>
          `Employee` extends `IUser`, meaning it inherits `name` and `age`, and
          adds a new property `position`.
        </p>
        <p>
          The object `employee` contains all properties from `IUser` plus the
          `position` field.
        </p>
      </div>
    </div>
  );
}

export default TypeAnnotations_Interface_Type;
