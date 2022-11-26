import { PureComponent } from 'react';

import LecturersComponent from './Lecturers.component';

class Lecturers extends PureComponent {

    renderLecturers() {
        return (
            <LecturersComponent />
        );
    }

    render() {
        return this.renderLecturers();
    }
}

export default Lecturers;