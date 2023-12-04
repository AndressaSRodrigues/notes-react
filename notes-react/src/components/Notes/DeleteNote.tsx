import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { DeleteNoteProps } from "../../interface/deleteNoteProps";

export default function DeleteNote({ id, onCancel }: DeleteNoteProps) {
    const deleteNote = async (id: string) => {
        const notesRef = doc(db, 'notes', id);
        await deleteDoc(notesRef);
    };

    const cancelDeleteNote = () => {
        onCancel();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50">
            <div className="w-86 h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 bg-black rounded-md p-2 backdrop-sepia">
                <div className="flex flex-col p-4">
                    <span className="text-lg">Would you like to delete this note?</span>
                    <div className="flex flex-row justify-end mt-4 text-lg">
                        <button className='text-gray-500 mr-6 hover:bg-neutral-900 rounded-md p-2' onClick={cancelDeleteNote}>No</button>
                        <button className='text-green hover:bg-neutral-900 rounded-md p-2' onClick={() => deleteNote(id)}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
