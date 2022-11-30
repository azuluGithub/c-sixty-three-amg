import { PureComponent } from 'react';
import { connect } from 'react-redux';

import StudentTopBarComponent from './StudentTopBar.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class StudentTopBar extends PureComponent {

    containerProps() {}

    containerFunctions() {}

    renderComponent() {
        return (
            <StudentTopBarComponent
                { ...this.containerProps() }
                { ...this.containerFunctions() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentTopBar);