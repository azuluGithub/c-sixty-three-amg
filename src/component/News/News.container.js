import { PureComponent } from 'react';

import NewsComponent from './News.component';

class News extends PureComponent {

    renderComponent() {
        return (
            <NewsComponent />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default News;