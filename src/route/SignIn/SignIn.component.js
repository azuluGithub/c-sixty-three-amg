import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class SignInComponent extends PureComponent {
  state = {
    email: '',
    password: '',
  }

  renderTitle() {
    return (
      <h2 className='FormTitle'>
        {'Sign In'}
      </h2>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
  }
    
  renderForm() {
    const { email, password } = this.state;

    return (
      <div className='FormContainer'>
        { this.renderTitle() }
        <form className='SignIn-Form' onSubmit={(e) => this.handleSubmit(e)}>
          <div className='FormInputContainer'>
            <p className='FormLabel'>{"Email"}</p>
            <input 
              type='email' 
              className='FormInput' 
              name='email' 
              value={email}
              placeholder='e.g jonsnow@gmail.com'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className='FormInputContainer'>
            <p className='FormLabel'>{"Password"}</p>
            <input 
              type='password' 
              className='FormInput' 
              name='password' 
              value={password}
              placeholder='e.g @j0n5n0W'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className='FormButtonContainer'>
            <button
              type='submit'
              className='FormButton Button'
            >{"Sign Up"}</button>
          </div>
          <Link className='Link' to='/auth/sign-up'>
            <p className='FormDefaultLink'>Create new account</p>  
          </Link>
          <Link className='Link' to='/auth/forgot'>
            <p className='FormSecondaryLink'>forgot password ?</p>
          </Link>
        </form>
      </div>
    );
  }

  renderComponent() {
    return (
      <main>
        <div className='ContainerWrapper FormMainBox'>
          { this.renderForm() }
        </div>
      </main>
    );
  }

  render() {
    return this.renderComponent();
  }
}

export default SignInComponent;