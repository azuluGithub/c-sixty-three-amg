import { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import FooterDetailsComponent from './FooterDetails.component';

class FooterDetails extends PureComponent {

    renderFooterDetails() {
        const { location: { pathname } } = this.props;

        if (
            pathname.includes('/cart')
            || pathname.includes('/shop')
            || pathname.includes('/product')
            || pathname.includes('/auth/sign-in')
            || pathname.includes('/auth/sign-up')
            || pathname.includes('/auth/forgot')
            || pathname.includes('/auth/verify')
            || pathname.includes('/auth/reset')
            || pathname.includes('/admin')
            || pathname.includes('/user')
            || pathname.includes('/checkout')
            ) {
            return <Fragment></Fragment>;
        }

        return (
            <FooterDetailsComponent />
        );
    }

    render() {
        return this.renderFooterDetails();
    }
}

export default withRouter(FooterDetails);