import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { NotesCardProps } from "../../interface/notesCardProps";
import { Edit, DeleteForever } from '@mui/icons-material';
import EditModal from "./EditNote";

export default function NotesCard({ id, title, content }: NotesCardProps) {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const onDelete = async (id: string) => {
        const notesRef = doc(db, 'notes', id);
        await deleteDoc(notesRef);
    };

    const opendModal = () => {
        setModalOpen(true);
        console.log('open modal')
    }


    return (
        <>
            <article className="w-1/3 h-fit bg-black p-2 rounded-md shadow-md flex-grow lg:w-72">
                <span className="font-bold text-green">{title}</span>
                <p className="font-thin">{content}</p>
                <div className="mt-4 flex items-end justify-end space-x-2">
                    <Edit data-testid="Edit" className="text-green p-1 cursor-pointer" onClick={opendModal} />
                    <DeleteForever data-testid="DeleteForever" className="text-gray-500 p-1 cursor-pointer" onClick={() => onDelete(id)} />
                </div>

            </article>
            {isModalOpen && <EditModal />}
        </>
    );
};