import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AdminDashboardComponent from './AdminDashboard.component';
import { overlayAction } from '../../store/Overlay/Overlay.action';
import { routeAction } from '../../store/Route/Route.action';
import { ADMIN_PAGE, ADMIN_PAGE_ROUTE } from './AdminDashboard.config';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    overlayAction: (name) => dispatch(overlayAction(name)),
    routeAction: (route) => dispatch(routeAction(route)),
})

class AdminDashboard extends PureComponent {
    static propTypes = {
        overlayAction: PropTypes.func.isRequired,
        routeAction: PropTypes.func.isRequired,
    }

    state = {
        studentsCount: 0,
        lecturersCount: 0,
        staffCount: 0,
    }

    setCurrentRoute() {
        const { routeAction } = this.props;
        
        const currentRoute = {
            name: ADMIN_PAGE,
            path: ADMIN_PAGE_ROUTE,
        };

        routeAction(currentRoute);
    }

    fetchStudentsCount() {
        this.setState({ studentsCount: 350 }); //fetch from server
    }

    fetchLecturersCount() {
        this.setState({ lecturersCount: 34 }); //fetch from server
    }

    fetchStaffCount() {
        this.setState({ staffCount: 20 }); //fetch from server
    }

    componentDidMount() {
        this.closeOverLay();
        this.setCurrentRoute();
        this.fetchStudentsCount();
        this.fetchLecturersCount();
        this.fetchStaffCount();
    }

    componentDidUpdate(prevProps) {
        this.closeOverLay();
    }

    closeOverLay() {
        const { overlayAction } = this.props;

        return overlayAction('');
    }

    containerProps() {
        const { 
            lecturersCount, 
            studentsCount, 
            staffCount 
        } = this.state;

        return {
            lecturersCount,
            studentsCount,
            staffCount,
        }
    }

    containerFunctions() {
        return {};
    }

    renderComponent() {
        return (
            <AdminDashboardComponent
                { ...this.containerProps() }
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminDashboard);