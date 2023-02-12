import React from "react";
import Header from '../Header/Header';
import NoteBody from '../NoteBody/NoteBody';
import { getInitialData } from '../../utils/index';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../Footer/Footer';

import 'react-toastify/dist/ReactToastify.min.css';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            unfilteredNotes: getInitialData()
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
    }

    onAdd

    onArchivedEventHandler(id) {
        const notes = this.state.unfilteredNotes.filter(note => note.id === id)[0];
        const newNotes = { ...notes, archived: !notes.archived };
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes.filter(note => note.id !== id),
                    newNotes
                ],
                unfilteredNotes: [
                    ...prevState.unfilteredNotes.filter(note => note.id !== id),
                    newNotes
                ],
            }
        });

        if (notes.archived) {
            toast.success('Note ditampilkan kembali!');
        } else {
            toast.success('Note diarsipkan!');
        }
    }

    onDeleteEventHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <NoteBody notes={this.state.notes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchivedEventHandler} />
                <Footer />
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </React.Fragment>
        )
    }
}

export default NoteApp;