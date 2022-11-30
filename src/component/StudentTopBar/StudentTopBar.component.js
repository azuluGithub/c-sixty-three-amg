import { PureComponent } from 'react';

import './StudentTopBar.style.scss';

class StudentTopBarComponent extends PureComponent {

    user = {
        imgUrl: '/assets/portal/images/user2.png',
    }

    renderStudentComponent() {
        const homeIcon = '/assets/portal/icons/home.png';
        const userIcon = '/assets/portal/icons/user-grey.png';
        const settingIcon = '/assets/portal/icons/settings-grey.png';
        const notificationIcon = '/assets/portal/icons/bell-grey.png';
        //get route

        return (
            <div className='StudentTopBar'>
                <div className='StudentTopBar-RouteCounter'>
                    <div className='StudentTopBar-Route'>
                        <img
                            className='StudentTopBar-RouteIcon'
                            src={homeIcon}
                            alt='home route icon'
                        />
                        <div className='StudentTopBar-RoutePath'>
                            <span className='StudentTopBar-RoutePathRoute'>{"/"}</span>
                            <span className='StudentTopBar-RoutePathName'>{'Profile'}</span>
                        </div>
                    </div>
                    <p className='StudentTopBar-RouteName'>
                        {"Profile"}
                    </p>
                </div>
                <div className='StudentTopBar-ConfigsContainer'>
                    <input 
                        type='text' 
                        className='StudentTopBar-ConfigsSearch'
                        name='' 
                        value={''}
                        placeholder='Search here'
                        onChange={(e) =>{}}
                    />
                    <div className='StudentTopBar-ConfigsImage StudentTopBar-ConfigsImageUser'>
                        <img
                            className='StudentTopBar-ConfigsImg'
                            src={userIcon}
                            alt='user icon'
                        />
                    </div>
                    <div className='StudentTopBar-ConfigsImage'>
                        <img
                            className='StudentTopBar-ConfigsImg'
                            src={settingIcon}
                            alt='setting icon'
                        />
                    </div>
                    <div className='StudentTopBar-ConfigsImage'>
                        <img
                            className='StudentTopBar-ConfigsImg'
                            src={notificationIcon}
                            alt='notification icon'
                        />
                    </div>
                </div>
            </div>
        );
    }
    
    render() {
        return this.renderStudentComponent();
    }
}

export default StudentTopBarComponent;