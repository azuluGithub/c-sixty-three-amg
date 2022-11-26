import { PureComponent } from 'react';

import HomeStudentsComponent from './HomeStudents.component';

class HomeStudents extends PureComponent {

    renderHomeStudents() {
        return (
            <HomeStudentsComponent />
        );
    }

    render() {
        return this.renderHomeStudents();
    }
}

export default HomeStudents;