import { PureComponent } from 'react';

import './GalleryTab.style.scss';

class GalleryTab extends PureComponent {

    renderGallery(gallery) {
        const { id, name } = gallery;
        const isActiveGallery = id === 'all' && 'GalleryTab-Gallery_Active';

        return (
            <div className={`GalleryTab-Gallery ${isActiveGallery}`} key={id}>
                <span className='GalleryTab-GalleryName'>{name}</span>
            </div>
        );
    }

    renderTab() {
        const { gallery } = this.props;

        return (
            <div className='GalleryTab'>
                <div className='GalleryTab-Container ContainerWrapper'>
                    { gallery.map(this.renderGallery) }
                </div>
            </div>
        );
    }

    render() {
        return this.renderTab();
    }
}

export default GalleryTab;