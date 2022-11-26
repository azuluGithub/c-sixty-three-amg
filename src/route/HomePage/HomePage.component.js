import { PureComponent } from 'react';

import Banner from '../../component/Banner';
import Intro from '../../component/Intro';
import Welcome from '../../component/Welcome';
import OurLecturers from '../../component/OurLecturers';
import LatestNews from '../../component/LatestNews';
import NewsLetter from '../../component/NewsLetter';
import FooterDetails from '../../component/FooterDetails';
import Footer from '../../component/Footer';
import FeaturedCourses from '../../component/FeaturedCourses';
import HomeTotal from '../../component/HomeTotal';
import HomeStudents from '../../component/HomeStudents';
import Map from '../../component/Map';
import Testimonials from '../../component/Testimonials';

class HomePageComponent extends PureComponent {
    
    renderComponents() {
        return (
            <div>
                <Banner />
                <Intro />
                <Welcome />
                <FeaturedCourses />
                <OurLecturers />
                <LatestNews />
                <HomeTotal />
                <Testimonials />
                <HomeStudents />
                <NewsLetter />
                <Map />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderHome() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderHome();
    }
}

export default HomePageComponent;