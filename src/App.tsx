import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import LandingPage from './pages/LandingPage'
import { ThemeProvider } from './state-management/ThemeContext'

function App() {
  
  return (
    <>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path='dashboard' element={<DashboardPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

    </>
  )
}

export default App
