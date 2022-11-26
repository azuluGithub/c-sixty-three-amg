import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AdminSideBar from '../../component/AdminSideBar';

import './AdminDashboard.style.scss';

class AdminDashboardComponent extends PureComponent {

  static propTypes = {
    studentsCount: PropTypes.number,
    staffCount: PropTypes.number,
    lecturersCount: PropTypes.number,
  }

  static defaultProps = {
    staffCount: 0,
    studentsCount: 0,
    lecturersCount: 0,
  }
 
  renderSideBar() {
    return (
      <div className='FixedSideBar'>
        <AdminSideBar />
      </div>
    );
  }

 
  renderHeader() {
    const { studentsCount, lecturersCount, staffCount } = this.props;

    return (
      <div className='AdminDashboard-Header'>
        <div className='AdminDashboard-HeaderCard'>
          <p className='AdminDashboard-HeaderTitle'>students</p>
          <p className='AdminDashboard-HeaderQuantity'>{studentsCount}</p>
        </div>
        <div className='AdminDashboard-HeaderCard'>
          <p className='AdminDashboard-HeaderTitle'>lecturers</p>
          <p className='AdminDashboard-HeaderQuantity'>{lecturersCount}</p>
        </div>
        <div className='AdminDashboard-HeaderCard'>
          <p className='AdminDashboard-HeaderTitle'>staff</p>
          <p className='AdminDashboard-HeaderQuantity'>{staffCount}</p>
        </div>
      </div>
    );
  }

  renderMain() {
    return (
      <div className='AdminDashboard-Main'>
        { this.renderHeader() }
      </div>
    )
  }
    
  renderComponents() {
    return (
      <main className='AdminDashboard'>
        <div className='AdminDashboard-Components'>
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

export default AdminDashboardComponent;