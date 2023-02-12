import React from 'react';
import NoteInput from '../NoteInput/NoteInput';
import NoteList from '../NoteList/NoteList';

function NoteBody({ notes, onDelete, onArchive, addNewNotes }) {
    return (
        <div className='note-app__body'>
            <NoteInput addNewNotes={addNewNotes} />
            <h2><b>Catatan Aktif</b></h2>
            <NoteList notes={notes.filter(note => note.archived === false)} onDelete={onDelete} onArchive={onArchive} />
            <h2><b>Arsip</b></h2>
            <NoteList notes={notes.filter(note => note.archived === true)} onDelete={onDelete} onArchive={onArchive} />
        </div>
    )
}

export default NoteBody;