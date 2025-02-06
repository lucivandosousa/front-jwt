import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function Cadastro() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    try {
      const { data } = await api.post('/login', { email, password });

      localStorage.setItem('token', data.token);

      emailRef.current.value = '';
      passwordRef.current.value = '';

      navigate('/users');
    } catch (error) {
      toast.error('Erro ao fazer login!');
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          ref={emailRef}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="password"
          placeholder="Senha"
          ref={passwordRef}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400 transition">Login</button>
      </form>
      <Link to="/" className="text-blue-700 mt-4 block text-center hover:underline transition">Não tem uma conta? Faça o seu cadastro</Link>
    </div>
  )
}

