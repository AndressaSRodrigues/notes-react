import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase-config";

export default function CreateNote() {
    const notesCollectionRef = collection(db, 'notes');
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const addNote = async (title: string, content: string) => {
        try {
            await addDoc(notesCollectionRef, { title, content, timestamp: serverTimestamp() });
        } catch (error){
            console.log(error);
        }
    };

    const handleAddNote = (event: any) => {
        event.preventDefault();
        addNote(title, content)
    };

    return (
        <>
            <form onSubmit={handleAddNote}>
                <input
                    type="text"
                    placeholder="Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text-area"
                    placeholder="Enter your note here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </>
    )
};
