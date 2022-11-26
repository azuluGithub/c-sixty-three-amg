import { PureComponent } from 'react';

import './Lecturers.style.scss';



class Lecturers extends PureComponent {

    lecturersList = [
        {
            id: 'dimpho',
            name: 'dimpho',
            // url: '',
            position: 'Anatomy Lecturer',
        },
        {
            id: 'mike',
            name: 'mike',
            // url: '',
            position: 'Biology Lecturer',
        },
        {
            id: 'rethabile',
            name: 'rethabile',
            // url: '',
            position: 'Physiology Lecturer',
        },
    ];
    
    renderItem({ id, url, name, position }) {
        return (
            <div className='Lecturers-Item' key={id}>
                <div className='Lecturers-ItemImage'></div>
                <div className='Lecturers-ItemInfo'>
                    <span className='Lecturers-ItemName'>{ name }</span>
                    <span className='Lecturers-ItemPosition'>{ position }</span>
                </div>
            </div>
        );
    }

    renderLecturers() {
        const { lecturersList } = this;

        if (!lecturersList.length) {
            return <div></div>;
        }

        return (
            <div className='Split'>
                { lecturersList.map(this.renderItem.bind(this)) }
            </div>
        );
    }

    renderTitle() {    
        return (
            <h2 className='TextCenter H2MB'>
                {'Our Lecturers'}
            </h2>
        );
    }

    renderComponents() {
        return (
          <section className='Lecturers PaddedContainer'>
            <div className='ContainerWrapper'>
                { this.renderTitle() }
                { this.renderLecturers() }
            </div>
          </section>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default Lecturers;