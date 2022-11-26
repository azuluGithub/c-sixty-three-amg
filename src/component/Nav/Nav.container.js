import { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavComponent from './Nav.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class Nav extends PureComponent {
    
    renderComponent() {
        const { location: { pathname } } = this.props;

        if (pathname.includes('/admin')
        || pathname.includes('/lecturer')
        || pathname.includes('/student')
        ) {
            return <Fragment></Fragment>;
        }

        return (
            <NavComponent />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));