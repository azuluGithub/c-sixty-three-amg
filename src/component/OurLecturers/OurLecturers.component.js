import { PureComponent } from 'react';

import Chevron from '../../util/Icons/Chevron';
import CSS from '../../util/CSS';

import './OurLecturers.style.scss';

class OurLecturers extends PureComponent {

    lecturersList = [
        {
            id: 'lecturer1',
            name: 'rethabile diputu',
            url: '/assets/images/our-teachers/teacher-1.jpg',
            position: 'Physiology Lecturer',
            socials: [
                {
                    id: 'lecturer1-email',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/email-icon.png`,
                    name: 'email',
                },
                {
                    id: 'lecturer1-facebook',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/facebook-icon.png`,
                    name: 'facebook',
                },
                {
                    id: 'lecturer1-linkedin',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/linkedin-icon.png`,
                    name: 'linkedin',
                },
                {
                    id: 'lecturer1-twitter',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/twitter-icon.png`,
                    name: 'twitter',
                },
            ]
        },
        {
            id: 'lecturer2',
            name: 'dimpho matabane',
            url: '/assets/images/our-teachers/teacher-2.jpg',
            position: 'Anatomy Lecturer',
            socials: [
                {
                    id: 'lecturer2-email',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/email-icon.png`,
                    name: 'email',
                },
                {
                    id: 'lecturer2-facebook',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/facebook-icon.png`,
                    name: 'facebook',
                },
                {
                    id: 'lecturer2-linkedin',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/linkedin-icon.png`,
                    name: 'linkedin',
                },
                {
                    id: 'lecturer2-twitter',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/twitter-icon.png`,
                    name: 'twitter',
                },
              ]
        },
        {
            id: 'lecturer3',
            name: 'mike khumalo',
            url: '/assets/images/our-teachers/teacher-3.jpg',
            position: 'Biology Lecturer',
            socials: [
                {
                    id: 'lecturer3-email',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/email-icon.png`,
                    name: 'email',
                },
                {
                    id: 'lecturer3-facebook',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/facebook-icon.png`,
                    name: 'facebook',
                },
                {
                    id: 'lecturer3-linkedin',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/linkedin-icon.png`,
                    name: 'linkedin',
                },
                {
                    id: 'lecturer3-twitter',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/twitter-icon.png`,
                    name: 'twitter',
                },
              ]
        },
        {
            id: 'lecturer4',
            name: 'Lerato Mangena',
            url: '/assets/images/our-teachers/teacher-4.jpg',
            position: 'Physiotherapy Lecturer',
            socials: [
                {
                    id: 'lecturer4-email',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/email-icon.png`,
                    name: 'email',
                },
                {
                    id: 'lecturer4-facebook',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/facebook-icon.png`,
                    name: 'facebook',
                },
                {
                    id: 'lecturer4-linkedin',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/linkedin-icon.png`,
                    name: 'linkedin',
                },
                {
                    id: 'lecturer4-twitter',
                    icon: `${process.env.PUBLIC_URL}/assets/icons/social/twitter-icon.png`,
                    name: 'twitter',
                },
            ]
        },
    ];

    numberOfItems = 0;

    state = {
        activeSlide: 0,
    }

    componentDidMount() {
        const { lecturersList } = this;
        const { lecturersWrapperRef } = this.props;

        this.numberOfItems = lecturersList.length;

        CSS.setVariable(lecturersWrapperRef, 'lecturers-slider-x-position', 0);
        CSS.setVariable(lecturersWrapperRef, 'lecturers-items-number', this.numberOfItems);
    }

    renderSocial({ icon, id }) {
        return (
          <div className='OurLecturers-SocialImage' key={id}>
            <img 
                className='OurLecturers-SocialImg' 
                src={icon} 
                alt='lecturer social contacct' 
            /> 
          </div>
        );
    }

    renderSocials(socials) {
        return (
            <div className='OurLecturers-SocialContainer'>
                { socials.map((social) => this.renderSocial(social)) }
            </div>
        );
    }
    
    renderItem({ id, url, name, socials, position }) {
        return (
            <div className='OurLecturers-ImageSlide' key={id}>
                <div className='OurLecturers-ItemSlideContainer'>
                    <div className='OurLecturers-ItemImage'>
                        <img 
                            className='OurLecturers-ItemImg' 
                            src={url} 
                            alt='nursing college lecturer' 
                        />
                    </div>
                    <div className='OurLecturers-ItemInfo'>
                        <span className='OurLecturers-ItemName'>{ name }</span>
                        <p className='OurLecturers-ItemText'>{ position }</p>
                        { this.renderSocials(socials) }
                    </div>
                </div>
            </div>
        );
    }

    renderLecturersSlider() {
        const { lecturersList } = this;
        const { lecturersWrapperRef } = this.props;

        return (
            <div className={`OurLecturers-ImageSlider`}>
                <div
                    ref={lecturersWrapperRef}
                    className={`OurLecturers-ImageSliderWrapper`}
                >
                    { lecturersList.map(this.renderItem.bind(this)) }
                </div>
            </div>
        );
    }

    renderTitle() {    
        return (
            <p className='OurLecturers-Title'>
                {'Our Lecturers'}
            </p>
        );
    }

    handleLeftClick() {
        const { activeSlide } = this.state;
        const { lecturersWrapperRef } = this.props;

        if (activeSlide === 0) {
            return ;
        }

        const newCount = activeSlide - 1;
        this.setState({ activeSlide: newCount });

        CSS.setVariable(lecturersWrapperRef, 'lecturers-slider-x-position', newCount);
    }

    handleRightClick() {
        const { activeSlide } = this.state;
        const { lecturersWrapperRef  } = this.props;

        if (activeSlide === this.numberOfItems - 1) {
            return ;
        }

        const newCount = activeSlide + 1;
        this.setState({ activeSlide: newCount });

        CSS.setVariable(lecturersWrapperRef, 'lecturers-slider-x-position', newCount);
    }

    renderLecturersArrows() {
        const { activeSlide } = this.state;

        const startOfSlide = activeSlide === 0 && 'OurLecturers-Chevron_Disabled';
        const endOfSlide = activeSlide === this.numberOfItems - 1 && 'OurLecturers-Chevron_Disabled';

        return (
            <div className='OurLecturers-Chevrons'>
                <div onClick={() => this.handleLeftClick() }
                    className={`OurLecturers-Chevron OurLecturers-Chevron_Left ${startOfSlide}`}
                >
                    <Chevron width={14} height={14} color={'#fff'}/>
                </div>
                <div onClick={() => this.handleRightClick() } className={`OurLecturers-Chevron ${endOfSlide}`}>
                    <Chevron width={14} height={14} color={'#fff'}/>
                </div>
            </div>
        );
    }

    renderHeader() {
        return (
            <div className='OurLecturers-Header'>
                { this.renderTitle() }
                { this.renderLecturersArrows() }
            </div>
        )
    }

    renderComponents() {
        return (
          <section className='OurLecturers PaddedContainer'>
            <div className='ContainerWrapper'>
                { this.renderHeader() }
                { this.renderLecturersSlider() }
            </div>
          </section>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default OurLecturers;