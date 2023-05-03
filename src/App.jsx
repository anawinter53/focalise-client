import * as Pages from './pages'
import {Routes, Route} from 'react-router-dom'
import * as Layouts from './layouts'
import { useTheme } from './contexts'


function App() {
  const { theme } = useTheme()
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

