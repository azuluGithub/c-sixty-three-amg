import { PureComponent } from 'react';

import LecturerSideBar from '../../component/LecturerSideBar';

import './LecturerDashboard.style.scss';

class LecturerDashboardComponent extends PureComponent {
 
  renderSideBar() {
    return (
      <div className='FixedSideBar'>
        <LecturerSideBar />
      </div>
    );
  }


  renderMain() {
    return (
      <div className='LecturerDashboard-Main'>
        <h2>{'My Classes'}</h2>
      </div>
    )
  }
    
  renderComponents() {
    return (
      <main className='LecturerDashboard'>
        <div className='LecturerDashboard-Components'>
          { this.renderSideBar() }
          { this.renderMain() }
        </div>
      </main>
    );
  }

  render() {
    return this.renderComponents();
  }
}

export default LecturerDashboardComponent;