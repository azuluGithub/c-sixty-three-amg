import { PureComponent } from 'react';

import Courses from '../../component/Courses';
import FooterDetails from '../../component/FooterDetails';
import Hero from '../../component/Hero';
import Footer from '../../component/Footer';
import CoursesTab from '../../component/CoursesTab';

class CoursesPageComponent extends PureComponent {
    
    renderComponents() {
        const data = {
            heading: 'Courses',
            url: `${process.env.PUBLIC_URL}/assets/images/hero/courses.jpg`
        }

        return (
            <div>
                <Hero data={data} />
                <CoursesTab />
                <Courses />
                <FooterDetails />
                <Footer />
            </div>
        )
    }

    renderCourses() {
        return (
            <main>
                { this.renderComponents() }
            </main>
        );
    }

    render() {
        return this.renderCourses();
    }
}

export default CoursesPageComponent;