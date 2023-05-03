import * as Pages from './pages'
import {Routes, Route} from 'react-router-dom'
import * as Layouts from './layouts'

function App() {
  return (
    <Routes>
      <Route element={<Layouts.Header/>}>
          <Route  path="/" element={<Pages.HomePage />}/>
          <Route path='/sensory' element={<Pages.SensoryPage />}/>
      </Route>
    </Routes>
  )
}

export default App

