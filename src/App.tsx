
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import UnionTypes_Enum from './pages/typeScript/unionTypes_enum/UnionTypes_Enum'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='/Union types_Enum' element={<UnionTypes_Enum/>}></Route>
          </Route>
        </Routes>     
    </>
  )
}

export default App
