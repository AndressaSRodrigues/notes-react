import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Notes from './pages/Notes'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='notes' element={<Notes />} />
    </Routes>
  )
}

export default App
