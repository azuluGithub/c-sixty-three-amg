import { PureComponent } from 'react';
import { connect } from 'react-redux';

import AdminSideBarComponent from './AdminSideBar.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class AdminSideBar extends PureComponent {

    containerProps() {}

    containerFunctions() {}

    renderComponent() {
        return (
            <AdminSideBarComponent
                { ...this.containerProps() }
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSideBar);