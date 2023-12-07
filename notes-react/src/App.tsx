import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Notes from './pages/Notes'
import CreateAccount from './pages/CreateAccount'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='main' element={<Notes />} />
      <Route path='create-account' element={<CreateAccount />} />
    </Routes>
  )
}

export default App
