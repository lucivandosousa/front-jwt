import React, { useEffect, useState } from 'react'
import api from '../../services/api'

export default function Usuarios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadUsers() {
    try {
      const { data } = await api.get('/users', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setUsers(data);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError("Falha ao carregar usuários...")
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  {
    if (loading) {
      return <p className='text-2xl text-center'>Carregando...</p>
    }
  }

  {
    if (error) {
      return <p className='text-2xl text-center'>{error}</p>
    }
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Usuários</h2>
      {users.map(user => (
        <div
          key={user.id}
          className="border border-gray-300 p-4 mb-4 rounded-md shadow-md"
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}
