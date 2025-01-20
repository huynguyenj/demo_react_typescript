import React, { useContext, createContext, useState } from 'react';

// Create a Context for the light status
const LightContext = createContext<{ isOn: boolean; toggleLight: () => void } | null>(null);

function LightSwitch() {
  const context = useContext(LightContext);
  if (!context) {
    throw new Error('LightSwitch must be used within a LightProvider');
  }
  const { isOn, toggleLight } = context;

  return (
    <div>
      <p>The light is {isOn ? 'On' : 'Off'}</p>
      <button style={{background:'#f76b8a',borderRadius:'10px',padding:'1rem'}} onClick={toggleLight}>Toggle Light</button>
    </div>
  );
}

function LightProvider({ children }: { children: React.ReactNode }) {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <LightContext.Provider value={{ isOn, toggleLight }}>
      {children}
    </LightContext.Provider>
  );
}

function UseContext() {
  return (
    <LightProvider>
      <LightContext.Consumer>
        {context => {
          const backgroundColor = context?.isOn ? 'white' : 'black';
          const color = context?.isOn ? 'black' : 'white';
          return (
            <div style={{ backgroundColor, color, minHeight: '90vh', textAlign: 'center',padding:'2rem' }}>
              <h1>Light Switch Demo</h1>
              <LightSwitch />
            </div>
          );
        }}
      </LightContext.Consumer>
    </LightProvider>
  );
}

export default UseContext;