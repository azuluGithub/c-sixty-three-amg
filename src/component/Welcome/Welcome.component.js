import { useEffect, useState } from "react";

import './Welcome.style.scss';

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

const Welcome = () => {
    const [ setRef, isVisible ] = useOnScreen({ threshold: 0.3 });

    const renderTitle = () => {
        const toggleTitle = isVisible ? 'Welcome-Title_Appear': 'Welcome-Title_FadeIn';

        return (
            <p className={`Welcome-Title ${toggleTitle}`}>
                {'Welcome to Mpumalanga College of Nursing'}
            </p>
        );
    }
    
    const renderParagraph = () => {
        const toggleParagraph = isVisible ? 'Welcome-Paragraph_Appear': 'Welcome-Paragraph_FadeIn';
        
        return (
            <p className={`Welcome-Paragraph ${toggleParagraph}`}>
                {'Mpumalanga College of Nursing is a public nursing training college in Mpumalanga, South Africa with campus in Kabokweni, Mbombela.'}
            </p>
        );
    }

    const renderImage = () => {
        const url = `${process.env.PUBLIC_URL}/assets/images/welcome/welcome.jpg`;
        const toggleImage = isVisible ? 'Welcome-Image_Appear': 'Welcome-Image_FadeIn';
        
        return (
            <div className={`Welcome-Image ${toggleImage}`}>
                <img
                    className='Welcome-Img'
                    src={url} 
                    alt='graduating nursing students'
                />
            </div>
        );
    }

    return (
        <section ref={setRef} className='Welcome'>
             <div className='Welcome-WelcomeContainer TextCenter'>
                 { renderTitle() }
                 { renderParagraph()}
                 { renderImage()}
             </div>
        </section>
    );
}

export default Welcome;





// import { PureComponent } from 'react';

// import './Welcome.style.scss';

// class Welcome extends PureComponent {

//     renderTitle() {    
//         return (
//             <p className='Welcome-Title'>
//                 {'Welcome to Mpumalanga College of Nursing'}
//             </p>
//         );
//     }

//     renderParagraph() {    
//         return (
//             <p className='Welcome-Paragraph'>
//                 {'Mpumalanga College of Nursing is a public nursing training college in Mpumalanga, South Africa with campus in Kabokweni, Mbombela.'}
//             </p>
//         );
//     }

//     renderImage() {
//         const url = `${process.env.PUBLIC_URL}/assets/images/welcome/welcome.jpg`;

//         return (
//             <div className='Welcome-Image'>
//                 <img
//                     className='Welcome-Img'
//                     src={url} 
//                     alt='graduating nursing students'
//                 />
//             </div>
//         );
//     }

//     renderComponents() {
//         return (
//           <section className='Welcome'>
//             <div className='Welcome-WelcomeContainer TextCenter'>
//                 { this.renderTitle() }
//                 { this.renderParagraph()}
//                 { this.renderImage()}
//             </div>
//           </section>
//         );
//     }

//     render() {
//         return this.renderComponents();
//     }
// }

// export default Welcome;