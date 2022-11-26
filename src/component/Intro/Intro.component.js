import { PureComponent } from 'react';

import './Intro.style.scss';

class Intro extends PureComponent {

    introList = [
        {
          id: 'Skilled Lecturers',
          url: '/assets/icons/intro/graduation-hat-icon.png',
          title: 'Skilled Lecturers',
          content: 'Dorem Ipsum has been the industrys standard dummy text ever since the en an unknown printer galley dear.'
        },
        {
          id: 'Our E-Library',
          url: '/assets/icons/intro/users-icon.png',
          title: 'Our E-Library',
          content: 'Dorem Ipsum has been the industrys standard dummy text ever since the en an unknown printer galley dear.'
        },
        {
          id: 'Scholarship Facility',
          url: '/assets/icons/intro/book-icon.png',
          title: 'Scholarship Facility',
          content: 'Dorem Ipsum has been the industrys standard dummy text ever since the en an unknown printer galley dear.'
        },
    ]

    renderItem({ id, url, title, content }) {
        return (
            <div className='Intro-Item' key={id}>
                <div className='Intro-ItemContentContainer'>
                    <span className='Intro-ItemTitle'>{title}</span>
                    <p className='Intro-ItemContent'>{content}</p>
                </div>
                <div className='Intro-ItemImage'>
                    <img
                        className='Intro-ItemImg'
                        src={url}
                        alt={`${title} icon`} 
                    />
                </div>
            </div>
        );
    }

    renderItems() {
        const { introList } = this;
      
        return (
            <div className='Intro-Items Split'>
              { introList.map(this.renderItem) }
            </div>
        );
    }


    renderIntro() {
        return (
            <section className='Intro'>
                <div className='ContainerWrapper'>
                    { this.renderItems() }
                </div>
            </section>
        );
    }

    render() {
        return this.renderIntro();
    }
}

export default Intro;