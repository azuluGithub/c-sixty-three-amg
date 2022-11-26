import { PureComponent } from 'react';

import CoursesComponent from './Courses.component';

class Courses extends PureComponent {

    renderCourses() {
        return (
            <CoursesComponent />
        );
    }

    render() {
        return this.renderCourses();
    }
}

export default Courses;