import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { EditNoteProps } from "../../interface/editNoteProps";

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

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50">
            <div className="w-2/3 h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 bg-black rounded-md p-2 backdrop-sepia">
                <form className="flex flex-col items-end justify-between w-full bg-black m-1 mt-4 p-2 rounded-md shadow-md">
                    <input
                        type="text"
                        value={editedTitle}
                        className="w-full bg-transparent"
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <textarea
                        value={editedContent}
                        className="w-full bg-transparent"
                        onChange={(e) => setEditedContent(e.target.value)}
                    />
                    <button onClick={closeModal}>Cancel</button>
                    <button className="p-2" onClick={handleDoneClick}>
                        {<DoneIcon className="text-green" />}
                    </button>
                </form>
            </div>
        </div>
    );
}
