import React from 'react';
import Header from '../Header/Header';
import NoteBody from '../NoteBody/NoteBody';
import { getInitialData } from '../../utils/index';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData()
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <NoteBody notes={this.state.notes} />
            </React.Fragment>
        )
    }
}

export default NoteApp;