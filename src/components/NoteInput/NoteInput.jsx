import React from 'react';
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
            noteTitleLength: 0
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        event.preventDefault();
        if (event.target.value.length <= 50) {
            this.setState(() => {
                return {
                    title: event.target.value,
                    noteTitleLength: event.target.value.length
                }
            })
        } else {
            toast.error('Maksimal kata untuk judul adalah 50', { toastId: toastId1 });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmitChangeEventHandler(event) {
        event.preventDefault();
        if (this.state.title === '') {
            toast.error('Judul tidak boleh kosong!', { toastId: toastId2 });
        } else if (this.state.body === '') {
            toast.error('Isi note tidak boleh kosong!', { toastId: toastId3 });
        } else {
            toast.success('Note berhasil disimpan!');
            this.props.addNewNotes(this.state);

            // 👇️ clear all input values in the form
            this.setState(() => {return {title: ''}});
            this.setState(() => {return {body: ''}});
        }
    }

    render() {
        return (
            <div className='note-input'>
                <h2><b>Buat Catatan</b></h2>
                <form onSubmit={this.onSubmitChangeEventHandler}>
                    <p className='note-input__title__char-limit'>Sisa Karakter: {50 - this.state.noteTitleLength}</p>
                    <input className='note-input__title' type='text' value={this.state.title} placeholder='Ini adalah judul...' onChange={this.onTitleChangeEventHandler} />
                    <textarea className='note-input__body' cols='30' rows='10' value={this.state.body} placeholder='Tuliskan catatanmu disini...' onChange={this.onBodyChangeEventHandler}></textarea>
                    <button type='submit'>Buat Note Baru</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;