import { PureComponent } from 'react';

import TestimonialsComponent from './Testimonials.component';

class Testimonials extends PureComponent {

    renderTestimonials() {
        return (
            <TestimonialsComponent />
        );
    }

    render() {
        return this.renderTestimonials();
    }
}

export default Testimonials;