import { PureComponent } from 'react';
import CourseCard from '../CourseCard';

import './Courses.style.scss';

class Courses extends PureComponent {

    coursesList = [
        {
            id: 'Anenmksthesiologists',
            name: 'Anesthesiologists',
            duration: '3 months',
            classes: '30',
            time: '10am - 11am',
            url: '/assets/images/courses/anaestheticist.jpg',
            description: 'Anesthesiologists evaluate, monitor, and supervise patient care before, during, and after surgery, delivering anesthesia, leading the Anesthesia Care Team, and ensuring optimal patient safety',
        },
        {
            id: 'gerontkkokookolologist',
            name: 'gerontologist',
            duration: '1 year',
            classes: '50',
            time: '10am - 11am',
            url: '/assets/images/courses/geriontology.jpg',
            description: 'A gerontologist studies the physical, cognitive, social, emotional, psychological, and societal effects of the aging process on the human body',
        },
        {
            id: 'biotechologgvgbbgist',
            name: 'biotechologist',
            duration: '1 year',
            classes: '62',
            time: '8am - 9am',
            url: '/assets/images/courses/biotechologist.jpg',
            description: 'Biotechnologists create and improve products and processes for agriculture, medicine and conservation using biological organisms',
        },
        {
            id: 'physiothnmkmkerapist',
            name: 'physiotherapist',
            duration: '2 years',
            classes: '76',
            time: '7am - 12am',
            url: '/assets/images/courses/physiotherapist.jpg',
            description: 'Physiotherapist do physiotherapist staff to make us better. If you dont get it, forget about it!',
        },
    ];
    
    renderItem(card) {
        return (
            <div className='Courses-CardsItem' key={card.id}>
                <CourseCard 
                    card={card}
                />
            </div>
        );
    }

    renderCourses() {
        const { coursesList } = this;

        if (!coursesList.length) {
            return <div></div>;
        }

        return (
            <div className='Courses-CardsContaners'>
                { coursesList.map(this.renderItem) }
            </div>
        );
    }

    renderComponents() {
        return (
          <section className='Courses PaddedContainer'>
            <div className='ContainerWrapper'>
                { this.renderCourses() }
            </div>
          </section>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default Courses;