import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase-config";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../index.css';

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

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'link'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'color': [] }],
    ];

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
                        className="w-full bg-transparent p-3"
                    />
                    <ReactQuill
                        value={content}
                        onChange={(value) => setContent(value)}
                        modules={{
                            toolbar: toolbarOptions
                        }}
                    />
                    <div className="mt-4 flex justify-end space-x-2">
                        <button
                            type="submit"
                            className="bg-transparent">{<AddBoxIcon className="text-green" />}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
};
