import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotoToActiveNote, setSaving, updateNote } from './';
import { fileUpload, loadNotes } from '../../helpers';


export const startNewNote = () => {
    return async(dispatch, getState) => {

        dispatch(savingNewNote())

        // console.log('startNewNote');
        // console.log(getState());
        const { uid } = getState().auth;

        // uid

        const newNote = {
            title: '',
            body: '',
            imageUrls: [],
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        // const setDocResp = await setDoc(newDoc, newNote);

        // console.log({newDoc, setDocResp});
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;


        // !dispatch
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('uid del usuario no esta establecido');
        // console.log({uid});
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const startSaveNote = () => {
    return async(dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = {...note};
        delete noteToFireStore.id;

        // console.log(noteToFireStore);
        const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true });

        dispatch(updateNote(note));

    }
}

export const startUploadingFiles = (files = []) => {
    return async(dispatch) => {
        dispatch(setSaving());

        // console.log(files);
        // await fileUpload(files[0]);
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosUrls = await Promise.all(fileUploadPromises);
        // console.log(photosUrls);
        dispatch(setPhotoToActiveNote(photosUrls));
    }
}

export const startDeletingNote = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        // console.log({ uid, note });
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        // const resp = await deleteDoc(docRef);
        await deleteDoc(docRef);

        // console.log({ resp });
        dispatch(deleteNoteById(note.id))
    }
}