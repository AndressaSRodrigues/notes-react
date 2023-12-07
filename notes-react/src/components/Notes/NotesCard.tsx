import { useState } from "react";
import { NotesCardProps } from "../../interface/notesCardProps";
import { Edit, DeleteForever } from '@mui/icons-material';
import EditModal from "./EditNote";
import DeleteNote from "./DeleteNote";

export default function NotesCard({ id, title, content }: NotesCardProps) {
    const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

    const opendEditModal = () => {
        setEditModalOpen(true);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
    };

    const openDeleteModal = () => {
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    };

    return (
        <>
            <article className="w-1/3 h-fit bg-black p-2 rounded-md shadow-md flex-grow lg:w-72">
                <span className="font-bold text-green">{title}</span>
                <p className="font-thin" dangerouslySetInnerHTML={{ __html: content }}></p>
                <div className="mt-4 flex items-end justify-end space-x-2">
                    <Edit data-testid="Edit" className="text-green p-1 cursor-pointer" onClick={() => opendEditModal()} />
                    <DeleteForever data-testid="DeleteForever" className="text-gray-500 p-1 cursor-pointer" onClick={() => openDeleteModal()} />
                </div>

            </article>
            {isEditModalOpen && <EditModal id={id} onClose={closeEditModal} title={title} content={content}/>}
            {isDeleteModalOpen && <DeleteNote id={id} onCancel={closeDeleteModal} />}
        </>
    );
};