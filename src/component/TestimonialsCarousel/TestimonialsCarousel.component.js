import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CSS from '../../util/CSS';

import './TestimonialsCarousel.style.scss';
import { TESTIMONIALS_TIMEOUT } from './TestimonialsCarousel.config';

class TestimonialsCarouselComponent extends PureComponent {

    static propTypes = {
        testimonialList: PropTypes.array.isRequired,
    }
    
    star = `${process.env.PUBLIC_URL}/assets/icons/star/star.png`;

    numberOfItems = 0;

    state = {
        activeSlide: 0,
    }

    componentDidMount() {
        const { testimonialsSliderWrapperRef, testimonialList } = this.props;

        this.numberOfItems = testimonialList.length;
        CSS.setVariable(testimonialsSliderWrapperRef, 'testimonials-length', this.numberOfItems);
    }

    renderStar(i) {
        return (
            <div className='TestimonialsCarousel-StarImage' key={i}>
                <img
                    className='TestimonialsCarousel-StarImg' 
                    src={this.star} 
                    alt='star icon' 
                />
            </div>
        );
    }

    renderStars() {
        return (
            <div className='TestimonialsCarousel-Stars'>
                { Array.from(Array(5), (_, i) => this.renderStar(i)) }
            </div>
        );
    }

    renderImageSlide({ url, id, name, testimony, position }) {
        return (
            <div
                className='TestimonialsCarousel-ImageSlide'
                key={id}
            >
                <div className='TestimonialsCarousel-ImageSlideTop'>
                    <p className='TestimonialsCarousel-ImageSlideName'>
                        { name }
                    </p>
                    <p className='TestimonialsCarousel-ImageSlidePosition'>
                        { position }
                    </p>
                    { this.renderStars() }
                </div>
                <div className='TestimonialsCarousel-ImageSlideBottom'>
                    <p className='TestimonialsCarousel-ImageSlideTestimony'>
                        { testimony }
                    </p>
                </div>
                <div className='TestimonialsCarousel-ImageSlideImage'>
                    <img className='TestimonialsCarousel-ImageSlideImg' src={url} alt='mpumalanga nursing college student' />
                </div>
            </div>
        );
    }

    renderSliderList() {
        const { testimonialList } = this.props;

        return testimonialList && testimonialList.map((item) => this.renderImageSlide(item));
    }

    setActiveSlide(pos) {
        const { testimonialsSliderWrapperRef } = this.props;

        this.setState({ activeSlide: pos });

        CSS.setVariable(testimonialsSliderWrapperRef, 'testimonials-x-position', pos);
    }

    renderSliderSelector({ url }, pos) {
        const { activeSlide } = this.state;
        const isActiveClass = pos === activeSlide && 'TestimonialsCarousel-SliderSelector_isActive';

        return (
            <div
                onClick={() => this.setActiveSlide(pos)}
                className={`TestimonialsCarousel-SliderSelector ${isActiveClass}`}
                key={url}
            >
            </div>
        );
    }

    renderSliderSelectors() {
        const { testimonialList } = this.props;

        if (!testimonialList.length) {
            return ;
        }

        return testimonialList.map((item, pos) => this.renderSliderSelector(item, pos));
    }

    renderGallerySlider() {
        const { testimonialsSliderWrapperRef } = this.props;

        return (
            <div className='TestimonialsCarousel-Slider'>
                <div
                    ref={testimonialsSliderWrapperRef}
                    className='TestimonialsCarousel-SliderWrapper'
                >
                    { this.renderSliderList() }
                </div>
                <div className='TestimonialsCarousel-SliderSelectors'>
                    { this.renderSliderSelectors() }
                </div>
            </div>
        );
    }

    renderTestimonialsCarousel() {
        
        const { activeSlide } = this.state;
        const { numberOfItems } = this;

        setTimeout(() => {
            this.setActiveSlide(activeSlide + 1);

            if (activeSlide + 1 === numberOfItems && numberOfItems !== 0) {
                // this.setActiveSlide(1);
                // this.setState({ activeSlide: 1 });
                this.setActiveSlide(0);
                console.log('active ---> ' + activeSlide);
                console.log('numberOfItems ---> ' + numberOfItems);
                // this.setState({ activeSlide: 0 });
            }
        }, TESTIMONIALS_TIMEOUT);
        return (
            <div className='TestimonialsCarousel'>
              { this.renderGallerySlider() }
            </div>
        );
    }

    render() {
        return this.renderTestimonialsCarousel();
    }
}

export default TestimonialsCarouselComponent;