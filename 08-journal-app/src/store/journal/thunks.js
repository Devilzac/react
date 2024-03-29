import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote } from './';

export const startNewNote = ()=>{
    return async(dispatch, getState) =>{

        
        dispatch( savingNewNote() );

        const { uid } = getState().auth;
        const newNote= {
            title:'',
            body:'',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection(FirebaseDB, `${ uid }/journal/notes`) )
        const setDocResp = await setDoc(newDoc, newNote)
        console.log({newDoc,setDocResp})

        newNote.id = newDoc.id;
        
        dispatch( addNewEmptyNote(newNote) )
        dispatch( setActiveNote(newNote) )
    }
}