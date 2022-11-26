import { createRef, PureComponent } from 'react';

import TypeWriterEffect from '../TypeWriterEffect';
import BannerCarousel from '../BannerCarousel';

import './Banner.style.scss';

class BannerComponent extends PureComponent {
  
  bannerSliderWrapperRef = createRef();

  gallery = [
     `${process.env.PUBLIC_URL}/assets/images/banner/banner-img-1.jpg`,
     `${process.env.PUBLIC_URL}/assets/images/banner/banner-img-2.jpg`,
     `${process.env.PUBLIC_URL}/assets/images/banner/banner-img-3.jpg`,
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
        <h2 className='Banner-ContentHeading'>
          <TypeWriterEffect
            text={['THE BEST NURSING COLLEGE', 'TOP NURSING COLLEGE',  'JOIN ACADEMIC EXCELLENCE', 'PRESTIGIOUS NURSING COLLEGE']}
          />
        </h2>
        <p className='Banner-ContentText'>
          {'Mpumalanga College of Nursing is a public nursing training college in Mpumalanga, South Africa with campus in Kabokweni, Mbombela.'}
        </p>
        <button className='Banner-ContentButton Button'>{'START A COURSE'}</button>
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