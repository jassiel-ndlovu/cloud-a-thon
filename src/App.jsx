import Home from "./interface/Home"
import { Routes, Route } from 'react-router-dom'
import StudentSignIn from "./interface/StudentSignIn"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutor-sign-in" element={<StudentSignIn />} />
      </Routes>
      
    </>
  )
}

export default App
