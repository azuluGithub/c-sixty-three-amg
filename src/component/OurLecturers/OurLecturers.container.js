import { createRef, PureComponent } from 'react';

import OurLecturersComponent from './OurLecturers.component';

class OurLecturers extends PureComponent {

    lecturersWrapperRef = createRef();

    containerProps() {
        const { 
            lecturersWrapperRef 
        } = this;

        return {
            lecturersWrapperRef,
        };
    }

    renderOurLecturers() {
        return (
            <OurLecturersComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderOurLecturers();
    }
}

export default OurLecturers;