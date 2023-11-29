import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export default function Header(){
    return (
        <header className="w-full h-[6vh] bg-black flex flex-row justify-between p-3 place-content-center lg:h-[8vh]">
            <span>{<TextSnippetIcon />} myNotes</span>
            <button className="text-xs">Log Out</button>
        </header>
    )
};
