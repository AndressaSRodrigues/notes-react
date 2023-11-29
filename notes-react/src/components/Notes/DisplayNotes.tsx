import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from '../../firebase-config';
import { useEffect, useState } from "react";
import { Notes } from "../../interface/notes";

export default function DisplayNotes() {
    const notesCollectionRef = collection(db, 'notes');
    const notesQuery = query(notesCollectionRef, orderBy('timestamp', 'desc'));
    const [notes, setNotes] = useState<Notes[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(notesQuery, (snapshot) => {
            setNotes(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    title: doc.data().title,
                    content: doc.data().content,
                    timestamp: doc.data().timestamp,
                }))
            );
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            <h2>All Notes</h2>
            {notes.map((note) => (
                <div key={note.id}>
                    <span>{note.title}</span>
                    <p>{note.content}</p>
                </div>
            ))}
        </>
    );
};
