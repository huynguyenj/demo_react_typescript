import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { MaxWidthWrapper } from './extras/max-width-wrapper';
import { Heading } from './extras/heading';
import { ArrowBigUp, BellRing, ChevronDown, Copy, Dot } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    }
  }
}

const UseEffect_useRef: React.FC = () => {

  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [data, setData] = useState<User[] | null>(null);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [count, setCount] = useState<number>(0);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const [text, setText] = useState(() => {
    return localStorage.getItem('text') || '';
  });
  const [increment, setIncrement] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const dataFetching = `useEffect(() => {
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const filteredData = response.data.map(({ id, name, username, email, address }) 
                => ({ id, name, username, email, address }));
                const limitedData = filteredData.slice(0, 10);
                setData(limitedData);
            })
            .catch(error => console.error(error));
    }, []);`

  const eventListener = `useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);`

  const timerIntervals = `useEffect(() => {
        const timer = setInterval(() => setCount(prev => prev + 1), 1000);
        return () => clearInterval(timer);
    }, []);`

  const stateChange = `useEffect(() => {
    if (isSubscribed) {
        console.log
        ('Subscribe');
    } else {
        console.log
        ('Subscribed');
    }
    return () => {
        if (isSubscribed) {
            console.log
            ('Cleaning up');
        }
    };
}, [isSubscribed]);`

  const domManipulation = `useEffect(() => {
    if (focused) {
        const input = 
        document.getElementById
        ('focusInput') 
        as HTMLInputElement;
        input?.focus();
        setFocused(false);
    }
}, [focused]);`

  const stateSync = `useEffect(() => {
            localStorage.setItem
            ('text', text);
        }, [text]);`

  const conditionalEffects = ` useEffect(() => {
            if (increment > 5) {
                setShowModal(true);
            } else {
                setShowModal(false);
            }
        }, [increment]);`

  const toggleCopy = () => {
    setIsCopied(prevState => !prevState);
  };

  // Data Fetching
  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const filteredData = response.data.map(({ id, name, username, email, address }) => ({ id, name, username, email, address }));
        const limitedData = filteredData.slice(0, 10);
        setData(limitedData);
      })
      .catch(error => console.error(error));
  }, []);

  // Event Listener
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Timers and Intervals
  useEffect(() => {
    const timer = setInterval(() => setCount(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const resetCounter = () => {
    setCount(0); // Reset the count to 0
  };

  // Change State
  useEffect(() => {
    if (isSubscribed) {
      console.log('Subscribe');
    } else {
      console.log('Subscribed');
    }
    // Cleanup function to log unsubscribe action
    return () => {
      if (isSubscribed) {
        console.log('Cleaning up: Unsubscribed from channel');
      }
    };
  }, [isSubscribed]);

  const toggleSubscription = () => {
    setIsSubscribed(prevState => !prevState);
  };

  // DOM Manipulations
  useEffect(() => {
    if (focused) {
      const input = document.getElementById('focusInput') as HTMLInputElement;
      input?.focus();
      setFocused(false);
    }
  }, [focused]);

  // State Synchronization
  useEffect(() => {
    localStorage.setItem('text', text);
  }, [text]);

  // Increment Button
  useEffect(() => {
    console.log('The increment is: ', increment);

    return () => {
      console.log('I am being cleaned up!');
    }
  }, [increment])

  // Conditional Side Effects
  useEffect(() => {
    if (increment > 5) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [increment]);

  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading className="">
                <span>How to implement <span className='text-blue-500'>useEffect</span> Showcase</span>
                <br />
                <span className="">Learning the ropes</span>
              </Heading>
            </div>

            <p className="text-base/7 text-gray-600 text-center text-pretty whitespace-nowrap"><span className='text-blue-500 font-semibold'>useEffect</span> is a React Hook that lets you perform side effects in function components. Side effects include data fetching, subscriptions, manual DOM manipulations, event listeners, and more.
              {" "}
              <span className="font-semibold text-gray-700">It replaces the lifecycle methods componentDidMount, componentDidUpdate, componentWillUnmount</span>
              {" "}
              in class components.</p>

            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex-col items-start">
              {[
                { text: "Initial Render (componentDidMount)", description: "Run once after the component mounts" },
                { text: "Re-Renders (componentDidUpdate)", description: "Runs after every re-render if dependencies change." },
                { text: "Cleanup (componentWillUnmount)", description: "If a function is returned inside useEffect, it executes before the component unmounts." },
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Dot className="size-5 shrink-0 text-brand-700" />
                  <span className="text-blue-500 font-semibold">{item.text}</span> - {item.description}
                </li>
              ))}
            </ul>

          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>

          <h1 className='justify-start text-left text-3xl mb-6'>The many uses of <span className='text-blue-500 font-semibold'>useEffect</span>:</h1>
          <div className='rounded-lg bg-[#282c34]'>
            <p className="rounded-lg p-8 mb-6 justify-start text-left text-base/7 text-[#abb2bf] text-pretty whitespace-nowrap">
              <Dot className="inline-block" />
              Imagine you have a toy car that moves when you press a button. But sometimes, you want it to do something special—like honk its horn—whenever you turn it on.
              In React, <span className='text-[#61afef] font-semibold'>useEffect</span> is like telling your toy car:
              {" "}
              <span className="font-semibold text-[#abb2bf]">"Hey, every time I turn you on, make sure you honk the horn!"</span>
              <br />
              Using <span className='text-[#61afef] font-semibold'>useEffect</span> is a way to tell React:
              {" "}
              <span className="font-semibold text-[#abb2bf]">
                "Whenever something important happens, do this special thing!"</span>
              {" "}
              in class components.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className=''>
          <h2 className="text-2xl font-bold p-2 mb-6">Data Fetching </h2>
          <div className='max-h-64 overflow-y-auto border border-gray-300 rounded-lg scrollbar-hide'>
            <table className="table-auto border-collapse border border-gray-300 w-full">
              <thead className='sticky top-0'>
                <tr className='bg-blue-500 text-white'>
                  <th className="border border-gray-300 px-4">ID</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Username</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Address</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map(user => (
                  <tr key={user.id}>
                    <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                    <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}, Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="relative min-h-[25rem] w-full grow mb-6">
            <div className="absolute left-10 right-10 top-10 overflow-hidden rounded-tl-xl rounded-tr-xl bg-gray-900 shadow-2xl">
              <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                  <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                    dataFetching.tsx
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="max-h-[30rem] overflow-x-auto overflow-y-hidden">
                  <CopyToClipboard text={dataFetching}>
                    <button
                      className="bg-transparent absolute top-1 text-opacity-50 right-3 bg-gray-800 text-white p-1 rounded-md shadow-md"
                      onClick={toggleCopy}
                    >
                      <div className='flex items-center'>
                        <Copy className="text-white mr-2 size-4 text-opacity-50" />
                        {isCopied ? 'copied!' : 'copy'}
                      </div>
                    </button>
                  </CopyToClipboard>
                  <div>
                    <SyntaxHighlighter
                      language="typescript"
                      style={{
                        ...oneDark,
                        'pre[class*="language-"]': {
                          ...oneDark['pre[class*="language-"]'],
                          background: "transparent",
                          overflow: "auto",
                          margin: "0",
                        },
                        'code[class*="language-"]': {
                          ...oneDark['code[class*="language-"]'],
                          background: "transparent",
                        },
                      }}
                    >
                      {dataFetching}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-4'>
            <div className="flex items-center px-7 space-x-4 justify-center">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold">[[[Window Width]]]</h2>
                <h2 className='text-2xl text-blue-500'>{width}px</h2>
              </div>
              <div className="mx-8 w-0.5 bg-gray-300 h-52 hidden lg:block"></div>
            </div>


            <div className="relative min-h-[15rem] w-auto grow mb-6 lg:col-span-3 p-4">
              <div className="absolute left-10 right-10 top-10 overflow-hidden rounded-tr-xl rounded-br-xl bg-gray-900 shadow-2xl">
                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                    <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                      eventListener.tsx
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="max-h-[30rem] overflow-x-auto overflow-y-hidden">
                    <CopyToClipboard text={dataFetching}>
                      <button
                        className="bg-transparent absolute top-1 text-opacity-50 right-3 bg-gray-800 text-white p-1 rounded-md shadow-md"
                        onClick={toggleCopy}
                      >
                        <div className='flex items-center'>
                          <Copy className="text-white mr-2 size-4 text-opacity-50" />
                          {isCopied ? 'copied!' : 'copy'}
                        </div>
                      </button>
                    </CopyToClipboard>
                    <div>
                      <SyntaxHighlighter
                        language="typescript"
                        style={{
                          ...oneDark,
                          'pre[class*="language-"]': {
                            ...oneDark['pre[class*="language-"]'],
                            background: "transparent",
                            overflow: "auto",
                            margin: "0",
                          },
                          'code[class*="language-"]': {
                            ...oneDark['code[class*="language-"]'],
                            background: "transparent",
                          },
                        }}
                      >
                        {eventListener}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-4'>
            <div className="relative min-h-[15rem] w-auto grow lg:col-span-3 p-4">
              <div className="absolute left-10 right-10 top-10 overflow-hidden rounded-tl-xl rounded-bl-xl bg-gray-900 shadow-2xl">
                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                    <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                      timerIntervals.tsx
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="max-h-[30rem] overflow-x-auto overflow-y-hidden">
                    <CopyToClipboard text={dataFetching}>
                      <button
                        className="bg-transparent absolute top-1 text-opacity-50 right-3 bg-gray-800 text-white p-1 rounded-md shadow-md"
                        onClick={toggleCopy}
                      >
                        <div className='flex items-center'>
                          <Copy className="text-white mr-2 size-4 text-opacity-50" />
                          {isCopied ? 'copied!' : 'copy'}
                        </div>
                      </button>
                    </CopyToClipboard>
                    <div>
                      <SyntaxHighlighter
                        language="typescript"
                        style={{
                          ...oneDark,
                          'pre[class*="language-"]': {
                            ...oneDark['pre[class*="language-"]'],
                            background: "transparent",
                            overflow: "auto",
                            margin: "0",
                          },
                          'code[class*="language-"]': {
                            ...oneDark['code[class*="language-"]'],
                            background: "transparent",
                          },
                        }}
                      >
                        {timerIntervals}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center'>
              <div className="flex items-center px-7 space-x-4">
                <div className="mx-8 w-0.5 bg-gray-300 h-52 hidden lg:block"></div>
                <div className='flex-col'>
                  <h2 className="text-2xl font-bold">Counter</h2>
                  <div className="flex items-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-tl-full rounded-bl-full" onClick={resetCounter}>Clear</button>
                    <div className="border px-4 py-2">{count}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </MaxWidthWrapper>
        <hr className="mt-10 border-t-2 border-gray-300" />
      </section>

      <section>
        <MaxWidthWrapper className="mt-10 flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <Heading>More Abstract <span className='text-blue-500 font-semibold'>useEffects</span></Heading>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">

            {/* first bento grid element */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Watch for State Change
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    <span className='text-blue-500 font-semibold'>useEffect</span> is used to watch the <span className='text-pink-400 font-semibold'>isSubscribed</span> state and perform actions whenever it changes.
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 right-15 top-10 overflow-hidden bg-gray-900 shadow-2xl max-lg:rounded-tr-[calc(2rem+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          stateChange.js
                        </div>
                      </div>
                    </div>

                    <div className="overflow-hidden">
                      <div className="max-h-[30rem]">
                        <SyntaxHighlighter
                          language="typescript"
                          style={{
                            ...oneDark,
                            'pre[class*="language-"]': {
                              ...oneDark['pre[class*="language-"]'],
                              background: "transparent",
                              overflow: "hidden",
                            },
                            'code[class*="language-"]': {
                              ...oneDark['code[class*="language-"]'],
                              background: "transparent",
                            },
                          }}
                        >
                          {stateChange}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>

            {/* second bento grid element */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="justify-start text-left px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="text-center text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">Watch the click!</p>

                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    <Dot className="inline-block" />
                    Logs messages when <span className='text-pink-400 font-semibold'>isSubscribed</span> updates.
                    <br />
                    <Dot className="inline-block" />
                    A cleanup function logs an unsubscribe message before state changes or when unmounting.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <button
                    onClick={toggleSubscription}
                    className={`flex items-center rounded-full px-4 py-2 mt-4 text-white ${isSubscribed ? 'bg-gray-600 hover:bg-gray-700' : 'bg-pink-400 hover:bg-pink-500'} transition`}
                  >
                    {isSubscribed && <BellRing className="mr-2 size-5" />} {isSubscribed ? 'Subscribed' : 'Subscribe'} {isSubscribed && <ChevronDown className="ml-2 size-5" />}
                  </button>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]" />
            </div>

            {/* third bento grid */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">Element too complicated for user to navigate?</p>

                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">Focus on any element immediately for user convenience.</p>
                </div>

                <div className="mt-4 flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <button className="bg-blue-500 text-white px-4 py-2 flex-shrink-0 rounded-full" onClick={() => setFocused(prev => !prev)}>Focus Input</button>
                  <input id="focusInput" className="rounded-full mt-4 border px-4 py-2" placeholder="Focus me" />
                </div>

              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
            </div>

            {/* fourth bento grid */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Focus Input
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    This <span className='text-blue-500 font-semibold'>useEffect</span> focuses the input when focused becomes true.
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          domManipulation.js
                        </div>
                      </div>
                    </div>

                    <div className="overflow-hidden">
                      <div className="max-h-[30rem]">
                        <SyntaxHighlighter
                          language="typescript"
                          style={{
                            ...oneDark,
                            'pre[class*="language-"]': {
                              ...oneDark['pre[class*="language-"]'],
                              background: "transparent",
                              overflow: "hidden",
                            },
                            'code[class*="language-"]': {
                              ...oneDark['code[class*="language-"]'],
                              background: "transparent",
                            },
                          }}
                        >
                          {domManipulation}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
          <div className='mt-10'>
            <div className='flex items-center justify-center'>
              <h2 className="text-2xl font-bold p-2">Increment: </h2>
              <h2 className='text-2xl'>{increment}</h2>
            </div>
            <button
              className='rounded-tl-lg rounded-bl-lg bg-pink-400 text-white px-4 py-2'
              onClick={() => setIncrement(increment - 1)}
              disabled={increment <= 0}
            >
              Decrement
            </button>
            <button
              className='rounded-tr-lg rounded-br-lg bg-blue-500 text-white px-4 py-2'
              onClick={() => setIncrement(increment + 1)}
            >
              Increment
            </button>

            {increment > 5 && (<div className='mt-4'>
              <p className="mb-6 justify-center text-center text-base/7 text-[#4b5563] text-pretty whitespace-nowrap">
                <Dot className="inline-block" />
                You can see how <span className='text-blue-500 font-semibold'>useEffect</span> could be used to bar the user from a function on your website without some requirements - Be Creative!
                <br />
                You can tell the user:
                {" "}
                <span className="font-semibold text-[#4b5563]">"Hey, that's too much of one item in your cart, You don't need fifty RTX 4090!"</span>
              </p>
            </div>)}
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
          <div className={`${increment > 5 ? 'opacity-0 pointer-events-none' : ''}`}>
            <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2'>
              <div className='p-4 overflow-auto max-h-[30rem]'>
                <div className="relative min-h-[25rem] w-full grow mb-6">
                  <div className="absolute bottom-0 left-10 right-10 top-10 overflow-hidden rounded-lg bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          conditionalEffects.tsx
                        </div>
                      </div>
                    </div>

                    <div className="overflow-hidden">
                      <div className="max-h-[30rem]">
                        <SyntaxHighlighter
                          language="typescript"
                          style={{
                            ...oneDark,
                            'pre[class*="language-"]': {
                              ...oneDark['pre[class*="language-"]'],
                              background: "transparent",
                              overflow: "hidden",
                            },
                            'code[class*="language-"]': {
                              ...oneDark['code[class*="language-"]'],
                              background: "transparent",
                            },
                          }}
                        >
                          {conditionalEffects}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-4 overflow-auto max-h-[30rem] scrollbar-hide'>
                <div className="relative min-h-[25rem] w-full grow mb-14">
                  <div className="absolute bottom-0 left-10 right-10 top-10 overflow-hidden rounded-lg bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          stateSync.tsx
                        </div>
                      </div>
                    </div>

                    <div className="overflow-hidden">
                      <div className="max-h-[30rem]">
                        <SyntaxHighlighter
                          language="typescript"
                          style={{
                            ...oneDark,
                            'pre[class*="language-"]': {
                              ...oneDark['pre[class*="language-"]'],
                              background: "transparent",
                              overflow: "hidden",
                            },
                            'code[class*="language-"]': {
                              ...oneDark['code[class*="language-"]'],
                              background: "transparent",
                            },
                          }}
                        >
                          {stateSync}
                        </SyntaxHighlighter>

                        <div className={`mt-10 ${increment > 5 ? 'opacity-50 pointer-events-none' : ''}`}>
                          <h2 className="text-2xl text-[#61afef] font-semibold mb-4">State Synchronization:</h2>
                          <input
                            className="border px-4 py-2 rounded-lg bg-slate-600 border-slate-600 placeholder-white placeholder-opacity-50 text-white focus:border-white focus:outline-none"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="type something"
                          />
                        </div>


                      </div>
                    </div>
                  </div>
                </div>

                <p className="justify-center text-center text-base/7 text-[#4b5563] text-pretty whitespace-nowrap">
                  <Dot className="inline-block" />
                  You can see how <span className='text-blue-500 font-semibold'>useEffect</span> automatically saves the text state to local storage whenever it changes.
                  <br />
                  This is REALLY useful because imagine if you're doing a long survey and the WiFi shuts down, you will lose all progress unless you use this function
                  {" "}
                  <span className="font-semibold text-[#4b5563]">This ensures that user input is not lost when they refresh the page or navigate away.</span>
                </p>
              </div>

            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}

export default UseEffect_useRef;
