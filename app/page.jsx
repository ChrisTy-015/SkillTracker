"use client"; 
import { useRouter } from "next/navigation";
import Dashboard from './components/Dashboard';
import Skills from './components/Skills';
import Goals from './components/Goals';
import Reminder from './components/Reminder';
import Notes from './components/Notes';
import Deconnexion from './components/Deconnexion';


export default function Home() {
    const router = useRouter();

    const handleClickLogin = () => {
        router.push('/login'); 
    };


    return (
        <>
            <button onClick={handleClickLogin} className="btn btn-primary">
                Login
            </button>
            <div className="app">
            <div className="sidebar">
                <div className="style_img">
                <h3>Pedro</h3>
                </div>
                <ul>
                    <li>
                        <Dashboard />
                    </li>
                    <li>
                        <Skills />
                    </li>
                    <li>
                        <Goals />
                    </li>
                    <li>
                        <Reminder />
                    </li>
                    <li>
                        <Notes />
                    </li>
                </ul>
            </div>
            <div className="content">
                
                <div className="textM"><h1>SkillTracer Manager</h1></div>
                <p>Gérer votre temps vous êtes le patron</p>
                <Deconnexion />
            </div>

        </div>
        </>
        
    );
}