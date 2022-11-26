import { PureComponent } from 'react';

import Gallery from '../../component/Gallery';
import Hero from '../../component/Hero';
import Footer from '../../component/Footer';
import GalleryTab from '../../component/GalleryTab';
import FooterDetails from '../../component/FooterDetails';

class GalleryPageComponent extends PureComponent {
    
    renderComponents() {
        const data = {
            heading: 'Gallery',
            url: `${process.env.PUBLIC_URL}/assets/images/hero/gallery.jpg`
        }

        return (
            <div>
                <Hero data={data} />
                <GalleryTab />
                <Gallery />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderGallery() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderGallery();
    }
}

export default GalleryPageComponent;