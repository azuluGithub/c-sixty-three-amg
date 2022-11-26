import { PureComponent } from 'react';

import './CoursesTab.style.scss';

class CoursesTab extends PureComponent {

    renderCourse(course) {
        const { id, name } = course;
        const isActiveCourse = id === 'all' && 'CoursesTab-Course_Active';

        return (
            <div className={`CoursesTab-Course ${isActiveCourse}`} key={id}>
                <span className='CoursesTab-CourseName'>{name}</span>
            </div>
        );
    }

    renderTab() {
        const { coursesList } = this.props;

        return (
            <div className='CoursesTab'>
                <div className='CoursesTab-Container ContainerWrapper'>
                    { coursesList.map(this.renderCourse) }
                </div>
            </div>
        );
    }

    render() {
        return this.renderTab();
    }
}

export default CoursesTab;