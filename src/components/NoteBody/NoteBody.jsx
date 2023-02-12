import React from "react";
import NoteInput from "../NoteInput/NoteInput";
import NoteList from "../NoteList/NoteList";

function NoteBody({ notes }) {
    return (
        <div className="note-app__body">
            <NoteInput />
            <h2>Catatan Aktif</h2>
            <NoteList notes={notes} />
            <h2>Arsip</h2>
        </div>
    )
}

export default NoteBody;