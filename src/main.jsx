import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { ThemeProvider } from './contexts/themes'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Router>
)
