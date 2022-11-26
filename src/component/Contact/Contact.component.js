import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './Contact.style.scss';

class ContactComponent extends PureComponent {

  state = {
    userName: '',
    userEmail: '',
    subject: '',
    message: '',
  }

  socialsList= [
    {
        id: 'social-email',
        icon: `${process.env.PUBLIC_URL}/assets/icons/social/email-icon.png`,
        name: 'email',
    },
    {
        id: 'social-facebook',
        icon: `${process.env.PUBLIC_URL}/assets/icons/social/facebook-icon.png`,
        name: 'facebook',
    },
    {
        id: 'social-linkedin',
        icon: `${process.env.PUBLIC_URL}/assets/icons/social/linkedin-icon.png`,
        name: 'linkedin',
    },
    {
        id: 'social-twitter',
        icon: `${process.env.PUBLIC_URL}/assets/icons/social/twitter-icon.png`,
        name: 'twitter',
    },
  ]

  renderTitle() {
    return (
      <p className='Contact-Title'>
        {'Contact Us'}
      </p>
    );
  }

  renderImage() {
    const Img = '/assets/images/contact/contact.png';

    return (
      <div className='Contact-Image'>
        <img 
            className='Contact-Img' 
            src={Img} 
            alt='college of nursing student' 
        /> 
      </div>
    );
  }

  renderSocialItem({ id, img, url }) {
    return (
      <Link to={url} className='Link Contact-SocialsImage' key={id}>
        <img 
            className='Contact-SocialsImg' 
            src={img} 
            alt='theFrangipani product' 
        /> 
      </Link>
    );
  }

  renderSocial({ icon, id }) {
    return (
      <div className='Contact-SocialImage' key={id}>
        <img 
            className='Contact-SocialImg' 
            src={icon} 
            alt='nursing college social contact' 
        /> 
      </div>
    );
  }

  renderSocials() {
    const { socialsList } = this;

    return (
        <div className='Contact-SocialContainer'>
          { socialsList.map((social) => this.renderSocial(social)) }
        </div>
    );
  }

  renderInfo() {
    const phone = `${process.env.PUBLIC_URL}/assets/icons/social/phone-icon.png`;
    const email = `${process.env.PUBLIC_URL}/assets/icons/social/email-icon.png`;
    const location = `${process.env.PUBLIC_URL}/assets/icons/social/location-icon.png`;

    return (
      <div className='Contact-Info'>

        <div className='Contact-InfoItem'>
          <div className='Contact-InfoItemDetail'>
            <p className='Contact-InfoItemKey'>{'Phone'}</p>
            <p className='Contact-InfoItemValue'>{'013 796 1352'}</p>
          </div>
          <div className='Contact-InfoItemImage'>
            <img 
                className='Contact-InfoItemImg' 
                src={phone} 
                alt='college of nursing contact' 
            /> 
          </div>
        </div>

        <div className='Contact-InfoItem'>
          <div className='Contact-InfoItemDetail'>
            <p className='Contact-InfoItemKey'>{'Address'}</p>
            <p className='Contact-InfoItemValue'>{'Themba Hospital Road, 1245, Kabokweni'}</p>
          </div>
          <div className='Contact-InfoItemImage'>
            <img 
                className='Contact-InfoItemImg' 
                src={location} 
                alt='college of nursing contact' 
            /> 
          </div>
        </div>

        <div className='Contact-InfoItem'>
          <div className='Contact-InfoItemDetail'>
            <p className='Contact-InfoItemKey'>{'Email'}</p>
            <p className='Contact-InfoItemValue'>{'mpumalangagovhealth@gmail.com'}</p>
          </div>
          <div className='Contact-InfoItemImage'>
            <img 
                className='Contact-InfoItemImg' 
                src={email} 
                alt='college of nursing contact' 
            /> 
          </div>
        </div>

        <div className='Contact-InfoItem'>
          <div className='Contact-InfoItemDetail'>
            <p className='Contact-InfoItemKey'>{'Follow Us'}</p>
            { this.renderSocials() }
          </div>
        </div>

      </div>
    );
  }

  checkForEmptyInputs() {
    const { userName, userEmail, subject, message } = this.state;
    
    if (!userName.trim().length || !userEmail.trim().length || !subject.trim().length || !message.trim().length) {
    
      return false;
    }

    return true;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.checkForEmptyInputs()) {
      return ;
    }

  }

  handleInputChange(e) {
    const { target: { name, value } } = e;

    this.setState({ [name]: value });
  }

  renderContactForm() {
    const { userName, userEmail, subject, message } = this.state;

    return (
      <div className='Contact-ContactForm'>
        { this.renderTitle() }
        <div className='Contact-Divider'></div>
        <form className='Contact-Form' onSubmit={(e) => this.handleSubmit(e)}>
          <div className='FormInputContainer'>
            <input 
              type='text' 
              className='FormInput' 
              name='userName' 
              value={userName}
              placeholder='Enter your name'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className='FormInputContainer'>
            <input 
              type='email' 
              className='FormInput' 
              name='userEmail' 
              value={userEmail}
              placeholder='Enter email'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className='FormInputContainer'>
            <input 
              type='text' 
              className='FormInput' 
              name='subject' 
              value={subject}
              placeholder='Enter Subject'
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>
          <div className='FormInputContainer'>
            <textarea 
              className='Contact-TextArea FormTextArea'
              name='message'
              value={message}
              placeholder='Type here...'
              onChange={(e) => this.handleInputChange(e)}
            ></textarea>
          </div>
          <button
            type='submit'
            className='Contact-Button Button'
          >{"Send Message"}</button>
        </form>
      </div>
    );
  }

  renderComponents() {
    return (
      <div className='Split'>
        { this.renderInfo() }
        { this.renderContactForm() }
      </div>
    );
  }

  renderContact() {
    return (
      <section className='Contact PaddedContainer'>
        <div className='ContainerWrapper'>
          { this.renderComponents() }
        </div>
      </section>
    );
  }

  render() {
    return this.renderContact();
  }
}

export default ContactComponent;