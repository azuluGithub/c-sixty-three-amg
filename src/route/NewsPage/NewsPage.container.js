import { PureComponent } from 'react';
import { connect } from 'react-redux';

import NewsPageComponent from './NewsPage.component';
import { NEWS_PAGE, NEWS_PAGE_ROUTE } from './NewsPage.config';
import { routeAction } from '../../store/Route/Route.action';
import { overlayAction } from '../../store/Overlay/Overlay.action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    routeAction: (route) => dispatch(routeAction(route)),
    overlayAction: (name) => dispatch(overlayAction(name)),
})

class NewsPage extends PureComponent {

    setCurrentRoute() {
        const { routeAction } = this.props;
        
        const currentRoute = {
            name: NEWS_PAGE,
            path: NEWS_PAGE_ROUTE,
        };

        routeAction(currentRoute);
    }

    componentDidMount() {
        this.setCurrentRoute();
        this.closeOverLay();
    }

    componentDidUpdate(prevProps) {
        this.closeOverLay();
    }

    closeOverLay() {
        const { overlayAction } = this.props;

        return overlayAction('');
    }

    renderComponent() {
        return (
            <NewsPageComponent />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);