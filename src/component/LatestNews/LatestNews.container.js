import { PureComponent } from 'react';

import LatestNewsComponent from './LatestNews.component';

class LatestNews extends PureComponent {

    renderComponent() {
        return (
            <LatestNewsComponent />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default LatestNews;