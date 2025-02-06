import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import Usuarios from "./pages/Usuarios"
import { Flip, ToastContainer } from "react-toastify"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Usuarios />} />
      </Routes>

      <ToastContainer
        autoClose={3000}
        transition={Flip}
      />
    </BrowserRouter>
  )
}

export default App
