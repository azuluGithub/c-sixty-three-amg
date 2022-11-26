import { PureComponent } from 'react';

import CourseCardComponent from './CourseCard.component';

class CourseCard extends PureComponent {

    containerProps() {
        const { card } = this.props;

        return {
            card
        }
    }

    containerFunctions() {}

    renderCourseCard() {
        return (
            <CourseCardComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderCourseCard();
    }
}

export default CourseCard;