import { createRef, PureComponent } from 'react';

import BannerCarousel from '../BannerCarousel';

import './Banner.style.scss';

class BannerComponent extends PureComponent {
  
  bannerSliderWrapperRef = createRef();

  gallery = [
     `${process.env.PUBLIC_URL}/assets/images/banner/banner-img-3.jpg`,
     `${process.env.PUBLIC_URL}/assets/images/banner/banner-img-2.jpg`,
     `${process.env.PUBLIC_URL}/assets/images/banner/banner-img-1.jpg`,
  ];

  renderBannerCarousel() {
    const { gallery, bannerSliderWrapperRef } = this;
    
    return (
      <BannerCarousel 
        gallery={gallery}
        bannerSliderWrapperRef={bannerSliderWrapperRef}
      />
    );
  }

  renderContent() {
    return (
      <div className='Banner-Content'>
        <h2 data-text='LIGHT¬BREEDS¬WISDOM' className='Banner-ContentHeading'>
          {'LIGHT¬BREEDS¬WISDOM'}
        </h2>
        {/* <h2 data-text='LIGHT✶BREEDS♡WISDOM' className='Banner-ContentHeading'> */}
          {/* {'LIGHT✶BREEDS♡WISDOM'} */}
        {/* </h2> */}
        <p className='Banner-ContentText'>
          {'Mpumalanga College of Nursing is a public nursing training college in Mpumalanga, South Africa with campus in Kabokweni, Mbombela.'}
        </p>
        <div className='Banner-ButtonContainer'>
          <button className='Banner-ContentButton Button'>{'START A COURSE'}</button>
        </div>
      </div>
    );
  }

  renderBanner() {
    return (
      <section className='Banner'>
        { this.renderBannerCarousel() }
        { this.renderContent() }
      </section>
    );
  }

  render() {
    return this.renderBanner();
  }
}

export default BannerComponent;