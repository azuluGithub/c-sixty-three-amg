import { PureComponent } from 'react';

import './Welcome.style.scss';

class Welcome extends PureComponent {

    renderTitle() {    
        return (
            <p className='Welcome-Title'>
                {'Welcome to Mpumalanga College of Nursing'}
            </p>
        );
    }

    renderParagraph() {    
        return (
            <p className='Welcome-Paragraph'>
                {'Mpumalanga College of Nursing is a public nursing training college in Mpumalanga, South Africa with campus in Kabokweni, Mbombela.'}
            </p>
        );
    }

    renderImage() {
        const url = `${process.env.PUBLIC_URL}/assets/images/welcome/welcome.jpg`;

        return (
            <div className='Welcome-Image'>
                <img
                    className='Welcome-Img'
                    src={url} 
                    alt='graduating nursing students'
                />
            </div>
        );
    }

    renderComponents() {
        return (
          <section className='Welcome'>
            <div className='Welcome-WelcomeContainer TextCenter'>
                { this.renderTitle() }
                { this.renderParagraph()}
                { this.renderImage()}
            </div>
          </section>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default Welcome;