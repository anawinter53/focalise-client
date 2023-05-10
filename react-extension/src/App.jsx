import {Routes, Route} from 'react-router-dom'
import * as Pages from './pages/index'
import { UserProvider } from "./contexts/user";
import { ThemeProvider } from "./contexts/themes";
import * as Layouts from './layouts'

function App() {
  return (
    <UserProvider>  
      <ThemeProvider>
        <Routes>
          <Route element={<Layouts.Header/>}>
            <Route path="/" element={<Pages.HomePage />}/>
            <Route path='/login' element={<Pages.LoginPage />}/>
            <Route path='/loggedin' element={<Pages.LoggedInPage />}/>
            <Route path='/logout' element={<Pages.LogoutPage />}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
