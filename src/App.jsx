import { lazy, Suspense, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
//import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import PrivateRouter from './components/PrivateRouter'
const Profile = lazy(() => import('./pages/Profile'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={
          <PrivateRouter>
            <Suspense fallback={<div>Loading</div>}>
              <Profile />
            </Suspense>
          </PrivateRouter>
        }></Route>
     </Routes>
    </>
  )
}

export default App
