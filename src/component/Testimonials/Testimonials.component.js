import { createRef, PureComponent } from 'react';

import TestimonialsCarousel from '../TestimonialsCarousel';

import './Testimonials.style.scss';

class Testimonials extends PureComponent {

    testimonialsSliderWrapperRef = createRef();

    testimonialList = [
        {
            id: 'refiloe',
            name: 'refiloe',
            stars: 5,
            url: `${process.env.PUBLIC_URL}/assets/images/testimonials/user1.png`,
            testimony: '“It\'s amazing how you can learn so much so fast in a public school.”',
            position: 'student',
        },
        {
            id: 'sesethu mahlake',
            name: 'sesethu mahlake',
            stars: 5,
            url: `${process.env.PUBLIC_URL}/assets/images/testimonials/user2.png`,
            testimony: '“Best school I\'ve ever attended ever, highly recommended ”',
            position: 'student',
        },
        {
            id: 'thabiso mnguni',
            name: 'thabiso mnguni',
            stars: 5,
            url: `${process.env.PUBLIC_URL}/assets/images/testimonials/user3.png`,
            testimony: '“The greatest nursing school of all times. #salute #handsDown”',
            position: 'student',
        },
    ];

    renderTestimonialsCarousel() {
        const { testimonialList, testimonialsSliderWrapperRef } = this;
        
        return (
            <TestimonialsCarousel 
                testimonialList={testimonialList}
                testimonialsSliderWrapperRef={testimonialsSliderWrapperRef}
            />
        );
      }

    renderTitle() {    
        return (
            <p className='Testimonials-Title TextCenter'>
                {'What our students say'}
            </p>
        );
    }

    renderComponents() {
        return (
          <section className='Testimonials'>
            <div className='ContainerWrapper'>
                { this.renderTitle() }
                { this.renderTestimonialsCarousel() }
            </div>
          </section>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default Testimonials;