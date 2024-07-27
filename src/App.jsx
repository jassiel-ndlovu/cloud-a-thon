import Home from "./interface/Home"
import { Routes, Route } from 'react-router-dom'
import SignIn from "./interface/SignIn"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      
    </>
  )
}

export default App
