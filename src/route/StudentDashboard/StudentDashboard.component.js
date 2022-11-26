import { PureComponent } from 'react';

import StudentSideBar from '../../component/StudentSideBar';

import './StudentDashboard.style.scss';

class StudentDashboardComponent extends PureComponent {
 
  renderSideBar() {
    return (
      <div className='FixedSideBar'>
        <StudentSideBar />
      </div>
    );
  }

  renderMain() {
    return (
      <div className='StudentDashboard-Main'>
        <h2>{'Dashboard'}</h2>
      </div>
    )
  }
    
  renderComponents() {
    return (
      <main className='StudentDashboard'>
        <div className='StudentDashboard-Components'>
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

export default StudentDashboardComponent;