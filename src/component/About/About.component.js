import { PureComponent } from 'react';

import './About.style.scss';

class AboutComponent extends PureComponent {

  renderContent() {
    return (
      <div className='About-Content'>
        <div className='About-ContentContainer'>
            <div className='About-Heading'>
              <span className='About-ContentHeading'>{'Who We Are'}</span>
              <p className='About-ContentParagrph'>
                {'Mpumalanga '} 
                <strong>{'College of Nursing '}</strong> 
                {'is a public nursing training college in Mpumalanga, South Africa with campus in Kabokweni, Mbombela.'}
              </p>
            </div>
            <div className='About-Heading'>
              <span className='About-ContentHeading'>{'What We Do'}</span>
              <p className='About-ContentParagrph'>
                {'Mpumalanga '} 
                <strong>{'College of Nursing '}</strong> 
                {'is a public nursing training college in Mpumalanga, South Africa with campus in Kabokweni, Mbombela.'}
              </p>
            </div>
            
        </div>
      </div>
    );
  }

  renderImage() {
    const AboutImg = `${process.env.PUBLIC_URL}/assets/images/banner/banner-img-3.jpg`;
    
    return (
      <div className='About-Image'>
        <div className='About-ImageContainer'>
          <img 
              className='About-Img' 
              src={AboutImg} 
              alt='nursing college students' 
          /> 
        </div>
      </div>
    );
  }

  renderComponents() {
    return (
      <div className='Split About-Components'>
        { this.renderContent() }
        { this.renderImage() }
      </div>
    );
  }

  renderAbout() {
    return (
      <section className='About'>
        <div className='ContainerWrapper'>
          { this.renderComponents() }
        </div>
      </section>
    );
  }

  render() {
    return this.renderAbout();
  }
}

export default AboutComponent;