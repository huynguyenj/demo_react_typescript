import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import UnionTypes_Enum from './pages/typeScript/unionTypes_enum/UnionTypes_Enum'
import Home from './pages/Home/Home'
import UseReducer from './pages/reactHook/useReducer/UseReducer'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}>
           
          </Route>
          <Route path='useReducer' element={<UseReducer/>}></Route>
          <Route path='/UnionType_Enum' element={<UnionTypes_Enum/>}></Route>
        </Routes>     

    </>
  )
}

export default App
