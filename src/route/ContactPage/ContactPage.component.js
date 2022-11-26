import { PureComponent } from 'react';

import Contact from '../../component/Contact';
import Hero from '../../component/Hero';
import Footer from '../../component/Footer';
import Map from '../../component/Map';
import FooterDetails from '../../component/FooterDetails';

class ContactPageComponent extends PureComponent {
    
    renderComponents() {
        const data = {
            heading: 'Contact',
            url: `${process.env.PUBLIC_URL}/assets/images/hero/phone.jpg`
        }

        return (
            <div>
                <Hero data={data} />
                <Contact />
                <Map />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderContact() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderContact();
    }
}

export default ContactPageComponent;