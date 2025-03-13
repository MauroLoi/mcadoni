import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Carni from './pages/Carni'
import Preparati from './pages/Preparati'
import SuOrdinazione from './pages/SuOrdinazione'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Carni />}/>
        <Route path='/preparati' element={<Preparati />}/>
        <Route path='/suordinazione' element={<SuOrdinazione/>}/>
      </Routes>
    </>
  )
}

export default App
