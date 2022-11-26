import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './StudentSideBar.style.scss';

class StudentSideBarComponent extends PureComponent {

    linksList = [
        {
            id: 'home',
            imgUrl: '/assets/icons/sidebar/dashboard-icon.png',
            url: '/student',
            name: 'dashboard',
        },
        {
            id: 'my-courses',
            imgUrl: '/assets/icons/sidebar/graduation-cap-icon.png',
            url: '/student/courses',
            name: 'my courses',
        },
        {
            id: 'settings',
            imgUrl: '/assets/icons/sidebar/settings-icon.png',
            url: '/student/settings',
            name: 'settings',
        },
        {
            id: 'logOut',
            imgUrl: '/assets/icons/sidebar/logout-icon.png',
            url: '/auth/sign-in',
            name: 'logOut',
        },
    ];

    state = {
        activeLink: ''
    }

    handleActiveLink(link) {
        this.setState({ activeLink: link });
    }

    renderTop() {
        return (
            <div className='StudentSideBar-Top'>
                <span className='StudentSideBar-Logo'>{'MP'}</span>
                <span  className='StudentSideBar-Brand'>{'College'}</span>
            </div>
        );
    }

    renderLink(item) {
        const { activeLink } = this.state;
        const { id, imgUrl, url, name } = item;
        const isActive = activeLink === name && 'StudentSideBar-ListItem_Active';

        return (
            <Link
                key={id}
                className='Link' 
                to={url}
                onClick={() => this.handleActiveLink(name)}
            >
                <li className={`StudentSideBar-ListItem ${isActive}`}>
                    <img
                        className='StudentSideBar-ListItemIcon'
                        src={imgUrl}
                        alt={`${name} displayed`}
                    />
                    <span className='StudentSideBar-ListText'>{name}</span>
                </li>
            </Link>
        );
    }

    renderLinks() {
        return this.linksList.map(this.renderLink.bind(this));
    }

    renderBottom() {
        return (
            <div className='StudentSideBar-Bottom'>
                <ul className='StudentSideBar-List'>
                    { this.renderLinks() }
                </ul>
            </div>
        );
    }

    renderSideBar() {
        return (
            <div className='StudentSideBar'>
                { this.renderTop() }
                { this.renderBottom() }
            </div>
        );
    }

    render() {
        return this.renderSideBar();
    }
}

export default StudentSideBarComponent;