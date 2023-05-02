import * as Pages from './pages'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
          <Route path="/" element={<Pages.HomePage />}/>
    </Routes>
  )
}

export default App
