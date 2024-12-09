// src/app/signup/page.jsx
import UserForm from './userForm';
import Link from 'next/link';

export default function Signup() {
  return (
    <div>
      <h1>Inscription Utilisateur</h1>
      <p>
        Déjà inscrit? <Link href="/login" className="text-blue-500 hover:underline">Connectez-vous!</Link>
      </p>
      <UserForm />
      
      <div className="absolute top-6 right-6">
        <Link href="/">
          <button>
            SkillTracker
          </button>
        </Link>
      </div>
    </div>
  );
}