"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkUser } from '../api/connexion/route'; 

export default function LoginForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await checkUser({ name, email });
      if (user) {
        router.push('/taskManager');
      } else {
        setError('Nom ou email incorrect.');
      }
    } catch (err) {
      console.error(err);
      setError('Une erreur est survenue lors de la connexion.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Se connecter</button>
      </form>
      {error && <p>{error}</p>} {/* OUPS il y a une erreur */}
    </div>
  );
}