import { useEffect } from 'react';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CreateNote from '../components/Notes/CreateNote';
import DisplayNotes from '../components/Notes/DisplayNotes';

export default function Notes() {
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log(user)
            if (!user) {
                navigate('/');
            }
        });

        return () => {
            unsubscribe();
        };
    }, [navigate]);

    return (
        <>
            <Navbar />
            <div className="p-2 lg:px-20">
                <CreateNote />
                <DisplayNotes />
            </div>
        </>
    );
}
