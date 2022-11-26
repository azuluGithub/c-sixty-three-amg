import { createRef, PureComponent } from 'react';

import FeaturedCoursesComponent from './FeaturedCourses.component';

class FeaturedCourses extends PureComponent {

    sliderWrapperRef = createRef();

    containerProps() {
        const { 
            sliderWrapperRef 
        } = this;

        return {
            sliderWrapperRef,
        };
    }

    renderFeaturedCourses() {
        return (
            <FeaturedCoursesComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderFeaturedCourses();
    }
}

export default FeaturedCourses;