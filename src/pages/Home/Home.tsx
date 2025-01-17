import "./Home.css";
function Home() {
  return (
    <div className="home_container">
      <div className="start_content">
        <h1 className="home_title">Welcome to our website</h1>
        <h2 className="home_subtitle">
          This is a website for learning about React Hooks and TypeScript to
          make you understand these.
        </h2>
      </div>
      <div className="reacthooks_content">
        <h2>What is React Hooks ?</h2>
        <div className="react_hook_meaning">
          <div className="explaination">
            <p className="hook_explain">
              React Hooks are tools that allow you to use state and other React
              features without writing class components. They're designed to
              simplify your code and make it easier to share logic across
              components.
            </p>
            <p className="rule_hooks">
              There are 3 rules for hooks: <br />
              Hooks can only be called inside React function components. <br />
              Hooks can only be called at the top level of a component. <br />
              Hooks cannot be conditional.
            </p>
          </div>
          <div className="hook_img">
            <div className="img_content">
              <img
                src="https://d2ms8rpfqc4h24.cloudfront.net/image_3_7739307af7.jpg"
                alt="img_react"
              />
              <p>
                <h2>Benefits</h2>
                <span>Reuse States and Components:</span> React Hooks enable the reuse of
                stateful logic without the need for complex patterns like
                higher-order components or render props. This makes components
                more modular and easier to maintain. <br />
                <span>Better Code Composition:</span> Hooks allow for separating logic into
                smaller, reusable functions. This results in cleaner, more
                organized code that’s easier to read and extend. <br />
                <span>Performance:</span> Hooks help reduce unnecessary re-renders by
                optimizing state and effect dependencies. They offer better
                control over when and how components update, improving overall
                application performance. <br />
                <span>Better Testing:</span> With React Hooks, logic is moved into isolated
                functions, which can be tested independently. This improves the
                testability of components and ensures more reliable outcomes.
              </p>
            </div>
                  <h2>Some example of using hook</h2>
            <div className="img_content2">
            <img
              src="https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/6_react-hooks.jpg"
              alt="img_react"
            />
            <img
              src="https://codecomplete.jp/wp-content/uploads/2023/08/codecomplete-react-development-720x459.png"
              alt="img_react"
            />
            </div>
          </div>
        </div>
      </div>
      <div className="typescript_content">
        <div className="typescript_meaning">
          <h2>What is TypeScript ?</h2>
          <div className="typescript_explain">
            <p>
              <span>JavaScript and More</span> <br />
              TypeScript adds additional syntax to JavaScript to support a
              tighter integration with your editor. Catch errors early in your
              editor.
            </p>
            <p>
              <span>A Result You Can Trust </span><br />
              TypeScript code converts to JavaScript, which runs anywhere
              JavaScript runs: In a browser, on Node.js, Deno, Bun and in your
              apps.
            </p>
            <p>
              <span>Safety at Scale</span> <br />
              TypeScript understands JavaScript and uses type inference to give
              you great tooling without additional code.
            </p>
          </div>
          <div className="typescript_img">
            <div className="typescript_img1 ts">
            <img
              src="https://code.visualstudio.com/assets/docs/typescript/tutorial/unreachable-code-detected.png"
              alt="typescript_img"
            />
            <p> TypeScript introduces static typing, allowing developers to define variable types for safe.</p>
            </div>
            <div className="typescript_img2 ts">
            <p>Enums in TypeScript allow for better organization of constants</p>
            <img
              src="https://preview.redd.it/zu2wlneh5gm91.png?width=820&format=png&auto=webp&s=dbe839f43c70dc34a2fd17fdd4a1c9aad119d048"
              alt="typescript_img"
            />
            </div>
            <div className="typescript_img3 ts">
            <img
              src="https://ypcode.wordpress.com/wp-content/uploads/2017/08/interface01.png"
              alt="typescript_img"
            />
            <p> Interfaces define the structure of objects, ensuring the code adheres to specified formats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
