import * as Pages from './pages'
import {Routes, Route} from 'react-router-dom'
import * as Layouts from './layouts'
import { UserProvider } from "./context";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route element={<Layouts.Header/>}>
            <Route  path="/" element={<Pages.HomePage />}/>
            <Route path='/sensory' element={<Pages.SensoryPage />}/>
            <Route path='/register' element={<Pages.RegisterPage />}/>
            <Route path='/login' element={<Pages.LoginPage />}/>
        </Route>
      </Routes>
    </UserProvider>
  )
}

export default App
