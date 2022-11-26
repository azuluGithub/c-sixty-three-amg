import { PureComponent } from 'react';

import './Gallery.style.scss';

class GalleryComponent extends PureComponent {

    renderGallery(gallery) {
        const { id, url } = gallery;
        
        return (
            <div className='Gallery-GalleryImage' key={id}>
                <img 
                    className='Gallery-GalleryImg' 
                    src={url} 
                    alt='nursing college gallery' 
                />
            </div>
        );
    }

    renderContent() {
        const { gallery } = this.props;

        return (
            <div className='Gallery-Container'>
                { gallery.map(this.renderGallery) }
            </div>
        );
    }

    renderComponents() {
        return (
            <section className='Gallery'>
                <div className='ContainerWrapper PaddedContainer'>
                    { this.renderContent() }
                </div>
            </section>
        );
    }

    render() {
        return this.renderComponents();
    }
}

export default GalleryComponent;