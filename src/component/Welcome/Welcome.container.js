import { PureComponent } from 'react';

import WelcomeComponent from './Welcome.component';

class Welcome extends PureComponent {

    renderWelcome() {
        return (
            <WelcomeComponent />
        );
    }

    render() {
        return this.renderWelcome();
    }
}

export default Welcome;