import Home from "./interface/Home"
import { Routes, Route } from 'react-router-dom'
import SignIn from "./interface/SignIn"
import SignUp from "./interface/SignUp"
import StudentDashboard from "./interface/StudentDashboard"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
      </Routes>
      
    </>
  )
}

export default App
