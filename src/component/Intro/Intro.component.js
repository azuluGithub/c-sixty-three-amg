import { useEffect, useState } from "react";

import './Intro.style.scss';

function useOnScreen(options){
    const [ref, setRef] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return [ setRef, isVisible];
}

const Intro = () => {
    const [ setRef, isVisible ] = useOnScreen({ threshold: 0.8 });

    const introList = [
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
    ];

    const toggleContent = isVisible ? 'Intro-Item_Appear': 'Intro-Item_FadeIn';

    const renderItem = ({ id, url, title, content }) => {
        return (
            <div
                className={`Intro-Item ${toggleContent}`}
                key={id}
            >
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

    const renderItems = () => {
        return (
            <div
                className='Intro-Items Split'
            >
              { introList.map(renderItem) }
            </div>
        );
    }

    return (
        <section
            ref={setRef}
            className='Intro'
        >
            <div className='ContainerWrapper'>
                { renderItems() }
            </div>
        </section>
    );
}

export default Intro;

// import { PureComponent } from 'react';

// import './Intro.style.scss';

// class Intro extends PureComponent {

//     introList = [
//         {
//           id: 'Skilled Lecturers',
//           url: '/assets/icons/intro/graduation-hat-icon.png',
//           title: 'Skilled Lecturers',
//           content: 'Dorem Ipsum has been the industrys standard dummy text ever since the en an unknown printer galley dear.'
//         },
//         {
//           id: 'Our E-Library',
//           url: '/assets/icons/intro/users-icon.png',
//           title: 'Our E-Library',
//           content: 'Dorem Ipsum has been the industrys standard dummy text ever since the en an unknown printer galley dear.'
//         },
//         {
//           id: 'Scholarship Facility',
//           url: '/assets/icons/intro/book-icon.png',
//           title: 'Scholarship Facility',
//           content: 'Dorem Ipsum has been the industrys standard dummy text ever since the en an unknown printer galley dear.'
//         },
//     ]

//     renderItem({ id, url, title, content }) {
//         return (
//             <div className='Intro-Item' key={id}>
//                 <div className='Intro-ItemContentContainer'>
//                     <span className='Intro-ItemTitle'>{title}</span>
//                     <p className='Intro-ItemContent'>{content}</p>
//                 </div>
//                 <div className='Intro-ItemImage'>
//                     <img
//                         className='Intro-ItemImg'
//                         src={url}
//                         alt={`${title} icon`} 
//                     />
//                 </div>
//             </div>
//         );
//     }

//     renderItems() {
//         const { introList } = this;
      
//         return (
//             <div className='Intro-Items Split'>
//               { introList.map(this.renderItem) }
//             </div>
//         );
//     }


//     renderIntro() {
//         return (
//             <section className='Intro'>
//                 <div className='ContainerWrapper'>
//                     { this.renderItems() }
//                 </div>
//             </section>
//         );
//     }

//     render() {
//         return this.renderIntro();
//     }
// }

// export default Intro;
