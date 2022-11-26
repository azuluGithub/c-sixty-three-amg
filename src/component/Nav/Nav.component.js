import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './Nav.style.scss';

class NavComponent extends PureComponent {

    contactList = [
        {
            id: 'phone',
            name: '013 796 1352',
            icon: `${process.env.PUBLIC_URL}/assets/icons/social/phone-icon.png`,
        },
        {
            id: 'email',
            name: 'mpumalangagovhealth@gmail.com',
            icon: `${process.env.PUBLIC_URL}/assets/icons/social/email-icon.png`,
        }
    ];

    renderContactItem({ id, name, icon }) {
        return (
          <div className='Nav-Contact' key={id}>
            <div className='Nav-ContactImage' key={id}>
                <img 
                    className='Nav-ContactImg' 
                    src={icon} 
                    alt={`${id} details`}
                />
            </div>
            <span className='Nav-ContactName'>{name}</span>
          </div>
        );
      }

    renderContacts() {
        const { contactList } = this;

        return (
            <div className='Nav-Contacts'>
                { contactList.map(this.renderContactItem) }
            </div>
        );
    }

    renderActions() {
        return (
            <div className='Nav-Actions'>
                <Link className='Link' to='/auth/sign-in'>
                    <button className='Nav-Login'>{'login'}</button>
                </Link>
                <Link className='Link' to='/auth/sign-up'>
                    <button className='Nav-Apply'>{'apply now'}</button>
                </Link>
            </div>
        );
    }

    renderUnderblock() {
        return (
            <div className="Nav-Underblock"></div>
        );
    }

    renderContent() {
        return (
            <div className='ContainerWrapper'>
                <div className='Nav-Content'>
                    { this.renderContacts() }
                    { this.renderActions() }
                </div>
            </div>
        );
    }

    renderComponent() {
        return (
            <div className='Nav'>
                { this.renderContent() }
                { this.renderUnderblock() }
            </div>
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default NavComponent;
