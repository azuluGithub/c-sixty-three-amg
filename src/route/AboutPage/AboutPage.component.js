import { PureComponent } from 'react';

import About from '../../component/About';
import Hero from '../../component/Hero';
import Footer from '../../component/Footer';
import FooterDetails from '../../component/FooterDetails';

class AboutPageComponent extends PureComponent {
    
    renderComponents() {
        const data = {
            heading: 'About Us',
            url: `${process.env.PUBLIC_URL}/assets/images/courses/biotechologist.jpg`,
        }

        return (
            <div>
                <Hero data={data} />
                <About />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderAbout() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderAbout();
    }
}

export default AboutPageComponent;