import { PureComponent } from 'react';

import GalleryComponent from './Gallery.component';

class Gallery extends PureComponent {

    gallery = [
        {
            id: 'Anesthesiologists',
            url: '/assets/images/courses/anaestheticist.jpg',
        },
        {
            id: 'lecturer2',
            url: '/assets/images/our-teachers/teacher-2.jpg',
        },
        {
            id: 'gerontologist',
            url: '/assets/images/courses/geriontology.jpg',
        },
        {
            id: 'lecturer3',
            url: '/assets/images/our-teachers/teacher-3.jpg',
        },
        {
            id: 'biotechologist',
            url: '/assets/images/courses/biotechologist.jpg',
        },
        {
            id: 'lecturer4',
            url: '/assets/images/our-teachers/teacher-4.jpg',
        },
        {
            id: 'physiotherapist',
            url: '/assets/images/courses/physiotherapist.jpg',
        },
        {
            id: 'lecturer1',
            url: '/assets/images/our-teachers/teacher-1.jpg',
        },
    ];

    containerProps() {
        const { gallery } = this;

        return {
            gallery
        }
    }

    containerFunctions() {}

    renderComponent() {
        return (
            <GalleryComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default Gallery;