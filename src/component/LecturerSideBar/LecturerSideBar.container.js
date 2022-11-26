import { PureComponent } from 'react';
import { connect } from 'react-redux';

import LecturerSideBarComponent from './LecturerSideBar.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class LecturerSideBar extends PureComponent {

    containerProps() {}

    containerFunctions() {}

    renderComponent() {
        return (
            <LecturerSideBarComponent
                { ...this.containerProps() }
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LecturerSideBar);