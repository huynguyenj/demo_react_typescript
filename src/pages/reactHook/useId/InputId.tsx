import  { useId } from "react";

function InputId({name}:{name:string}) {
      const id = useId();
      console.log(id)
  return (
    <div style={{margin:'1rem',display:'flex',gap:'1rem'}}>
      <label htmlFor={id}>{name}</label>
      <input type="text" id={id} />
    </div>
  );
}

export default InputId;
