"use client";

import { useState } from 'react';
import { createUser } from '../api/mon_api/route'; // Importez votre action serveur

export default function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await createUser({ name, email });
    console.log('Utilisateur créé:', user);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="absolute center">
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
        <button type="submit">Ajouter</button>
      </form>
      
    </div>
  );
}