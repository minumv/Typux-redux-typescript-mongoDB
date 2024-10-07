import { BrowserRouter as Router,Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { UserLogin } from "./components/UserLogin"
import { AdminLogin } from "./components/AdminLogin"
import Dashboard from "./components/Dashboard"
import { SignUp } from "./components/Signup"
import { Profile } from "./components/Profile"

const App = () => {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<UserLogin />}/>      
      <Route path='/signup' element={<SignUp />}/>      
      <Route path='/adminlogin' element={<AdminLogin />}/>
      <Route path='/dashboard' element={<Dashboard />}/>      
      <Route path='/profile' element={<Profile />}/>
    </Routes>
    </Router>
    </>
  )
}

export default App