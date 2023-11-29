import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase-config";
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function CreateNote() {
    const notesCollectionRef = collection(db, 'notes');
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const addNote = async (title: string, content: string) => {
        try {
            await addDoc(notesCollectionRef, { title, content, timestamp: serverTimestamp() });
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddNote = (event: any) => {
        event.preventDefault();
        addNote(title, content);
        setTitle('');
        setContent('');
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <form onSubmit={handleAddNote} className="w-full bg-black m-1 mt-4 p-2 rounded-md shadow-md">
                    <input
                        type="text"
                        placeholder="Title..."
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full bg-transparent"
                    />
                    <textarea
                        placeholder="Enter your note here..."
                        value={content}
                        required
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full bg-transparent"
                    />
                    <div className="mt-4 flex justify-end space-x-2">
                        <button
                            type="submit"
                            className="bg-transparent">{<AddBoxIcon className="text-gray-500" />}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
};
