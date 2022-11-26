import { PureComponent } from 'react';

import './HomeStudents.style.scss';

class HomeStudents extends PureComponent {

    studentsList = [
        {
            id: 'student 1',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-1.jpg`,
        },
        {
            id: 'student 2',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-2.jpg`,
        },
        {
            id: 'student 3',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-1.jpg`,
        },
        {
            id: 'student 4',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-2.jpg`,
        },
        {
            id: 'student 5',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-1.jpg`,
        },
        {
            id: 'student 6',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-2.jpg`,
        },
        {
            id: 'student 7',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-1.jpg`,
        },
        {
            id: 'student 8',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-2.jpg`,
        },
        {
            id: 'student 9',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-1.jpg`,
        },
        {
            id: 'student 10',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-2.jpg`,
        },
        {
            id: 'student 11',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-1.jpg`,
        },
        {
            id: 'student 12',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-2.jpg`,
        },
        {
            id: 'student 13',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-1.jpg`,
        },
        {
            id: 'student 14',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-2.jpg`,
        },
        {
            id: 'student 15',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-1.jpg`,
        },
        {
            id: 'student 16',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-2.jpg`,
        },
        {
            id: 'student 17',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-1.jpg`,
        },
        {
            id: 'student 18',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-2.jpg`,
        },
        {
            id: 'student 19',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-1.jpg`,
        },
        {
            id: 'student 20',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-2.jpg`,
        },
        {
            id: 'student 21',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-1.jpg`,
        },
        {
            id: 'student 22',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-2.jpg`,
        },
        {
            id: 'student 23',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-1.jpg`,
        },
        {
            id: 'student 24',
            img: `${process.env.PUBLIC_URL}/assets/images/home-students/home-students-2.jpg`,
        },
    ];

    renderListItem({ img, id }) {
        return (
            <div className='HomeStudents-Image' key={id}>
                <img
                    className='HomeStudents-Img'
                    src={img} 
                    alt='nursing college students items'
                />
            </div>
        );
    }

    renderStudents() {
        const { studentsList } = this;

        return (
          <div className='HomeStudents-Students'>
            { studentsList.map(this.renderListItem)}
          </div>
        );
    }

    renderContent() {
        return (
          <div className='HomeStudents-Content'>
            <div className='HomeStudents-ContentContainer TextCenter'>
                <p className='HomeStudents-ContentTopText'>{'Join'}<strong>{' 2300'}</strong></p>
                <p className='HomeStudents-ContentBottomText'>{'Students'}</p>
                <div className='HomeStudents-ButtonContainer'>
                    <button className='HomeStudents-Button Button'>{'Join Now'}</button>
                </div>
            </div>
          </div>
        );
    }

    renderComponents() {
        return (
          <section className='HomeStudents'>
            <div className='HomeStudents-Container ContainerWrapper'>
                { this.renderStudents() }
                { this.renderContent() }
            </div>
          </section>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default HomeStudents;