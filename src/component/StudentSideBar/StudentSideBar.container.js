import { PureComponent } from 'react';
import { connect } from 'react-redux';

import StudentSideBarComponent from './StudentSideBar.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class StudentSideBar extends PureComponent {

    containerProps() {}

    containerFunctions() {}

    renderComponent() {
        return (
            <StudentSideBarComponent
                { ...this.containerProps() }
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentSideBar);