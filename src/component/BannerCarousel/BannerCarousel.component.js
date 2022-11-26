import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CSS from '../../util/CSS';

import './BannerCarousel.style.scss';

class BannerCarouselComponent extends PureComponent {
    static propTypes = {
        gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    numberOfItems = 0;

    state = {
        activeSlide: 0,
    }

    componentDidMount() {
        const { bannerSliderWrapperRef, gallery } = this.props;

        this.numberOfItems = gallery.length;
        CSS.setVariable(bannerSliderWrapperRef, 'gallery-items-length', this.numberOfItems);
    }

    renderImageSlide(url) {
        return (
            <div
                className='BannerCarousel-ImageSlide'
                key={url}
            >
                <img src={url} alt='mpumalanga nursing college gallery' />
            </div>
        );
    }

    renderSliderList() {
        const { gallery } = this.props;

        return gallery && gallery.map((url) => this.renderImageSlide(url));
    }

    setActiveSlide(pos) {
        const { bannerSliderWrapperRef } = this.props;

        this.setState({ activeSlide: pos });

        CSS.setVariable(bannerSliderWrapperRef, 'gallery-slider-x-position', pos);
    }

    renderSliderSelector(url, pos) {
        const { activeSlide } = this.state;
        const isActiveClass = pos === activeSlide && 'BannerCarousel-SliderSelector_isActive';

        return (
            <div
                onClick={() => this.setActiveSlide(pos)}
                className={`BannerCarousel-SliderSelector ${isActiveClass}`}
                key={url}
            >
            </div>
        );
    }

    renderSliderSelectors() {
        const { gallery } = this.props;

        if (!gallery.length) {
            return ;
        }

        return gallery.map((url, pos) => this.renderSliderSelector(url, pos));
    }

    renderGallerySlider() {
        const { bannerSliderWrapperRef } = this.props;

        return (
            <div className='BannerCarousel-Slider'>
                <div
                    ref={bannerSliderWrapperRef}
                    className='BannerCarousel-SliderWrapper'
                >
                    { this.renderSliderList() }
                </div>
                <div className='BannerCarousel-SliderSelectors'>
                    { this.renderSliderSelectors() }
                </div>
            </div>
        );
    }

    renderBannerCarousel() {
        return (
            <div className='BannerCarousel'>
              { this.renderGallerySlider() }
            </div>
        );
    }

    render() {
        return this.renderBannerCarousel();
    }
}

export default BannerCarouselComponent;