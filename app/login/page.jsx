import LoginForm from './LoginForm';
import Link from 'next/link';


export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
            <p>
                Pas encore de compte? <Link href="/signup" className="text-blue-500 hover:underline">Inscrivez-vous ici</Link>
            </p>
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