import React, { useState, useLayoutEffect, useEffect } from "react";
import './UserLayoutEffect.css'


 function CounterWithLayoutEffect() {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);


  // useLayoutEffect
  // - Used here to update the "isEven" state immediately after "count" changes,
  //   ensuring that the UI reflects this update synchronously.
  useLayoutEffect(() => {
      if(count > 3){
            setCount(0);
      }
  }, [count]);

  useEffect(() => {
      if(count2 > 3){
            setCount2(0);
      }
  }, [count2]);

  // useEffect
  // - Logs the current count after the browser has painted, for demonstration purposes.
  useEffect(() => {
    console.log(`Count updated to: ${count2}`);
  }, [count2]);
  useLayoutEffect(() => {
      console.log(`Count updated to: ${count}`);
    }, [count]);
  
  return (
    <div className="counter-container">
      <div className="useLayoutEffevt_overview">
        <h1>What is <span>useLayoutEffect</span> ?</h1>
        <p>useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.</p>
      </div>
      <div className="title_uselayotEffect">
            <h1>UseLayoutEffect Demo</h1>
      </div>

      <div className="useLayoutEff_ex">
      <h1 className="counter-title">Counter Example with <span>useLayoutEffect</span></h1>
      <h1 className="counter-display" >Current Count: <span>{count}</span></h1>
      <div className="counter-controls">
        <button className="increment-button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
       
      </div>
      </div>


      <div className="useEff_ex">
      <h1 className="counter-title">Counter Example with <span>useEffect</span> </h1>
      <h1 className="counter-display" >Current Count: <span>{count2}</span></h1>
    
      <div className="counter-controls">
        <button className="increment-button" onClick={() => setCount2(count2 + 1)}>
          Increment
        </button>
      
      </div>
      </div>
      <div className="comparation_useEf_useLef">
  <div className="useEffect_section">
    <h2>UseEffect</h2>
    <ul>
      <li>Update state</li>
      <li>Update DOM (mutated)</li>
      <li>Render UI again</li>
      <li>Cleanup when dependency changes</li>
      <li>Call useEffect callback</li>
    </ul>
  </div>
  <div className="divider"></div>
  <div className="useLayoutEffect_section">
    <h2>UseLayoutEffect</h2>
    <ul>
      <li>Update state</li>
      <li>Update DOM (mutated)</li>
      <li>Cleanup when dependency changes</li>
      <li>Call useLayoutEffect callback</li>
      <li>Render UI again</li>
    </ul>
  </div>
</div>

    </div>
  );
};

export default CounterWithLayoutEffect;
