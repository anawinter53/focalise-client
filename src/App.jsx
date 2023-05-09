import * as Pages from './pages'
import {Routes, Route} from 'react-router-dom'
import * as Layouts from './layouts'
import { UserProvider } from "./contexts/user";

function App() {

  return (
    <UserProvider>
      <Routes>
        <Route element={<Layouts.Header/>}>
            <Route  path="/" element={<Pages.HomePage />}/>
            <Route path='/sensory' element={<Pages.SensoryPage />}/>
            <Route path="/profile" element={<Pages.ProfilePage />}/>
            <Route path='/register' element={<Pages.RegisterPage />}/>
            <Route path='/login' element={<Pages.LoginPage />}/>
            <Route path='/logout' element={<Pages.LogoutPage />}/>
            <Route path='/bodydouble' element={<Pages.BodyDouble />}/>
            <Route path='/tasks' element={<Pages.TasksPage />}/>
            <Route path='/notifications' element={<Pages.NotificationPage />}/>
        </Route>
      </Routes>
    </UserProvider>
  )
}

export default App

