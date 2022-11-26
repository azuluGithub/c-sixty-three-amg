import { PureComponent } from 'react';

import './Footer.style.scss';

class FooterComponent extends PureComponent {

  imgUrl = '/assets/icons/copyright/copyright-icon.png';

  renderText() {
    return (
      <div className='Footer-TextContainer'>
        <p className='Footer-Text'>
          {'2022'}
          <span className='Footer-TextName'>
            {' Mpumalanga College of Nursing.'}
          </span>
          {' All Rights Reserved.'}
        </p>
      </div>
    );
  }

  renderCopyright() {
    return (
      <div className='Footer-Image'>
        <img 
            className='Footer-CopyrightImg' 
            src={this.imgUrl} 
            alt='copyright icon' 
        /> 
      </div>
    );
  }

  renderComponents() {
    return (
      <div className='Footer-Components'>
        { this.renderCopyright() }
        { this.renderText() }
      </div>
    );
  }

  renderSpacer() {
    return (
      <div className='Footer-Spacer'></div>
    );
  }

  renderFooter() {
    return (
      <footer className='Footer'>
        <div className='ContainerWrapper'>
          { this.renderSpacer() }
          <div className='Footer-FooterContainer'>
            { this.renderComponents() }
          </div>
        </div>
      </footer>
    );
  }

  render() {
    return this.renderFooter();
  }
}

export default FooterComponent;