"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkUser } from '../api/connexion/route'; 

export default function LoginPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await checkUser({ name, email });
      if (user) {
        router.push('/taskManager'); // Redirection vers Task Manager si la connexion est réussie
      } else {
        setError('Nom ou email incorrect.');
      }
    } catch (err) {
      console.error(err);
      setError('Une erreur est survenue lors de la connexion.');
    }
  };

  const handleRedirectToSignup = () => {
    router.push('/signup'); // Redirection vers la page d'inscription
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-center">
      {/* Barre supérieure */}
      <nav className="absolute top-0 left-0 w-full bg-white shadow-md px-8 py-4 flex items-center justify-between">
        
        <button
          onClick={handleRedirectToSignup}
          className="text-sm font-medium text-blue-900 border border-blue-900 rounded-full px-4 py-2 hover:bg-blue-900 hover:text-white transition"
        >
          Pas encore inscrit ? Créez un compte !
        </button>
      </nav>

      {/* Formulaire de connexion */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Connexion</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition"
          >
            Se connecter
          </button>
        </form>
        {error && (
          <p className="text-red-500 text-sm mt-4">{error}</p>
        )} {/* Message d'erreur si la connexion échoue */}
      </div>
    </div>
  );
}
