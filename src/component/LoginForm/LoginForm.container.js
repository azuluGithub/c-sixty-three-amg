import { PureComponent } from 'react';

import LoginFormComponent from './LoginForm.component';

class LoginForm extends PureComponent {

    renderLoginForm() {
        return (
            <LoginFormComponent />
        );
    }

    render() {
        return this.renderLoginForm();
    }
}

export default LoginForm;