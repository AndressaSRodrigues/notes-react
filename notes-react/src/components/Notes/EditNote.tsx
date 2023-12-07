import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { EditNoteProps } from "../../interface/editNoteProps";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../index.css';

export default function EditModal({ id, onClose, title, content }: EditNoteProps) {
    const [editedTitle, setEditedTitle] = useState<string>(title || '');
    const [editedContent, setEditedContent] = useState<string>(content || '');

    const closeModal = () => {
        onClose();
    };

    const handleDoneClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const notesRef = doc(db, 'notes', id);
            await updateDoc(notesRef, {
                title: editedTitle,
                content: editedContent,
            });
            onClose();
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'link'],
        [{ 'list': 'bullet' }],
        [{ 'color': [] }],
    ];

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50">
            <div className="w-2/3 h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 bg-black rounded-md p-2 backdrop-sepia">
                <form className="flex flex-col items-end justify-between w-full bg-black m-1 mt-4 p-2 rounded-md shadow-md">
                    <input
                        type="text"
                        value={editedTitle}
                        className="w-full bg-transparent p-3"
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <ReactQuill
                        value={editedContent}
                        className="w-full bg-transparent"
                        onChange={(value) => setEditedContent(value)}
                        modules={{
                            toolbar: toolbarOptions
                        }}
                    />
                    <div className="flex flex-row gap-5 text-sm">
                        <button className="text-gray-500 hover:bg-neutral-900 rounded-md p-2" onClick={closeModal}>Cancel</button>
                        <button className="hover:bg-neutral-900 rounded-md p-2" onClick={handleDoneClick}>
                            {<DoneIcon className="text-green" />}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
