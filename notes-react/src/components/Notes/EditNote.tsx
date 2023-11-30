import DoneIcon from '@mui/icons-material/Done';

export default function EditModal() {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50">
            <div className="w-2/3 h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 bg-black rounded-md p-2 backdrop-sepia">
                <form className="flex flex-col items-end justify-between w-full bg-black m-1 mt-4 p-2 rounded-md shadow-md">
                    <input type="text" placeholder="Title" className="w-full bg-transparent" />
                    <textarea placeholder="Content" className="w-full bg-transparent" />
                    <button className='p-2'>{<DoneIcon className="text-green" />}</button>
                </form>
            </div>
        </div>
    );
};
