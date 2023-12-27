import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db, auth } from '../../firebase-config';
import { useEffect, useState } from "react";
import { Notes } from "../../interface/notes";
import NotesCard from "./NotesCard";
import Footer from "../Footer";

export default function DisplayNotes() {
    const notesCollectionRef = collection(db, 'notes');

    const userId = auth.currentUser?.uid;
    const notesQuery = userId
        ? query(
              notesCollectionRef,
              where('userId', '==', userId),
              orderBy('timestamp', 'desc')
          )
        : query(notesCollectionRef);

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
    }, [notesQuery]);

    return (
        <>
            {notes.length === 0 ? (
                <div className="text-center p-4">
                    <p>You haven't added any notes yet.</p>
                </div>
            ) : (
                <div className="flex flex-wrap justify-center gap-2 p-1">
                    {notes.map((note) => (
                        <NotesCard key={note.id} id={note.id} title={note.title} content={note.content} />
                    ))}
                </div>
            )}
            <Footer />
        </>
    );
}

