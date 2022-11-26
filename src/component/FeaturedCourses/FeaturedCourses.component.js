import { PureComponent } from 'react';

import Chevron from '../../util/Icons/Chevron';
import CSS from '../../util/CSS';

import './FeaturedCourses.style.scss';

class FeaturedCourses extends PureComponent {

    coursesList = [
        {
            id: 'Anesthesiologists',
            name: 'Anesthesiologists',
            duration: '3 months',
            classes: '30',
            time: '10am - 11am',
            url: '/assets/images/courses/anaestheticist.jpg',
            description: 'Anesthesiologists evaluate, monitor, and supervise patient care before, during, and after surgery, delivering anesthesia, leading the Anesthesia Care Team, and ensuring optimal patient safety',
        },
        {
            id: 'gerontologist',
            name: 'gerontologist',
            duration: '1 year',
            classes: '50',
            time: '10am - 11am',
            url: '/assets/images/courses/geriontology.jpg',
            description: 'A gerontologist studies the physical, cognitive, social, emotional, psychological, and societal effects of the aging process on the human body',
        },
        {
            id: 'biotechologist',
            name: 'biotechologist',
            duration: '1 year',
            classes: '62',
            time: '8am - 9am',
            url: '/assets/images/courses/biotechologist.jpg',
            description: 'Biotechnologists create and improve products and processes for agriculture, medicine and conservation using biological organisms',
        },
        {
            id: 'physiotherapist',
            name: 'physiotherapist',
            duration: '2 years',
            classes: '76',
            time: '7am - 12am',
            url: '/assets/images/courses/physiotherapist.jpg',
            description: 'Physiotherapist do physiotherapist staff to make us better. If you dont get it, forget about it!',
        },
    ];

    numberOfItems = 0;

    state = {
        activeSlide: 0,
    }

    componentDidMount() {
        const { coursesList } = this;
        const { sliderWrapperRef } = this.props;

        this.numberOfItems = coursesList.length;

        CSS.setVariable(sliderWrapperRef, 'image-slider-x-position', 0);
        CSS.setVariable(sliderWrapperRef, 'courses-items-number', this.numberOfItems);
    }
    
    renderItem({ id, url, name, duration, classes, time, description }) {
        return (
            <div className='FeaturedCourses-ImageSlide' key={id}>
                <div className='FeaturedCourses-ItemSlideContainer'>
                    <div className='FeaturedCourses-ItemImage'>
                        <img 
                            className='FeaturedCourses-ItemImg' 
                            src={url} 
                            alt='nursing college course' 
                        />
                    </div>
                    <div className='FeaturedCourses-ItemInfo'>
                        <span className='FeaturedCourses-ItemName'>{ name }</span>
                        <p className='FeaturedCourses-ItemText'>{ description.substring(0, 50) + '...'}</p>
                    </div>
                    <div className='FeaturedCourses-ItemPeriod'>
                        <div className='FeaturedCourses-ItemPeriodContent'>
                            <span>{ duration }</span>
                            <span>{ 'Duration' }</span>
                        </div>
                        <div className='FeaturedCourses-ItemPeriodContent FeaturedCourses-ItemPeriodClasses'>
                            <span>{ classes }</span>
                            <span>{ 'Classes' }</span>
                        </div>
                        <div className='FeaturedCourses-ItemPeriodContent'>
                            <span>{ time }</span>
                            <span>{ 'Time' }</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderCoursesSlider() {
        const { coursesList } = this;
        const { sliderWrapperRef } = this.props;

        return (
            <div className={`FeaturedCourses-ImageSlider`}>
                <div
                    ref={sliderWrapperRef}
                    className={`FeaturedCourses-ImageSliderWrapper`}
                >
                    { coursesList.map(this.renderItem) }
                </div>
            </div>
        );
    }

    renderTitle() {    
        return (
            <p className='FeaturedCourses-Title'>
                {'Featured Courses'}
            </p>
        );
    }

    handleLeftClick() {
        const { activeSlide } = this.state;
        const { sliderWrapperRef } = this.props;

        if (activeSlide === 0) {
            return ;
        }

        const newCount = activeSlide - 1;
        this.setState({ activeSlide: newCount });

        CSS.setVariable(sliderWrapperRef, 'image-slider-x-position', newCount);
    }

    handleRightClick() {
        const { activeSlide } = this.state;
        const { sliderWrapperRef  } = this.props;

        if (activeSlide === this.numberOfItems - 1) {
            return ;
        }

        const newCount = activeSlide + 1;
        this.setState({ activeSlide: newCount });

        CSS.setVariable(sliderWrapperRef, 'image-slider-x-position', newCount);
    }

    renderCoursesArrows() {
        const { activeSlide } = this.state;

        const startOfSlide = activeSlide === 0 && 'FeaturedCourses-Chevron_Disabled';
        const endOfSlide = activeSlide === this.numberOfItems - 1 && 'FeaturedCourses-Chevron_Disabled';

        return (
            <div className='FeaturedCourses-Chevrons'>
                <div onClick={() => this.handleLeftClick() }
                    className={`FeaturedCourses-Chevron FeaturedCourses-Chevron_Left ${startOfSlide}`}
                >
                    <Chevron width={14} height={14} color={'#fff'}/>
                </div>
                <div onClick={() => this.handleRightClick() } className={`FeaturedCourses-Chevron ${endOfSlide}`}>
                    <Chevron width={14} height={14} color={'#fff'}/>
                </div>
            </div>
        );
    }

    renderHeader() {
        return (
            <div className='FeaturedCourses-Header'>
                { this.renderTitle() }
                { this.renderCoursesArrows() }
            </div>
        )
    }

    renderComponents() {
        return (
          <section className='FeaturedCourses PaddedContainer'>
            <div className='ContainerWrapper'>
                { this.renderHeader() }
                { this.renderCoursesSlider() }
            </div>
          </section>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default FeaturedCourses;