import { PureComponent } from 'react';

import GalleryTabComponent from './GalleryTab.component';

class GalleryTab extends PureComponent {

    gallery = [
        {
            id: 'all',
            name: 'All',
        },
        {
            id: 'gallery 2',
            name: 'library',
        },
        {
            id: 'gallery 3',
            name: 'room',
        },
        {
            id: 'gallery 4',
            name: 'class',
        },
        {
            id: 'gallery 4',
            name: 'campus',
        },
    ];

    containerProps() {
        const { gallery } = this;

        return {
            gallery
        }
    }

    containerFunctions() {}

    renderGalleryTab() {
        return (
            <GalleryTabComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderGalleryTab();
    }
}

export default GalleryTab;
