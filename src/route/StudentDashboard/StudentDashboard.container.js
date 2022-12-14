import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StudentDashboardComponent from './StudentDashboard.component';
import { overlayAction } from '../../store/Overlay/Overlay.action';
import { routeAction } from '../../store/Route/Route.action';
import { STUDENT_PAGE, STUDENT_PAGE_ROUTE } from './StudentDashboard.config';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    overlayAction: (name) => dispatch(overlayAction(name)),
    routeAction: (route) => dispatch(routeAction(route)),
})

class StudentDashboard extends PureComponent {
    static propTypes = {
        overlayAction: PropTypes.func.isRequired,
        routeAction: PropTypes.func.isRequired,
    }

    setCurrentRoute() {
        const { routeAction } = this.props;
        
        const currentRoute = {
            name: STUDENT_PAGE,
            path: STUDENT_PAGE_ROUTE,
        };

        routeAction(currentRoute);
    }


    componentDidMount() {
        this.closeOverLay();
        this.setCurrentRoute();
    }

    componentDidUpdate(prevProps) {
        this.closeOverLay();
    }

    closeOverLay() {
        const { overlayAction } = this.props;

        return overlayAction('');
    }

    containerProps() {}

    containerFunctions() {}

    renderComponent() {
        return (
            <StudentDashboardComponent
                { ...this.containerProps() }
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (StudentDashboard);