import { cloneElement, PureComponent, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loader from '../Loader';
import Header from '../Header';
import Nav from '../Nav';
import HomePage from '../../route/HomePage';
import NoMatch from '../../route/NoMatch';
import AboutPage from '../../route/AboutPage';
import ContactPage from '../../route/ContactPage';
import GalleryPage from '../../route/GalleryPage';
import CoursesPage from '../../route/CoursesPage';
import NewsPage from '../../route/NewsPage';
import SignIn from '../../route/SignIn';
import SignUp from '../../route/SignUp';
import AdminDashboard from '../../route/AdminDashboard';
import StudentDashboard from '../../route/StudentDashboard';
import LecturerDashboard from '../../route/LecturerDashboard';

import { TOP_ELEMENTS, MAIN_ELEMENTS } from './Router.config';

class RouterComponent extends PureComponent {

  [TOP_ELEMENTS] = [
    { component: <Nav key='Nav'/> },
    { component: <Header key='header'/> },
  ];

  [MAIN_ELEMENTS] = [
    { component: <Route exact path="/" component={HomePage} key='home'/> },
    { component: <Route path="/about" component={AboutPage} key='about'/> },
    { component: <Route path="/gallery" component={GalleryPage} key='gallery'/> },
    { component: <Route path="/news" component={NewsPage} key='news'/> },
    { component: <Route path="/courses" component={CoursesPage} key='courses'/> },
    { component: <Route path="/contact" component={ContactPage} key='contact'/> },
    { component: <Route path="/auth/sign-in" component={SignIn} key='signin'/> },
    { component: <Route path="/auth/sign-up" component={SignUp} key='signup'/> },
    { component: <Route path="/contact" component={ContactPage} key='contact'/> },
    { component: <Route path="/admin" exact component={AdminDashboard} key='admin-dashboard'/> },
    { component: <Route path="/student" exact component={StudentDashboard} key='student-dashboard'/> },
    { component: <Route path="/lecturer" exact component={LecturerDashboard} key='lecturer-dashboard'/> },
    { component: <Route component={NoMatch} key='nomatch'/> },
  ];

  renderElements(ELEMENTS) {
    return this[ELEMENTS].map(({ component }) => cloneElement(component));
  }

  renderLoader() {
    return <Loader />;
  }

  renderMainElements() {
    return (
      <Suspense fallback={this.renderLoader()}>
        <Switch>
          { this.renderElements(MAIN_ELEMENTS) }
        </Switch>
      </Suspense>
    );
  }

  renderRouter() {
    return (
      <BrowserRouter>
        { this.renderElements(TOP_ELEMENTS) }
        { this.renderMainElements() }
      </BrowserRouter>
    );
  }

  render() {
    return this.renderRouter();
  }
}

export default RouterComponent;
