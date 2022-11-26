import { PureComponent } from 'react';

import './Logo.style.scss';

class LogoComponent extends PureComponent {
    
    renderLogo() {
        const logoLogo = `${process.env.PUBLIC_URL}/assets/logo/logoLogo.png`;
        const logoText = `${process.env.PUBLIC_URL}/assets/logo/logoText.png`;

        return (
            <div className='Logo'>
                <img
                    className='Logo-Logo'
                    src={logoLogo} 
                    alt='mpumalanga college logo'
                />
                <img
                    className='Logo-Text'
                    src={logoText} 
                    alt='mpumalanga college logo'
                />
            </div>
        );
    }

    render() {
        return this.renderLogo();
    }
}

export default LogoComponent;