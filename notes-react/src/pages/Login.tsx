import LoginForm from "../components/LoginForm";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';
import { useEffect } from "react";

export default function Login() {

    const testCollectionRef = collection(db, 'test');

    useEffect(() => {
        const getTestCollection = async () => {
            const data = await getDocs(testCollectionRef);
            console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getTestCollection();
    }, [])

    return (
        <>
            <h1>myNotes</h1>
            <LoginForm />
        </>
    )
}