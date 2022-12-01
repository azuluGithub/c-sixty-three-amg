import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './StudentSideBar.style.scss';

class StudentSideBarComponent extends PureComponent {

    user = {
        imgUrl: '/assets/portal/images/user2.png',
    }

    linksList = [
        {
            id: 'dashboard',
            imgUrl: '/assets/portal/icons/dashboard.png',
            url: '/student',
            name: 'dashboard',
        },
        {
            id: 'courses-admin',
            imgUrl: '/assets/portal/icons/course-admin.png',
            url: '/student/courses',
            name: 'course admin',
        },
        {
            id: 'accounts',
            imgUrl: '/assets/portal/icons/accounts.png',
            url: '/student/accounts',
            name: 'accounts',
        },
        {
            id: 'notifications',
            imgUrl: '/assets/portal/icons/notifications.png',
            url: '/student',
            name: 'notifications',
        },
        {
            id: 'profile',
            imgUrl: '/assets/portal/icons/user-profile.png',
            url: '/student/profile',
            name: 'profile',
        },
    ];

    state = {
        // activeLink: ''
    }

    handleActiveLink(link) {
        // this.setState({ activeLink: link });
    }

    renderTop() {
        const { user: { imgUrl } } = this;

        return (
            <div className='StudentSideBar-Top'>
                <div className='StudentSideBar-TopImage'>
                    <img
                        className='StudentSideBar-TopImg'
                        src={imgUrl}
                        alt='student profile display'
                    />
                </div>
                <div className='StudentSideBar-TopTextContainer'>
                    <div className='StudentSideBar-TopText'>{'My Portal'}</div>
                </div>
            </div>
        );
    }

    renderLink(item) {
        // const { activeLink } = this.state;
        const { id, imgUrl, url, name } = item;
        // const isActive = activeLink === name && 'StudentSideBar-ListItem_Active';
        const isActive = name === 'accounts' && 'StudentSideBar-ListItem_Active';

        return (
            <Link
                key={id}
                className='Link' 
                to={url}
                onClick={() => this.handleActiveLink(name)}
            >
                <li className={`StudentSideBar-ListItem ${isActive}`}>
                    <div className='StudentSideBar-ListItemIconContainer'>
                        <img
                            className='StudentSideBar-ListItemIcon'
                            src={imgUrl}
                            alt={`${name} displayed`}
                        />
                    </div>
                    <span className='StudentSideBar-ListText'>{name}</span>
                </li>
            </Link>
        );
    }

    renderLinks() {
        return this.linksList.map(this.renderLink.bind(this));
    }

    renderCenter() {
        return (
            <div className='StudentSideBar-Center'>
                <ul className='StudentSideBar-List'>
                    { this.renderLinks() }
                </ul>
            </div>
        );
    }

    renderBottom() {
        const logOutImg = '/assets/portal/icons/power-off.png';

        return (
            <div className='StudentSideBar-Bottom'>
                <div className='StudentSideBar-Logout'>
                    <div className='StudentSideBar-LogoutItem StudentSideBar-LogoutItem_Active'>
                        <img
                            className='StudentSideBar-LogoutItemIcon'
                            src={logOutImg}
                            alt='logout from application icon'
                        />
                        <span className='StudentSideBar-LogoutText'>{'LOGOUT'}</span>
                    </div>
                </div>
            </div>
        );
    }

    renderDivider() {
        return (
            <div className='StudentSideBar-Divider'></div>
        );
    }

    renderSideBar() {
        return (
            <div className='StudentSideBar'>
                <div className='StudentSideBar-LinksContainer'>
                    { this.renderTop() }
                    { this.renderDivider() }
                    { this.renderCenter() }
                </div>
                <div className='StudentSideBar-LogoutContainer'>
                    { this.renderBottom() }
                </div>
            </div>
        );
    }

    render() {
        return this.renderSideBar();
    }
}

export default StudentSideBarComponent;