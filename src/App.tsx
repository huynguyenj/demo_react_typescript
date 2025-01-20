import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/navbar/Navbar'
import UnionTypes_Enum from './pages/typeScript/unionTypes_enum/UnionTypes_Enum'
import Home from './pages/Home/Home'
import UseEffectUseRef from './pages/reactHook/useEffect_useRef/useEffect_useRef'
import UseReducer from './pages/reactHook/useReducer/UseReducer'
import UseMemoAndUseCallback from './pages/reactHook/useMemo_useCallback/UseMemo_UseCallback'
import UseContext from './pages/reactHook/useContext/UseContext'
import UseState_Prop from './pages/reactHook/useState_prop/UseState_Prop'
import UseLayoutEffectExample from './pages/reactHook/useLayoutEffect/UseLayoutEffect'
import UseImperativeHandle from './pages/reactHook/useImperativeHandle/UseImperativeHandle'

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
          <Route path="/useContext" element={<UseContext />} />
          <Route path='/useState_prop' element={<UseState_Prop/>}></Route>
          <Route path='/useLayoutEffect' element={<UseLayoutEffectExample/>}></Route>
          <Route path='useImperativeHandle' element={<UseImperativeHandle/>}></Route>
          
        </Routes>     

    </>
  )
}

export default App
