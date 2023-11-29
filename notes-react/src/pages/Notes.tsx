import Header from "../components/Header";
import CreateNote from "../components/Notes/CreateNote";
import DisplayNotes from "../components/Notes/DisplayNotes";

export default function Notes() {
    return (
        <>
            <Header />
            <div className="p-2 lg:px-20">
                <CreateNote />
                <DisplayNotes />
            </div>
        </>
    )
};
