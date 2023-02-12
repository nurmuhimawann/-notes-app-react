import React from "react";
import { toast } from 'react-toastify';

const toastId1 = 'toast-1';
const toastId2 = 'toast-2';
const toastId3 = 'toast-3';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            title: '',
            body: '',
            noteBodyLength: 0
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        });
    }

    onBodyChangeEventHandler(event) {
        event.preventDefault();
        if (event.target.value.length <= 300) {
            this.setState(() => {
                return {
                    body: event.target.value,
                    noteBodyLength: event.target.value.length
                }
            })
        } else {
            toast.error('Max length for note body is 300', { toastId: toastId1 });
        }
    }

    onSubmitChangeEventHandler(event) {
        event.preventDefault();
        if (this.state.title === '') {
            toast.error('Title cannot be empty!', { toastId: toastId2 });
        } else if (this.state.body === '') {
            toast.error('Note body cannot be empty!', { toastId: toastId3 });
        } else {
            toast.success('New note saved!');
            this.props.addNewNotes(this.state);

            // 👇️ clear all input values in the form
            this.setState(() => {return {title: ''}});
            this.setState(() => {return {body: ''}});
        }
    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitChangeEventHandler}>
                    <p className="note-input__title__char-limit">Sisa Karakter: {300 - this.state.noteBodyLength}</p>
                    <input className="note-input__title" type="text" value={this.state.title} placeholder="Ini adalah judul..." onChange={this.onTitleChangeEventHandler} />
                    <textarea className="note-input__body" cols="30" rows="10" value={this.state.body} placeholder="Tuliskan catatanmu disini..." onChange={this.onBodyChangeEventHandler}></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;