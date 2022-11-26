import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './AdminSideBar.style.scss';

class AdminSideBarComponent extends PureComponent {

    linksList = [
        {
            id: 'home',
            imgUrl: '/assets/icons/sidebar/dashboard-icon.png',
            url: '/admin',
            name: 'dashboard',
        },
        {
            id: 'lecturers',
            imgUrl: '/assets/icons/sidebar/lecturer-icon.png',
            url: '/admin/lecturers',
            name: 'lecturers',
        },
        {
            id: 'students',
            imgUrl: '/assets/icons/sidebar/student-icon.png',
            url: '/admin/students',
            name: 'students',
        },
        {
            id: 'staff',
            imgUrl: '/assets/icons/sidebar/staff-icon.png',
            url: '/admin/staff',
            name: 'staff',
        },
        {
            id: 'courses',
            imgUrl: '/assets/icons/sidebar/graduation-cap-icon.png',
            url: '/admin/courses',
            name: 'courses',
        },
        {
            id: 'attendance',
            imgUrl: '/assets/icons/sidebar/attendance-icon.png',
            url: '/admin/attendance',
            name: 'attendance',
        },
        {
            id: 'settings',
            imgUrl: '/assets/icons/sidebar/settings-icon.png',
            url: '/admin/settings',
            name: 'settings',
        },
        {
            id: 'fees',
            imgUrl: '/assets/icons/sidebar/fees-icon.png',
            url: '/admin/fees',
            name: 'fees',
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
            <div className='AdminSideBar-Top'>
                <span className='AdminSideBar-Logo'>{'MP'}</span>
                <span  className='AdminSideBar-Brand'>{'College'}</span>
            </div>
        );
    }

    renderLink(item) {
        const { activeLink } = this.state;
        const { id, imgUrl, url, name } = item;
        const isActive = activeLink === name && 'AdminSideBar-ListItem_Active';

        return (
            <Link
                key={id}
                className='Link' 
                to={url}
                onClick={() => this.handleActiveLink(name)}
            >
                <li className={`AdminSideBar-ListItem ${isActive}`}>
                    <img
                        className='AdminSideBar-ListItemIcon'
                        src={imgUrl}
                        alt={`${name} displayed`}
                    />
                    <span className='AdminSideBar-ListText'>{name}</span>
                </li>
            </Link>
        );
    }

    renderLinks() {
        return this.linksList.map(this.renderLink.bind(this));
    }

    renderBottom() {
        return (
            <div className='AdminSideBar-Bottom'>
                <ul className='AdminSideBar-List'>
                    { this.renderLinks() }
                </ul>
            </div>
        );
    }

    renderSideBar() {
        return (
            <div className='AdminSideBar'>
                { this.renderTop() }
                { this.renderBottom() }
            </div>
        );
    }

    render() {
        return this.renderSideBar();
    }
}

export default AdminSideBarComponent;