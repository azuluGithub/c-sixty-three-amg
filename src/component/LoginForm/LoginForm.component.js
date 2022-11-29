import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './LoginForm.style.scss';

class LoginFormComponent extends PureComponent {

  state = {
    username: '',
    password: '',
  }

  renderTitle() {
    return (
      <p className='LoginForm-Title'>
        {'Login'}
      </p>
    );
  }

  checkForEmptyInputs() {
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleInputChange(e) {
    const { target: { name, value } } = e;

    this.setState({ [name]: value });
  }

  renderLoginFormForm() {
    const { username, password } = this.state;

    return (
      <div className='LoginForm-LoginFormForm'>
        { this.renderTitle() }
        <form className='LoginForm-Form' onSubmit={(e) => this.handleSubmit(e)}>
          <div className='FormInputContainer'>
            <label className='FormLabel'>{'Enter Username'}</label>
            <input 
              type='text' 
              className='FormInput'
              name='username' 
              value={username}
              placeholder='User Name'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className='FormInputContainer'>
            <label className='FormLabel'>{'Enter Password'}</label>
            <input 
              type='password'
              className='FormInput'
              name='password'
              value={password}
              placeholder='Password'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className='LoginForm-ButtonContainer'>
            <button
              type='submit'
              className='LoginForm-CancelButton Button'
            >{"Cancel"}</button>
            <button
              type='submit'
              className='LoginForm-LoginButton Button'
            >{"Login"}</button>
          </div>
          <Link className='Link' to='/auth/forgot'>
            <p className='FormSecondaryLink'>forgot password ?</p>
          </Link>
        </form>
      </div>
    );
  }

  renderLoginForm() {
    return (
      <div className='LoginForm'>
        { this.renderLoginFormForm() }
      </div>
    );
  }

  render() {
    return this.renderLoginForm();
  }
}

export default LoginFormComponent;