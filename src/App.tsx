import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import UnionTypes_Enum from './pages/typeScript/unionTypes_enum/UnionTypes_Enum'
import Home from './pages/Home/Home'
import UseEffectUseRef from './pages/reactHook/useEffect_useRef/useEffect_useRef'
import UseReducer from './pages/reactHook/useReducer/UseReducer'
import UseMemoAndUseCallback from './pages/reactHook/useMemo_useCallback/UseMemo_UseCallback'
import UseState_Prop from './pages/reactHook/useState_prop/UseState_Prop'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/useEffect_useRef' element={<UseEffectUseRef />}></Route>
          <Route path='/useReducer' element={<UseReducer/>}></Route>
          <Route path='/UnionType_Enum' element={<UnionTypes_Enum/>}></Route>
          <Route path='/useMemo_useCallback' element={<UseMemoAndUseCallback/>}></Route>
          <Route path='/useState_prop' element={<UseState_Prop/>}></Route>
        </Routes>     

    </>
  )
}

export default App
