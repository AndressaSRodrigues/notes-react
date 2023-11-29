import { NotesCardProps } from "../../interface/notesCardProps";
import { Edit, DeleteForever } from '@mui/icons-material';

export default function NotesCard({ title, content }: NotesCardProps) {
    return (
        <article className="w-1/3 h-fit bg-black p-2 rounded-md shadow-md flex-grow lg:w-72">
            <span className="font-bold">{title}</span>
            <p className="font-thin">{content}</p>
            <div className="mt-4 flex items-end justify-end space-x-2">
                <Edit data-testid="Edit" className="text-gray-500" />
                <DeleteForever data-testid="DeleteForever" className="text-gray-500" />
            </div>
        </article>
    );
};
