import { PureComponent } from 'react';

import News from '../../component/News';
import Hero from '../../component/Hero';
import Footer from '../../component/Footer';
import FooterDetails from '../../component/FooterDetails';

class NewsPageComponent extends PureComponent {
    
    renderComponents() {
        const data = {
            heading: 'News',
            url: `${process.env.PUBLIC_URL}/assets/images/hero/news.jpg`
        }

        return (
            <div>
                <Hero data={data} />
                <News />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderNews() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderNews();
    }
}

export default NewsPageComponent;