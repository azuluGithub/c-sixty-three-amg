import { PureComponent } from 'react';
import { connect } from 'react-redux';

import GalleryPageComponent from './GalleryPage.component';
import { GALLERY_PAGE, GALLERY_PAGE_ROUTE } from './GalleryPage.config';
import { routeAction } from '../../store/Route/Route.action';
import { overlayAction } from '../../store/Overlay/Overlay.action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    routeAction: (route) => dispatch(routeAction(route)),
    overlayAction: (name) => dispatch(overlayAction(name)),
})

class GalleryPage extends PureComponent {

    setCurrentRoute() {
        const { routeAction } = this.props;
        
        const currentRoute = {
            name: GALLERY_PAGE,
            path: GALLERY_PAGE_ROUTE,
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
            <GalleryPageComponent />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);