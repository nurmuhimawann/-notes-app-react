import React from "react";

class NoteInput extends React.Component {
    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form action="">
                    <p className="note-input__title__char-limit">Sisa Karakter: 10 huruf</p>
                    <input className="note-input__title" type="text" placeholder="Ini adalah judul..." />
                    <textarea className="note-input__body" name="" id="" cols="30" rows="10" placeholder="Tuliskan catatanmu disini..."></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;