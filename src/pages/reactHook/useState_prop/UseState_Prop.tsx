import React, { useState } from 'react';

// Component con để minh họa cách sử dụng props
interface CounterDisplayProps {
  count: number;
  onReset: () => void;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ count, onReset }) => {
  return (
    <div className="border-2 border-purple-300 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-purple-50 shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl mb-4 font-bold text-purple-600">Counter Display</h2>
      <p className="mb-4 text-lg">
        Current count: <span className="text-3xl font-bold text-purple-500 animate-pulse">{count}</span>
      </p>
      <button 
        onClick={onReset}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg
        hover:from-red-600 hover:to-pink-600 transform hover:-translate-y-1 transition-all duration-200
        shadow-md hover:shadow-lg"
      >
        Reset Counter
      </button>
    </div>
  );
};

// Component cha để minh họa useState
const UseState_Prop: React.FC = () => {
  // Ví dụ về useState
  const [count, setCount] = useState<number>(0);

  // Các hàm xử lý sự kiện
  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          useState and Props Demo
        </h1>
        
        <div className="mb-8 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl mb-4 font-bold text-gray-800">Parent Component</h2>
          <button 
            onClick={incrementCount}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg
            hover:from-blue-600 hover:to-purple-600 transform hover:-translate-y-1 transition-all duration-200
            shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            Increment Counter
          </button>
        </div>

        {/* Truyền props xuống component con */}
        <CounterDisplay 
          count={count} 
          onReset={resetCount}
        />

        <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-yellow-800">How it works:</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              <span>The parent component uses useState to manage the counter</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">⬆️</span>
              <span>The increment button is in the parent component</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">⬇️</span>
              <span>The count value and reset function are passed as props to the child</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎯</span>
              <span>The child component displays the count and has the reset button</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseState_Prop;
