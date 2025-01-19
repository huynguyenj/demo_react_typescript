import './UseReducer.css'
import React from 'react'
import { useReducer, useRef } from 'react'


// 1. Init state
const initState = {
  job: '',
  jobs: []
}

// 2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload: string) => {
  return { 
    type: SET_JOB, 
    payload 
  }
}

const addJob = (payload: any) => {
  return { 
    type: ADD_JOB, 
    payload 
  }
}

const deleteJob = (payload: any) => {
  return { 
    type: DELETE_JOB, 
    payload 
  }
}
// 3. Reducer function
const reducer = (state: any,action: { type: any; payload: any }) => {
  console.log('Action: ', action)
  console.log('Prev State: ', state)
  let newState
  switch(action.type){
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)
      newState = {
        ...state,
        jobs: newJobs
      }
      break;
    default:
      throw new Error('Invalid action type')
  }
  console.log('New State: ', newState)
  return newState;
}

// 4. Dispatch

const UseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { job, jobs } = state;
  const handleSubmit = () => {
    dispatch(setJob(''))
    dispatch(addJob(job))
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (   
    <div className="box">
        <h1 className="title">To Do</h1>
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
        <input className="input"
          value={job}
          ref={inputRef}
          placeholder="Enter the job..."
          onChange={e => {
              dispatch(setJob(e.target.value))
            }
          }
        />
        <button onClick={handleSubmit} className='button'>Add</button>
        </div>
        <ul>
          {jobs.map((job: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
            <li className="list" key={index}>
              {job} <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
            </li>
          ))}
          
        </ul>
    </div>

  )
}

export default UseReducer