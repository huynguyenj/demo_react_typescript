
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UseContext from './pages/reactHook/useContext/UseContext'

function App() {

  return (
    <>
      <Routes>         
          <Route path="/useContext" element={<UseContext />} />
        </Routes>     
    </>
  )
}

export default App
