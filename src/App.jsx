import * as Pages from './pages'
import {Routes, Route} from 'react-router-dom'
import * as Layouts from './layouts'
import { UserProvider } from "./contexts/user";
import { Notifications } from 'react-push-notification';
import { useEffect } from 'react';
import { useTheme } from './contexts';

function App() {
  const { theme } = useTheme()
  useEffect(() => { document.body.style.backgroundColor = `${theme.primColor}` }, )

  return (
    <UserProvider>
      <Notifications />
      <Routes>
        <Route element={<Layouts.Header/>}>
            <Route path="/" element={localStorage.getItem('token') ? <Pages.HomePage /> : <Pages.HomePageNLI />}/>
            <Route path='/sensory' element={<Pages.SensoryPage />}/>
            <Route path="/profile" element={<Pages.ProfilePage />}/>
            <Route path='/register' element={<Pages.RegisterPage />}/>
            <Route path='/login' element={<Pages.LoginPage />}/>
            <Route path='/logout' element={<Pages.LogoutPage />}/>
            <Route path='/bodydouble' element={<Pages.BodyDouble />}/>
            <Route path='/tasks' element={<Pages.TasksPage />}/>
            <Route path='/workplan' element={<Pages.NotificationPage />}/>
        </Route>
      </Routes>
    </UserProvider>
  )
}

export default App

