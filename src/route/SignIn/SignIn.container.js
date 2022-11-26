import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignInComponent from './SignIn.component';
import { overlayAction } from '../../store/Overlay/Overlay.action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    overlayAction: (name) => dispatch(overlayAction(name)),
})

class SignIn extends PureComponent {
    static propTypes = {
        overlayAction: PropTypes.func.isRequired,
    }
    componentDidMount() {
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
            <SignInComponent />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SignIn);