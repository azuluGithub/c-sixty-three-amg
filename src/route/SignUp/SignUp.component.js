import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class SignUpComponent extends PureComponent {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpassword: '',
  }

  renderTitle() {
    return (
      <h2 className='FormTitle'>
        {'Sign Up'}
      </h2>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
  }
    
  renderForm() {
    const { firstName, lastName, email, password, cpassword } = this.state;

    return (
      <div className='FormContainer'>
        { this.renderTitle() }
        <form className='SignUp-Form' onSubmit={(e) => this.handleSubmit(e)}>
          <div className='FormInputContainer'>
            <p className='FormLabel'>{"first Name"}</p>
            <input 
              type='text' 
              className='FormInput' 
              name= 'firstName' 
              value= {firstName}
              placeholder='e.g Jon'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className='FormInputContainer'>
            <p className='FormLabel'>{"Last Name"}</p>
            <input 
              type='text' 
              className='FormInput' 
              name='lastName' 
              value={lastName}
              placeholder='e.g Snow'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
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
          <div className='FormInputContainer'>
            <p className='FormLabel'>{"Confirm Password"}</p>
            <input 
              type='password' 
              className='FormInput' 
              name='cpassword' 
              value={cpassword}
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
          <Link className='Link' to='/auth/sign-in'>
            <p className='FormDefaultLink'>Log in to your account</p>
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

export default SignUpComponent;