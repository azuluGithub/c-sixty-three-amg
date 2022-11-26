import { PureComponent } from 'react';

import HomeTotalComponent from './HomeTotal.component';

class HomeTotal extends PureComponent {

    renderHomeTotal() {
        return (
            <HomeTotalComponent />
        );
    }

    render() {
        return this.renderHomeTotal();
    }
}

export default HomeTotal;