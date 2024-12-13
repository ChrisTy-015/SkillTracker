"use client"; // Indique que ce fichier est un composant côté client

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Hook pour la navigation

export default function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter(); // Initialisation du hook useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Nom:", name, "Email:", email);
    setName('');
    setEmail('');
  };

  const handleRedirect = () => {
    router.push('/login'); // Redirige vers la page de connexion
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-center">
      {/* Barre supérieure */}
      <nav className="absolute top-0 left-0 w-full bg-white shadow-md px-8 py-4 flex items-center justify-between">
       
        <button
          onClick={handleRedirect}
          className="text-sm font-medium text-blue-900 border border-blue-900 rounded-full px-4 py-2 hover:bg-blue-900 hover:text-white transition"
        >
          Déjà inscrit ? Connectez-vous !
        </button>
      </nav>

      {/* Formulaire */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Créer un utilisateur</h1>
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
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}
