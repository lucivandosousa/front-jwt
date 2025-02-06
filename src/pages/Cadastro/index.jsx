import { useRef } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function Cadastro() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    try {
      await api.post('/register', { name, email, password });
      nameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
      toast.success('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          ref={nameRef}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
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
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400 transition">Cadastrar</button>
      </form>
      <Link to="/login" className="text-blue-700 mt-4 block text-center hover:underline transition">Já tem uma conta? Faça login</Link>
    </div>
  )
}
