import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from '../../firebase-config';
import { useEffect, useState } from "react";
import { Notes } from "../../interface/notes";
import NotesCard from "./NotesCard";

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
            <div className="flex flex-wrap justify-center gap-2 p-1">
            {notes.map((note) => (
                <NotesCard key={note.id} title={note.title} content={note.content} />
            ))}
            </div>
        </>
    );
};
