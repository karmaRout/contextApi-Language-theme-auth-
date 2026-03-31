import { lazy, Suspense, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
//import Profile from './pages/Profile'
//import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import PrivateRouter from './components/PrivateRouter'
import Loading from './components/Loading'
const Profile = lazy(() => 
  new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(import('./pages/Profile'))
    }, 4000)
  })
)
const Dashboard = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/Dashboard')), 4000);
  })
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
     <Routes>
        <Route path="/" element={<Home />}></Route>
        
          <Route  path="/dashboard" 
            element={
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            }>
          </Route>
        
        <Route path="/profile" element={
          <PrivateRouter>
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          </PrivateRouter>
        }></Route>
     </Routes>
    </>
  )
}

export default App
