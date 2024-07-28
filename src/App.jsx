import Home from "./interface/Home"
import { Routes, Route } from 'react-router-dom'
import SignIn from "./interface/SignIn"
import SignUp from "./interface/SignUp"
import StudentDashboard from "./interface/StudentDashboard"
import CoursePreview from "./interface/CoursePreview"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/course_preview" element={<CoursePreview />} />
      </Routes>
      
    </>
  )
}

export default App
