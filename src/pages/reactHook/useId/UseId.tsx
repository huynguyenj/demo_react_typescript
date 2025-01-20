import { useId,  useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./UseId.css";
import InputId from "./InputId";
function UseId() {
  const useIdDemo = `
      const id1 = useId();
      const id2 = useId();
      `;
  const elementUsing = `
          <button id={id1} onClick={()=>handleCount(id1)}>Button with Id {id1}</button>
          <button id={id2} onClick={()=>handleCount(id2)}>Button with Id: {id2}</button>
      `;
  const editId = `
      //Edit in main.tsx or main.jsx
      createRoot(document.getElementById('root')!,{identifierPrefix:'cpl_react03'}).render(
          <StrictMode>
            <BrowserRouter>
               <App />
            </BrowserRouter>
          </StrictMode>,)
      //After edit:
      console.log(id1); // :cpl_react03rm
      console.log(id2); // :cpl_react03rn

 `;
 const inputExam = `
   //Input component
 function InputId({name}:{name:string}) {
       const id = useId();
       console.log(id)
   return (
     <div>
            <label htmlFor={id}>{name}</label>
            <input type="text" id={id} />
     </div>
   );
}
   //Another component
 function App(){
      return(
              <InputId name="Name"/>
              <InputId name="Name"/>
      )
}
 `
  const id1 = useId();
  const id2 = useId();
  const [count, setCount] = useState<number>(0);

  const handleCount = (id: string): void => {
    setCount((prev) => prev + 1);
    console.log(id);
  };
  return (
    <div className="useId_container">
      <div className="title_useId">
        <h1>
          What is <span>useId</span>?
        </h1>
        <p>
          <span>useId</span> is a React Hook for generating unique IDs that can
          be passed to accessibility attributes.
        </p>
      </div>
      <div className="useId_content">
        <div className="syntax_useID_container">
          <div className="demo_code_useId">
            <h3>useId</h3>
            <SyntaxHighlighter language="typescript" style={{ ...vscDarkPlus }}>
              {useIdDemo}
            </SyntaxHighlighter>
            <h3>Button</h3>
            <SyntaxHighlighter language="typescript" style={{ ...vscDarkPlus }}>
              {elementUsing}
            </SyntaxHighlighter>
          </div>

          <div className="useId_controller_btn">
            <h1>Number: {count}</h1>
            <button id={id1} onClick={() => handleCount(id1)}>
              Button with {id1}
            </button>
            <button id={id2} onClick={() => handleCount(id2)}>
              Button with Id {id2}
            </button>
            
          </div>
        </div>
        <div className="input_example_useId">
        <div className="input_useId">
                  <InputId name="Name"/>
                  <InputId name="Name"/>
                  <h3>useId</h3>
            <SyntaxHighlighter language="typescript" style={{ ...vscDarkPlus }}>
              {inputExam}
            </SyntaxHighlighter>
            </div>
        </div>
        <div className="extend_useId_content">
          <h1>Edit Id like we want</h1>
          <h3>editId</h3>
          <SyntaxHighlighter language="typescript" style={{ ...vscDarkPlus }}>
            {editId}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default UseId;
