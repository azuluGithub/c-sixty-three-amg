import { PureComponent } from 'react';

import './CourseCard.style.scss';

class CourseCard extends PureComponent {

    renderCard() {
        const { card: { id, url, name, duration, classes, time, description } } = this.props;

        return (
            <div className='CourseCard' key={id}>
                <div className='CourseCard-Container'>
                    <div className='CourseCard-ItemImage'>
                        <img 
                            className='CourseCard-ItemImg' 
                            src={url} 
                            alt='nursing college course' 
                        />
                    </div>
                    <div className='CourseCard-ItemInfo'>
                        <span className='CourseCard-ItemName'>{ name }</span>
                        <p className='CourseCard-ItemText'>{ description.substring(0, 40) + '...'}</p>
                    </div>
                    <div className='CourseCard-ItemPeriod'>
                        <div className='CourseCard-ItemPeriodContent'>
                            <span>{ duration }</span>
                            <span>{ 'Duration' }</span>
                        </div>
                        <div className='CourseCard-ItemPeriodContent CourseCard-ItemPeriodClasses'>
                            <span>{ classes }</span>
                            <span>{ 'Classes' }</span>
                        </div>
                        <div className='CourseCard-ItemPeriodContent'>
                            <span>{ time }</span>
                            <span>{ 'Time' }</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return this.renderCard();
    }
}

export default CourseCard;