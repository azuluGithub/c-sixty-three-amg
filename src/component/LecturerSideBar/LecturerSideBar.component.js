import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './LecturerSideBar.style.scss';

class LecturerSideBarComponent extends PureComponent {

    linksList = [
        {
            id: 'home',
            imgUrl: '/assets/icons/sidebar/dashboard-icon.png',
            url: '/lecturer',
            name: 'dashboard',
        },
        {
            id: 'courses',
            imgUrl: '/assets/icons/sidebar/graduation-cap-icon.png',
            url: '/lecturer/courses',
            name: 'courses',
        },
        {
            id: 'schedule',
            imgUrl: '/assets/icons/sidebar/schedule-icon.png',
            url: '/lecturer/schedule',
            name: 'schedule',
        },
        {
            id: 'settings',
            imgUrl: '/assets/icons/sidebar/settings-icon.png',
            url: '/lecturer/settings',
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
            <div className='LecturerSideBar-Top'>
                <span className='LecturerSideBar-Logo'>{'MP'}</span>
                <span  className='LecturerSideBar-Brand'>{'College'}</span>
            </div>
        );
    }

    renderLink(item) {
        const { activeLink } = this.state;
        const { id, imgUrl, url, name } = item;
        const isActive = activeLink === name && 'LecturerSideBar-ListItem_Active';

        return (
            <Link
                key={id}
                className='Link' 
                to={url}
                onClick={() => this.handleActiveLink(name)}
            >
                <li className={`LecturerSideBar-ListItem ${isActive}`}>
                    <img
                        className='LecturerSideBar-ListItemIcon'
                        src={imgUrl}
                        alt={`${name} displayed`}
                    />
                    <span className='LecturerSideBar-ListText'>{name}</span>
                </li>
            </Link>
        );
    }

    renderLinks() {
        return this.linksList.map(this.renderLink.bind(this));
    }

    renderBottom() {
        return (
            <div className='LecturerSideBar-Bottom'>
                <ul className='LecturerSideBar-List'>
                    { this.renderLinks() }
                </ul>
            </div>
        );
    }

    renderSideBar() {
        return (
            <div className='LecturerSideBar'>
                { this.renderTop() }
                { this.renderBottom() }
            </div>
        );
    }

    render() {
        return this.renderSideBar();
    }
}

export default LecturerSideBarComponent;