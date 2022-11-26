import { PureComponent } from 'react';

import CoursesTabComponent from './CoursesTab.component';

class CoursesTab extends PureComponent {

    coursesList = [
        {
            id: 'all',
            name: 'All',
        },
        {
            id: 'course 2',
            name: 'Economics',
        },
        {
            id: 'course 3',
            name: 'Medicine',
        },
        {
            id: 'course 4',
            name: 'Engineering',
        },
        {
            id: 'course 84',
            name: 'Computer Science',
        },
    ];

    containerProps() {
        const { coursesList } = this;

        return {
            coursesList
        }
    }

    containerFunctions() {}

    renderCoursesTab() {
        return (
            <CoursesTabComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderCoursesTab();
    }
}

export default CoursesTab;